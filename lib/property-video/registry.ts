import 'server-only';

import { normalizeOfferNumber } from './validation';

type VideoOffer = {
  offerNumber: string;
  country: string;
  city: string;
  streetAddress: string;
  youtubeVideoId: string;
};

// Add real offers here. Include only the street name and building number in streetAddress.
const videoOffers: readonly VideoOffer[] = [];

export function findVideoOffer(offerNumber: string): VideoOffer | undefined {
  return videoOffers.find((offer) => normalizeOfferNumber(offer.offerNumber) === offerNumber);
}
