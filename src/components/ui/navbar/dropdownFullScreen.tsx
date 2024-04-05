import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function DropdownFullScreen() {
  return (
    <Popover offset={34} placement="bottom" radius="none">
      <PopoverTrigger>
        <Button>Hola</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-[calc(100vw-50px)] flex flex-row justify-center gap-32">
          <div>Cat1</div>
          <div>Cat2</div>
          <div>Cat3</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
