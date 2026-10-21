import { createFileRoute } from '@tanstack/react-router';
import ResumeBuilder from '@/pages/ResumeBuilder';

export const Route = createFileRoute('/')({
  component: ResumeBuilder,
});
