import { ItemStatus } from './types';

export const ALL_STATUS = /^(?:最近)?(看过|听过|读过|玩过|在看|在听|在读|在玩|想看|想听|想读|想玩)/;

export const RATING_TEXT = {
  很差: 1,
  较差: 2,
  还行: 3,
  推荐: 4,
  力荐: 5,
};

export const SeeState = {
  '看过': ItemStatus.Complete,
  '在看': ItemStatus.Progress,
  '想看': ItemStatus.Wishlist,
};

export const ReadState = {
  '读过': ItemStatus.Complete,
  '在读': ItemStatus.Progress,
  '想读': ItemStatus.Wishlist,
};

export const PlayState = {
  '玩过': ItemStatus.Complete,
  '在玩': ItemStatus.Progress,
  '想玩': ItemStatus.Wishlist,
};

export const ListenState = {
  '听过': ItemStatus.Complete,
  '在听': ItemStatus.Progress,
  '想听': ItemStatus.Wishlist,
};
