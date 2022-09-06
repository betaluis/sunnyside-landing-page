export function load() {
  const features = [
    {
      title: "Transform your brand",
      content:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      color: "yellow",
      mobileImg: "/images/mobile/image-transform.jpg",
      desktopImg: "/images/desktop/image-transform.jpg",
      id: "1",
    },
    {
      title: "Stand out to the right audience",
      content:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digitial places.",
      color: "red",
      mobileImg: "/images/mobile/image-stand-out.jpg",
      desktopImg: "/images/desktop/image-stand-out.jpg",
      id: "2",
    },
  ];

  const services = [
    {
      title: "Grapic Design",
      content:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
      colorTheme: "green",
      mobileImg: "/images/mobile/image-graphic-design.jpg",
      desktopImg: "/images/desktop/image-graphic-design.jpg",
      id: "1",
    },
    {
      title: "Photography",
      content:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      colorTheme: "blue",
      mobileImg: "/images/mobile/image-photography.jpg",
      desktopImg: "/images/desktop/image-photography.jpg",
      id: "2",
    },
  ];

  const testimonials = [
    {
      image: "/images/image-emily.jpg",
      content:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      title: "Marketing Director",
      id: 1,
    },
    {
      image: "/images/image-thomas.jpg",
      content:
        "Sunnyside's enthsiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
      id: 2,
    },
    {
      image: "/images/image-jennie.jpg",
      content:
        "Incredible end result! Oour sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      title: "Business Owner",
      id: 3,
    },
  ];

  const gallery = [
    {
      desktopImagePath: '/images/desktop/image-gallery-milkbottles.jpg',
      mobileImagePath: '/images/mobile/image-gallery-milkbottles.jpg',
      alt: 'Milk bottles',
      id: 1,
    },
    {
      desktopImagePath: '/images/desktop/image-gallery-orange.jpg',
      mobileImagePath: '/images/mobile/image-gallery-orange.jpg',
      alt: 'Orange',
      id: 2,
    },
    {
      desktopImagePath: '/images/desktop/image-gallery-cone.jpg',
      mobileImagePath: '/images/mobile/image-gallery-cone.jpg',
      alt: 'Cone',
      id: 3,
    },
    {
      desktopImagePath: '/images/desktop/image-gallery-sugarcubes.jpg',
      mobileImagePath: '/images/mobile/image-gallery-sugar-cubes.jpg',
      alt: 'Sugar cubes',
      id: 4,
    },
  ];

  return {
    features,
    services,
    testimonials,
    gallery,
  };
}
