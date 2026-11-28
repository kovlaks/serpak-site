import { NextResponse } from 'next/server';
import { findVideoOffer } from '../../../lib/property-video/registry';
import { isYouTubeVideoId, normalizeOfferNumber } from '../../../lib/property-video/validation';

export async function POST(request: Request) {
  const payload: unknown = await request.json().catch(() => null);
  const offerNumber = normalizeOfferNumber(
    payload && typeof payload === 'object' && 'offerNumber' in payload ? payload.offerNumber : null,
  );

  if (!offerNumber) {
    return NextResponse.json({ error: 'invalid_offer_number' }, { status: 400 });
  }

  try {
    const offer = findVideoOffer(offerNumber);
    if (!offer) {
      return NextResponse.json({ error: 'offer_not_found' }, { status: 404 });
    }

    if (!isYouTubeVideoId(offer.youtubeVideoId)) {
      throw new Error('Invalid YouTube video ID in property registry');
    }

    return NextResponse.json({ youtubeVideoId: offer.youtubeVideoId });
  } catch {
    return NextResponse.json({ error: 'video_lookup_failed' }, { status: 500 });
  }
}
