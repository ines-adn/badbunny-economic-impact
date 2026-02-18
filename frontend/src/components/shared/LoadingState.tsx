export function LoadingState({ label = 'Loading data...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#E9ECEF] border-t-[#FF6B35]" />
        <p className="text-sm text-[#7F8C8D]">{label}</p>
      </div>
    </div>
  );
}
