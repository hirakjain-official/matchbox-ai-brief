
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+15556502566";

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in MATCHBOX AI services. Can you help me?");
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <div className="bg-white border-2 border-black/10 rounded-lg shadow-xl w-80 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black">WhatsApp Support</h3>
                <p className="text-xs text-black/70">Usually replies instantly</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="w-6 h-6"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="bg-black/5 p-3 rounded-lg mb-3">
            <p className="text-sm text-black/80">
              👋 Hi there! Need help with MATCHBOX AI? 
              <br />
              <br />
              Chat with us on WhatsApp for instant support!
            </p>
          </div>

          <Button
            onClick={openWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Start WhatsApp Chat
          </Button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
