// Edit this file to update the site content.

// FIND US — flip atEvent to true when the van is parked at an event.
export const event = {
  atEvent: false,
  name: 'Little Italy Mercato',
  address: 'W Date St & Kettner Blvd, San Diego, CA 92101',
  hours: 'Today · 8am – 2pm',
};

export const upcoming = [
  { date: 'SAT OCT 10', name: 'Little Italy Mercato', where: 'Kettner Blvd & W Date St' },
  { date: 'SUN OCT 18', name: 'North Park Farmers Market', where: 'North Park Way' },
  { date: 'SAT OCT 24', name: 'Fall Pop-up at Liberty Station', where: 'Point Loma' },
];

export const contact = {
  email: 'hello@maripastries.com',
  phone: '(619) 868-1729',
  phoneHref: 'tel:+16198681729',
  instagram: 'mari.sdca',
};

export const menu = [
  { name: 'COOKIES', note: '', items: [
    { name: 'SINGLE COOKIE', sub: '(REGULAR SIZE)', price: '$4' },
    { name: '4 PACK REGULAR COOKIES', sub: '', price: '$14' },
    { name: 'DOZEN REGULAR COOKIES', sub: '', price: '$42' },
    { name: 'DOZEN MINI COOKIES', sub: '(1.5 OZ)', price: '$18' } ] },
  { name: 'CAKES', note: 'MUST BE ORDERED 1 WEEK IN ADVANCE', items: [
    { name: 'DOZEN CUPCAKES', sub: '', price: '$48' },
    { name: 'HALF DOZEN CUPCAKES', sub: '', price: '$24' },
    { name: 'MINI NAKED CAKES', sub: '*', price: '$8' } ] },
];

export const gallery = [
  { src: '/assets/van.jpg', pos: 'center', col: 'span 2', row: 'span 2', alt: 'The Mari Pastries van' },
  { src: '/assets/dough-wrap.jpg', pos: 'left top', col: 'span 1', row: 'span 1', alt: 'Cookie dough' },
  { src: '/assets/packaging.jpg', pos: 'center', col: 'span 1', row: 'span 1', alt: 'Packaging' },
  { src: '/assets/menu-cookies.jpg', pos: 'left center', col: 'span 1', row: 'span 1', alt: 'Chocolate chip cookies' },
  { src: '/assets/stamp-cards.jpg', pos: 'center', col: 'span 2', row: 'span 1', alt: 'Stamp cards' },
  { src: '/assets/dough-wrap.jpg', pos: 'right top', col: 'span 1', row: 'span 1', alt: 'Monogram wrapping paper' },
];

export const orderOptions = ['Cookies', 'Mini cookies', 'Cupcakes', 'Mini naked cakes', 'Wedding / event dessert table', 'Something custom'];

export const faqs = [
  ['Do you make wedding cakes and dessert tables?', 'Yes! We love weddings. We offer naked cakes, cupcake towers, cookie favors and full dessert tables. Send us your date and guest count through the order form and we’ll put together a custom quote.'],
  ['How far in advance should I book for a wedding?', 'We recommend reaching out 6–8 weeks before your date. Popular summer weekends fill up quickly, so earlier is always better.'],
  ['Do you offer tastings?', 'Wedding couples can book a tasting box with a selection of cake flavors and fillings to enjoy at home. The cost is credited toward your order when you book.'],
  ['Do you deliver and set up?', 'We deliver throughout San Diego County. Delivery and setup fees depend on distance and the size of your order.'],
  ['How much notice do you need for regular orders?', 'Cookies need about 3 days’ notice. Cakes and cupcakes must be ordered at least one week in advance.'],
  ['Can you accommodate allergies or dietary needs?', 'Let us know in your order notes. We can adjust some recipes, but our kitchen handles wheat, dairy, eggs and nuts, so we can’t guarantee allergen-free treats.'],
  ['Is a deposit required?', 'Weddings and large events require a 50% deposit to hold your date, with the balance due two weeks before the event.'],
];

export const posts = [
  { img: '/assets/van.jpg', pos: 'center', date: 'SEP 2026', tag: 'THE VAN', title: 'Meet the pink van', excerpt: 'Our little bakery finally has wheels. After months of sanding, painting and a lot of dusty rose, the van is ready to bring cookies to farmers markets and pop-ups all over San Diego.', body: 'Follow along on Instagram to see where she parks each weekend — and come say hi. The first cookie is always the best one.' },
  { img: '/assets/stamp-cards.jpg', pos: 'center', date: 'AUG 2026', tag: 'NEWS', title: 'Collect ten stamps, get a pastry on us', excerpt: 'Our new stamp cards are here. Every visit earns a little flower stamp, and once your card is full, your next pastry is on the house.', body: 'Ask for a card at the van or with your next order pickup. Lost cards happen — we’ll always do our best to make it right.' },
  { img: '/assets/naked-cake.jpg', pos: 'top', date: 'JUL 2026', tag: 'WEDDINGS', title: 'Planning your wedding dessert table', excerpt: 'Naked cakes, cupcake towers, cookie favors — a few tips for building a dessert table that looks as good as it tastes.', body: 'Start with one statement piece, then fill in with two or three smaller treats. Plan on about 1.5 desserts per guest, and pick flavors that match the season.' },
];
