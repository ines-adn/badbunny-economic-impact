export function ErrorState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
      <p className="text-sm text-red-600">
        Error: {message}
      </p>
    </div>
  );
}
