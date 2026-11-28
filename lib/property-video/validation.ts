export function normalizeOfferNumber(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  const offerNumber = value.trim();
  if (!/^[0-9]{2}[A-Za-z]\/[0-9]{4}$/.test(offerNumber)) return null;

  return offerNumber.toUpperCase();
}

export function isYouTubeVideoId(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9_-]{11}$/.test(value);
}
