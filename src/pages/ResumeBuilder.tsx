import { useRef } from 'react';
import { Header } from '@/components/Header';
import { EditorSidebar } from '@/components/EditorSidebar';
import { PreviewPanel } from '@/components/PreviewPanel';

export default function ResumeBuilder() {
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        <PreviewPanel previewRef={previewRef} />
      </div>
    </div>
  );
}
