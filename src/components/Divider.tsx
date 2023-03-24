import clsxm from '@/lib/clsxm';

export default function Divider({ className }: { className?: string }) {
  return (
    <>
      <div className={clsxm('h-px w-full bg-gray-400', className)} />
    </>
  );
}
