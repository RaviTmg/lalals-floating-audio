export interface ISong {
  id: string;
  title: string;
  url: string;
  author: string;
  thumbnail: string;
  numberOfPlays: string;
  numberOfLikes: number;
  prompt: {
    title: string;
    content?: string;
  };
}

export const songs: ISong[] = [
  {
    id: "1",
    title: "Balenciaga",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 854,
    prompt: {
      title: "R&B with uplifting vibes about neon streets",
      content: "(Verse 1) \n Running down the neon streets,",
    },
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__",
  },
  {
    id: "2",
    title: "Nevada",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',

  },
  {
    id: "3",
    title: "Make Me Feel",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "4",
    title: "Palm Beach",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
  {
    id: "5",
    title: "Christmas",
    author: "username",
    numberOfPlays: "13M",
    numberOfLikes: 100,
    prompt: {
      title: 'R&B with uplifting vibes about neon streets',
      content: '(Verse 1) \n Running down the neon streets,',
    },
    url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/2zTiToSY7fDY6gwZSekph5p98o55KQZF1Y55DggY.mp3',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5fbd/08f9/73982366f83a879a4ab870f71cfc9c38?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INb~cB1bQWRctr9slde4K5ZUvV~M1cK6JwwwDcuubsqosbu~D2Ba8IQFsC8WeK69HxPIRxutxADYfk2o-MjStAhFRa17YpqUU7B~f2tgH5CvCh8tF5eB0F-Kgt4pNjWTlqHnyqlDU0bjyS7-hbPN35Wg1l5WnfA3mRRz1IWCwKK~Z-xwTrCNCVbj30xVMxRflmMM-lsEEjk5xn-ZEGGRf1mOK4XVpEMslK47VsinRa19fuNn8V7LlgVTQwNhkqsE4dN3LDmaVaWn0MvhpixXeOh6BP0~T0ogpA0X7RAR1ZLy9P5d8nv1pKr92xmbLA-24AtVrm~HeESC5OYQX~oAzA__',
  },
];
