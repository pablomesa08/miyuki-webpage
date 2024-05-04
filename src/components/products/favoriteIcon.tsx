import { Button } from "@nextui-org/react";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { useAuth } from "@/hooks/useAuth";
import { useProduct } from "@/hooks/useProduct";
import { useState, useEffect } from "react";

export default function FavoriteIcon({ productId }: { productId: string }) {
  const { isLoading, isLoggedIn } = useAuth();
  const { getFavoriteProductId, setFavoriteProduct } = useProduct();
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // Inicializamos con false en lugar de null

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (isLoggedIn) {
        const favoriteStatus = await getFavoriteProductId(productId);
        setIsFavorite(favoriteStatus);
      }
    };
    fetchFavoriteStatus();
  }, [getFavoriteProductId, isLoggedIn, productId]);

  const handleFavoriteClick = async () => {
    if (isLoggedIn) {
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
      await setFavoriteProduct(productId, !isFavorite);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) return <></>;

  return (
    <Button
      color={isFavorite ? "success" : "warning"}
      isIconOnly
      onClick={handleFavoriteClick}
    >
      <HeartIcon
        filled={undefined}
        size={undefined}
        height={undefined}
        width={undefined}
        label={undefined}
      />
    </Button>
  );
}
