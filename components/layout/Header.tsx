import Container from '@/components/ui/Container';

export default function Header() {
  return (
    <header className="bg-white pt-8 pb-4 md:pt-12 md:pb-6">
      <Container>
        <a
          href="#top"
          aria-label="Peezy — back to top"
          className="inline-block"
        >
          {/*
           * Plain <img> for the wordmark SVG — keeps next.config free of
           * dangerouslyAllowSVG. File is ~5KB, served as a static asset.
           * Aspect ratio of source viewBox is 1800/612 ≈ 2.94:1.
           */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/peezy-wordmark.svg"
            alt="Peezy"
            width={94}
            height={32}
            className="h-9 md:h-12 w-auto"
          />
        </a>
      </Container>
    </header>
  );
}
