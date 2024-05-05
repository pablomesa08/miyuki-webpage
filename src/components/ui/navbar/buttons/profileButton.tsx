import { useAuth } from "@/hooks/useAuth";
import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function ProfileButton() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) return null;

  const handleProfile = () => {
    router.push("/user/profile");
  };

  return (
    <Button isIconOnly onClick={handleProfile}>
      <Icon path={mdiAccount} size={1} />
    </Button>
  );
}
