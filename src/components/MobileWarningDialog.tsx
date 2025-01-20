import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

export function MobileWarningDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Viewing on Mobile</DialogTitle>
          <DialogDescription className="pt-2">
            For the best experience, we recommend viewing this demo on a desktop or tablet device. While you can continue on mobile, some features may be limited.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}