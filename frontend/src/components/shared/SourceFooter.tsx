interface Props {
  source: string;
  url?: string;
  exportSection?: string;
}

export function SourceFooter({ source, url, exportSection }: Props) {
  return (
    <div className="mt-4 flex items-center justify-between text-xs text-[#7F8C8D]">
      <span>
        Source:{' '}
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B35]">
            {source}
          </a>
        ) : (
          source
        )}
      </span>
      {exportSection && (
        <a
          href={`/api/export/${exportSection}`}
          download
          className="inline-flex items-center gap-1 underline hover:text-[#FF6B35]"
        >
          Export CSV
        </a>
      )}
    </div>
  );
}
