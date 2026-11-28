function isMixedSegment(segment: string): boolean {
  return /^[A-Za-z0-9]+$/.test(segment) && /[A-Za-z]/.test(segment) && /[0-9]/.test(segment);
}

export function normalizeOfferNumber(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  const offerNumber = value.trim();
  const segments = offerNumber.split('/');
  if (segments.length !== 3) return null;

  const [first, second, third] = segments;
  if (!isMixedSegment(first) || !isMixedSegment(second) || !/^[0-9]{2}$/.test(third)) return null;

  return offerNumber.toUpperCase();
}

export function isYouTubeVideoId(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9_-]{11}$/.test(value);
}
