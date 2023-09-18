import localFont from 'next/font/local';

export const neueMontreal = localFont({
  src: [
    {
      path: '../../assets/fonts/neue-montreal/neuemontreal-regular.otf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/neue-montreal/neuemontreal-medium.otf',
      weight: '500',
    },
    {
      path: '../../assets/fonts/neue-montreal/neuemontreal-bold.otf',
      weight: '700',
    },
    {
      path: '../../assets/fonts/neue-montreal/neuemontreal-light.otf',
      weight: '300',
    },
  ],
  variable: '--font-neue-montreal',
});

export const tungsten = localFont({
  src: [
    {
      path: '../../assets/fonts/tungsten/tungsten-bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-tungsten',
});
