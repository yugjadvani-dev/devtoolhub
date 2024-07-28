import { useToast } from "@/components/ui/use-toast";

const useCopyToClipboard = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast({
            title: "Text copied to clipboard",
          });
        })
        .catch((err) => {
          toast({
            title: "Could not copy text",
            description: err.toString(),
            variant: "destructive",
          });
        });
    } else {
      toast({
        title: "Clipboard API not available",
        variant: "destructive",
      });
    }
  };

  return copyToClipboard;
};

export default useCopyToClipboard;
