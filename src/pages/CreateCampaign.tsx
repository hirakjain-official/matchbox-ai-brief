
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mic, FileText, Upload, ArrowLeft, Send, Square, Play, RotateCcw, File, X } from "lucide-react";
import { useVoiceRecorder } from "@/hooks/useVoiceRecorder";

const CreateCampaign = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    isRecording,
    audioBlob,
    duration,
    startRecording,
    stopRecording,
    resetRecording
  } = useVoiceRecorder();

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid file type (PDF, DOC, DOCX, or TXT)');
        return;
      }

      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Save to Supabase database
    console.log("Campaign submission:", {
      title: campaignTitle,
      method: selectedMethod,
      description: textDescription,
      voiceRecording: audioBlob ? "Voice recording attached" : null,
      uploadedFile: uploadedFile ? {
        name: uploadedFile.name,
        size: uploadedFile.size,
        type: uploadedFile.type
      } : null,
      timestamp: new Date().toISOString()
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Campaign created successfully!");
      // Reset form
      setCampaignTitle("");
      setTextDescription("");
      setSelectedMethod(null);
      setUploadedFile(null);
      resetRecording();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1000);
  };

  const playRecording = () => {
    if (audioBlob) {
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/10 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2 text-black hover:text-[#FF6B35] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-2xl font-bold">MATCHBOX AI</span>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Create a Campaign</h1>
            <p className="text-xl text-black/70">
              Tell us about your campaign vision. Choose your preferred method below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Campaign Title */}
            <div>
              <Label htmlFor="title" className="text-black font-medium text-lg">
                Campaign Title
              </Label>
              <Input
                id="title"
                value={campaignTitle}
                onChange={(e) => setCampaignTitle(e.target.value)}
                required
                className="mt-2 border-black/20 focus:border-[#FF6B35] focus:ring-[#FF6B35] text-lg p-4 h-auto"
                placeholder="Enter your campaign title"
              />
            </div>

            {/* Method Selection */}
            <div>
              <Label className="text-black font-medium text-lg mb-4 block">
                How would you like to describe your campaign?
              </Label>
              <div className="grid md:grid-cols-3 gap-6">
                <div
                  onClick={() => setSelectedMethod("voice")}
                  className={`p-8 border-2 rounded-lg cursor-pointer transition-all hover:border-[#FF6B35] ${
                    selectedMethod === "voice" 
                      ? "border-[#FF6B35] bg-[#FF6B35]/5" 
                      : "border-black/20"
                  }`}
                >
                  <Mic className={`w-12 h-12 mx-auto mb-4 ${
                    selectedMethod === "voice" ? "text-[#FF6B35]" : "text-black"
                  }`} />
                  <h3 className="text-xl font-bold text-center mb-2">Voice Note</h3>
                  <p className="text-black/70 text-center">
                    Record your campaign brief naturally
                  </p>
                </div>

                <div
                  onClick={() => setSelectedMethod("text")}
                  className={`p-8 border-2 rounded-lg cursor-pointer transition-all hover:border-[#FF6B35] ${
                    selectedMethod === "text" 
                      ? "border-[#FF6B35] bg-[#FF6B35]/5" 
                      : "border-black/20"
                  }`}
                >
                  <FileText className={`w-12 h-12 mx-auto mb-4 ${
                    selectedMethod === "text" ? "text-[#FF6B35]" : "text-black"
                  }`} />
                  <h3 className="text-xl font-bold text-center mb-2">Text Description</h3>
                  <p className="text-black/70 text-center">
                    Write your campaign details
                  </p>
                </div>

                <div
                  onClick={() => setSelectedMethod("document")}
                  className={`p-8 border-2 rounded-lg cursor-pointer transition-all hover:border-[#FF6B35] ${
                    selectedMethod === "document" 
                      ? "border-[#FF6B35] bg-[#FF6B35]/5" 
                      : "border-black/20"
                  }`}
                >
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${
                    selectedMethod === "document" ? "text-[#FF6B35]" : "text-black"
                  }`} />
                  <h3 className="text-xl font-bold text-center mb-2">Upload Document</h3>
                  <p className="text-black/70 text-center">
                    Upload a detailed brief document
                  </p>
                </div>
              </div>
            </div>

            {/* Content Area Based on Selected Method */}
            {selectedMethod === "voice" && (
              <div className="bg-black/5 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-4">Record Your Voice Note</h3>
                <div className="text-center py-12">
                  {!audioBlob ? (
                    <>
                      <Mic className={`w-16 h-16 mx-auto mb-4 ${isRecording ? 'text-red-500 animate-pulse' : 'text-[#FF6B35]'}`} />
                      {isRecording && (
                        <div className="mb-4">
                          <div className="text-2xl font-mono text-red-500 mb-2">
                            {formatDuration(duration)}
                          </div>
                          <div className="text-sm text-black/70">Recording in progress...</div>
                        </div>
                      )}
                      <div className="flex gap-4 justify-center">
                        {!isRecording ? (
                          <Button 
                            type="button"
                            onClick={startRecording}
                            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
                          >
                            <Mic className="mr-2 w-4 h-4" />
                            Start Recording
                          </Button>
                        ) : (
                          <Button 
                            type="button"
                            onClick={stopRecording}
                            className="bg-red-500 hover:bg-red-600 text-white"
                          >
                            <Square className="mr-2 w-4 h-4" />
                            Stop Recording
                          </Button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                          <Mic className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="text-lg font-medium text-black mb-2">
                          Recording Complete ({formatDuration(duration)})
                        </div>
                        <div className="text-sm text-black/70">
                          Your voice note has been recorded successfully
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button 
                          type="button"
                          onClick={playRecording}
                          variant="outline"
                          className="border-black text-black hover:bg-black hover:text-white"
                        >
                          <Play className="mr-2 w-4 h-4" />
                          Play Recording
                        </Button>
                        <Button 
                          type="button"
                          onClick={resetRecording}
                          variant="outline"
                          className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
                        >
                          <RotateCcw className="mr-2 w-4 h-4" />
                          Record Again
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {selectedMethod === "text" && (
              <div>
                <Label htmlFor="description" className="text-black font-medium text-lg">
                  Campaign Description
                </Label>
                <Textarea
                  id="description"
                  value={textDescription}
                  onChange={(e) => setTextDescription(e.target.value)}
                  required
                  className="mt-2 border-black/20 focus:border-[#FF6B35] focus:ring-[#FF6B35] min-h-[200px] text-lg"
                  placeholder="Describe your campaign goals, target audience, key messaging, and any specific requirements..."
                />
              </div>
            )}

            {selectedMethod === "document" && (
              <div className="bg-black/5 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-4">Upload Document</h3>
                
                {!uploadedFile ? (
                  <div className="text-center py-12 border-2 border-dashed border-black/20 rounded-lg">
                    <Upload className="w-16 h-16 text-[#FF6B35] mx-auto mb-4" />
                    <Button 
                      type="button"
                      onClick={handleFileSelect}
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white"
                    >
                      Choose File
                    </Button>
                    <p className="text-black/70 mt-4">
                      Upload PDF, DOC, DOCX, or TXT files (Max 10MB)
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt"
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <File className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-black">{uploadedFile.name}</p>
                          <p className="text-sm text-black/70">{formatFileSize(uploadedFile.size)}</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={removeFile}
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <Button
                        type="button"
                        onClick={handleFileSelect}
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      >
                        Choose Different File
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            {selectedMethod && (selectedMethod !== "voice" || audioBlob || textDescription || uploadedFile) && (
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-12 py-4 h-auto"
                >
                  {isSubmitting ? "Creating Campaign..." : "Create Campaign"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
