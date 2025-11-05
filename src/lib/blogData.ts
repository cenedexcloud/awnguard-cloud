export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      list?: string[];
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'party-tent-services-for-weddings-and-summer-events',
    title: 'Party Tent Services for Weddings and Summer Events',
    excerpt: 'Though COVID-19 has put many events on hold, with lifted restrictions right around the corner, it\'s time to reconsider summer plans.',
    category: 'Events',
    date: 'September 7, 2023',
    image: 'https://ext.same-assets.com/1191166484/1923043068.jpeg',
    content: {
      intro: 'Though COVID-19 has put many events on hold, with lifted restrictions right around the corner, it\'s time to reconsider summer plans.\n\nPeople can\'t wait to go out, socialize and put the past year firmly behind them - and what better way to do so than by hosting events in the great outdoors? Whether you want to take advantage of the changing weather or would like to showcase a jaw-dropping view, any outdoor gathering needs a party tent to help bring everything together.\n\nWe can help you find great solutions for any event, here\'s how!',
      sections: [
        {
          heading: 'Worry-Free Weather',
          content: 'The weather is normally uncontrollable, but party tents can shield your party from the wind, rain and even excessive sunlight.\n\nEven if you\'re expecting perfect weather, sometimes tents and awnings get dirty. Instead of grabbing the nearest ladder and bucket, you can rely on us for efficient cleaning services. Everything will look spotless and ready to go for the next event thanks to our party tent cleaning offer.'
        },
        {
          heading: 'Personalized Design',
          content: 'Picking the right tent will instantly change the atmosphere of your party whether you\'re looking for something classy or modern. Party tent manufacturing is in our wheelhouse which is why we can offer you precisely what you need.\n\nThanks to our awning manufacturing services, we can also provide awnings that will help blend in with the tent you\'ve chosen, giving an area a stylish and cohesive look.'
        },
        {
          heading: 'Unlimited Uses',
          content: 'You can also make the most out of your tent with our party tent assessment services.\n\nThese will ensure that your tent is up to standards at all times. By being proactive, you\'ll also know if you\'ll need a replacement in the near future, significantly reducing downtime. Couple this with an awning assessment to ensure longevity across all products.\n\nSo, if you\'re ready to start exploring options in time for the boom of summer parties and weddings that are nearly upon us, contact us and we\'ll help you figure out the best approach to your event planning!'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'how-to-choose-the-right-awning',
    title: 'How to Choose The Right Awning',
    excerpt: 'Choosing the right awning for your business might seem simple, but it\'s a decision that goes beyond design.',
    category: 'Awning Maintenance',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/2873393069.false',
    content: {
      intro: 'Choosing the right awning for your business might seem simple, but it\'s a decision that goes beyond design. The right awning can elevate your building\'s appearance, enhance visibility, and even provide practical benefits like weather protection. To make the best choice, it\'s crucial to consider your specific needs and future growth. And with the right partners, the process can be much smoother.',
      sections: [
        {
          heading: 'Function',
          content: 'What\'s the purpose behind your investment in an awning? Understanding this will guide your decision. Here are some key reasons businesses choose to invest in awnings:',
          list: [
            'Updating the look of your building',
            'Enhancing your business\'s visibility by branding your location',
            'Providing protection from the sun or rain for customers',
            'Shading windows and doors to reduce cooling costs',
            'Expanding restaurant seating with a stylish outdoor space'
          ]
        },
        {
          heading: 'Growth',
          content: 'Awnings offer more than just aesthetic appeal—they\'re practical, too. Whether you need to shelter customers from the elements or make your business stand out, an awning is a versatile solution that can serve many purposes.\n\nThink about your company\'s growth trajectory. You might start with an awning over your entrance to create a professional, inviting look for customers as they walk in. But as your business grows, you might want to add more awnings over windows, offering additional branding opportunities and increasing your building\'s overall appeal. Planning for growth now can save you time and money later.'
        },
        {
          heading: 'Design',
          content: 'This is where your creativity can truly shine. Awnings come in a variety of designs, each offering unique benefits:',
          list: [
            'Retractable awnings for maximum flexibility',
            'Standard awnings with or without a valance for a classic look',
            'Dome awnings to enhance your building\'s architectural lines',
            'Quarter-round or waterfall-style awnings that provide space for exterior lighting or security cameras'
          ]
        },
        {
          heading: 'Let\'s Get Started',
          content: 'Your awning should be a reflection of your brand. The right design will not only look great but also function effectively, contributing to your business\'s success.\n\nWith all these factors in mind, it\'s time to take the next step. At AwnGuard, we\'re here to guide you through the process, helping you find the perfect awning solution that meets your business needs. Give us a call, and let\'s create something great together!'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'party-tents-for-outdoor-events',
    title: 'Party Tents for Outdoor Events',
    excerpt: 'Preserve your party tent with proper maintenance and cleaning services.',
    category: 'Events',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/3404599814.false',
    content: {
      intro: 'Whether you want to take advantage of the changing weather or would like to showcase a jaw-dropping view, a party tent can be a great addition to your outdoor space. Canopies and tents can be manufactured in many shapes and sizes, providing a shield from wind, rain, heat and the sun, as well as helping to create an intimate and inviting space for your guests.',
      sections: [
        {
          heading: 'Preserve Your Party Tent',
          content: 'If you already have a tent, you know the importance of keeping it clean and well-maintained. Instead of grabbing the nearest ladder and bucket, partnering with a professional service company to regularly clean it efficiently will help keep your tent looking flawless, and prolong its life for years to come. AwnGuard is that partner in the Southern California region.\n\nContact us for a quote.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'outdoor-solutions-for-businesses',
    title: 'Outdoor Solutions for Businesses Post-Pandemic',
    excerpt: 'We\'re nearing the end of the coronavirus pandemic, but we\'re not out of the woods. That\'s why businesses need to rethink their overall strategies.',
    category: 'Business Tips',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/676812335.false',
    content: {
      intro: 'We\'re nearing the end of the coronavirus pandemic, but we\'re not out of the woods. That\'s why businesses need to rethink their overall strategies in order to stay afloat. As restrictions lift and the weather is changing, it\'s time to talk about how you can take advantage of your outdoor space if you haven\'t already.\n\nAwnings will give your brick-and-mortar business a much-needed facelift, which is why you should consider getting them as part of your re-opening marketing strategy.\n\nIn terms of awning solutions, here are a few things to keep in mind.',
      sections: [
        {
          heading: 'Advertise Your Business',
          content: 'Awnings are a great way to spruce up your storefront, but you can take it one step further and advertise your business so that potential customers have a better chance to see you from afar.\n\nThey can showcase your business\' name, logo, and even a call to action. We can help you create the perfect design that will blend into the surrounding area effortlessly without sacrificing your visibility.'
        },
        {
          heading: 'Take Advantage of Outdoor Seating',
          content: 'While outdoor seating is usually reserved for restaurants and cafes, any business can take advantage of this. You\'ll shield your customers from the rain and sun, making their visit more enjoyable.\n\nAfter you\'re done installing your awning, we can also offer cleaning services in order to ensure that your outdoor area is in perfect condition all year round.'
        },
        {
          heading: 'Provide Long-term Protection',
          content: 'Outdoor furniture is less likely to get damaged over time with a little help. The same goes for indoor furniture, especially if it\'s close to the windows. Awnings can provide longevity to your items and investments.\n\nPeriodic awning assessments will provide you peace of mind, too. We\'ll assess the fabric and structure of your awning so that your business won\'t be taken by surprise by potential issues.\n\nPost-pandemic, it\'s important for all businesses to re-evaluate how they\'ll attract new customers, and awnings are versatile solutions that we can help you out with if you <a href="/contact">give us a call</a>!'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'awning-designs-guide',
    title: 'A Guide to Awning Designs for Businesses',
    excerpt: 'Depending on location, brick-and-mortar stores can face a lot of challenges. The competition up and down the block may be fierce.',
    category: 'Awning Maintenance',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/1685503905.jpeg',
    content: {
      intro: 'Depending on location, brick-and-mortar stores can face a lot of challenges. The competition up and down the block may be fierce, which is why business owners must consider all their options when it comes to attracting customers.\n\nAwnings, for example, are great for any type of business. Not only are they extremely versatile, but they can provide various functions depending on your needs.',
      sections: [
        {
          heading: 'Awning Design',
          content: 'Give your business the chance to stand out by installing a custom-made awning. Your awning design can have a huge impact on your visibility. From the color to the shape of your awning, you can pick from a myriad of options that will make your business look more stylish while also providing crucial information for potential customers.\n\nHere, we\'re talking about your phone number, operating hours, and even your logo. All of these elements can come together to create a cohesive image of what customers can expect once they step inside your business.'
        },
        {
          heading: 'Building Facade',
          content: 'Awnings aren\'t just used to communicate what your business is about, they can also make your building look different. A boring exterior can be transformed immediately with the right type of design.\n\nNot only that, awnings can make any space look bigger. Awning specialists can help you pick the right shape, height, and slope that can make any storefront appear wider or taller.'
        },
        {
          heading: 'Functionality',
          content: 'Originally, awnings were created to offer shade and protection from the elements, such as rain. Your new awning, while stylish, will provide the same benefits. For restaurants, they can expand your seating area, allowing diners to enjoy their meals out in the open without discomfort.\n\nSome may even be retractable or seasonal- we really did mean it when we said that the possibilities are endless!\n\nBefore the awning installation process can even begin, contact us so that we may help you pick the perfect design for your business!'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'los-willows-oceanside',
    title: 'Los Willows – Oceanside and Fallbrook Locations',
    excerpt: 'Los Willows B&B is now ready for \'White Weddings\'. This popular event venue for weddings and other special events.',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/1464963876.jpeg',
    content: {
      intro: 'Los Willows B&B, a premier wedding and event venue with locations in Oceanside and Fallbrook, California, hosts over 100 special events each year. Their spectacular grounds and amenities create the perfect backdrop for memorable occasions, but maintaining pristine awnings and event tents is essential to match the venue\'s prestige.',
      sections: []
    }
  },
  {
    id: 7,
    slug: 'j-s-t-real-estate-services',
    title: 'J.S.T. Real Estate Services',
    excerpt: 'Customer since 2010 - "You guys are always easy to work with and dependable."',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/4106557211.jpeg',
    content: {
      intro: 'J.S.T. Real Estate Services has been a valued AwnGuard customer since 2010, representing one of our longest-standing partnerships in commercial property management. Their trust in our services demonstrates the quality and reliability we bring to every project.',
      sections: [
        {
          heading: 'Customer Since 2010',
          content: '"You guys are always easy to work with and dependable and while price is important it\'s not always the most important thing. We like working with you."\n\n<strong>Steve Tirittili</strong><br/>Sr Property Manager<br/>J.S.T. Real Estate Services'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'boardwalk-development-inc',
    title: 'Boardwalk Development, Inc.',
    excerpt: 'Customer since 2003 - "You guys do a great job. There\'s no reason to switch."',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/3280702032.false',
    content: {
      intro: 'Boardwalk Development, Inc. has been a loyal AwnGuard customer since 2003, representing over two decades of trust and exceptional service. Their continued partnership exemplifies the long-term relationships we build with our commercial property clients.',
      sections: [
        {
          heading: 'Customer Since 2003',
          content: '"You guys do a great job. There\'s no reason to switch."\n\n<strong>Phil Ladman</strong><br/>Property Manager<br/>Boardwalk Development, Inc.'
        }
      ]
    }
  }
];

export const categories = ['All', 'Awning Maintenance', 'Solar Panel Care', 'Events', 'Business Tips', 'Case Studies'];
