# Nik Salon, Guatemala

This is a GatsbyJS website for Nik Salon. All content comes from json and markdown.

Requirements:

- NodeJS v18.6.0 - it wont build on cloudflare pages
- Gatsby-cli v5.4
- Gatsby v5.4.2
- Yarn

Note: gatsby develop does not run on wsl, use powershell, git wont work on powershell so use wsl...

# pre-live TODO

There is a problem on iphone, i cant replicated it with chromium, i need someone with an iphone and mac and a cable and with technical abiility to work them together, guicho?? The hero box is half off the left side of the screen.

- finish the "by the owner" section for the home page, and add "author" section to the blog

Improve Expertise/Professionalism of the site by referencing marelin a lot:

- ask marelin for a history of the company, just bulletpoints is enough to start then ai generate content for the about page
- marelin to use copmany credit card to setup google maps api key, need niksalon.com.gt and nik-salonpages.dev to be approved
- marelin to edit the booking categories, there is way too many
- marelin to setup the business listing page and share access to my google account

Turn back on the about page
finish the about page and translate it

# After First Live Release TODO

- give me access to the google account for creating the business listing
- give me access to the google account for managing analytics and search console - im doing that now..
- setup google webmaster tools
- setup facebook chat, if required

facebook key - need marelin to login to the business facebook account
google map api key - need marelin and her business card
nightwatch.io for rank monitoring
avoid AI content detection "write the above content so that is is not detected as AI content by AI content detectors"

# Phase 2:

the logo on spash screen fades in with a black background, png issue or setting?
add faq review schema
google analytics conversion events
get TA keywords from answerthepublic, write more blog articles

- new balayage image neeeded, ifve replaced with a free one but a realistic one would be even better
  schema.org business markup - https://schema.org/BeautySalon - added localbusiness from the genrator but not added for the other services or blog articles - https://technicalseo.com/tools/schema-markup-generator/
  put back in the privacy footer link - { "label": "Privacy", "url": "/privacy" }
  get word count of competing companies and articles using
  use short paragraphs for content so its easy to read
  ensure articles have a lot of images in them, esp after h1/h2
  include some callout designs for important text like the CTA
  include a yes/no goog/bad comparison table or other design using ticks and crosses etc
  use lists for breaking up the content
  ensure articles have keywords in the url, hyphens and keep them fairly short
  add related links to other pages into the content
  keyword optimisation for service pages, answerthepublic
  screamingfrog free ediion will work well
  twitter and tweet about the new blog article
  research more keywords to target for the blog area
  5 in-links for each page, so for blog, 1 on the listing and 4 from other pages, screamingfrog "inlinks" section can show thise
  rank tracker system, serpfox has some free options
  compare article types for targeted keywords, read headings and writing style
  use content score serferscontenteditor
  nlp-friendly answers
  dedicated about page, about the owner and staff, but need input from marelin about the company history and aims, pictures of the staff too?
  ensure pages have schema markup - test site against structured data
  can midjourney be used to create interesting article heading images? probably...
  ecommerce
  re-use the data from /content/services?
  advertising
  backlinks, find places for backlinks, use ahrefs/ubersuggest backlink report to email who linked to #1 on google, get their hunter.io email
  gmass will help to send bulk email, send followups to a pitch, ask for a guest post
  more content set to release regularily, weekly
  link to latest article on home page
  link to most popular articles from the home page
  link to related articles from each service page
  setup a process to ensure articles are optimal and quick to make
  reference products within the blog
  guest blogging with other websites
  add additional social medias
  track conversions for the ecommerce system
  add to Bing Places
  to become a topical authority you need a wide coverage of content, aiming for product sales and enquiries
  1000 articles or more, 5 per day
  use sitemap of competitors
  create a map of content topics
  using answerthepublic
  then google the keyword and see "people also ask" - seo minion download these questions
  autosuggest "does" "what" "how"...
  related searches from google
  finish the waze icon link in the footer
  ask chatgpt for topics "semantically releavant and unique"
  then ask it to give me variations of...
  keyword cupid - paid - can goup the topics, chatgpt too?
  create article outlines with headings so it will generate a well formatted article
  article length?
  use jasper to create each document section
  grammarly can help to avoid ai detectors
  then human edit and review
  optimize for seo when the article gets to page 2
  use "surfer" to help get higher on google - paid tool

services page 404's this is a repurpose of the blog area
get web domain name from marelin probably niksalon.com.gt
get email address and phone number from marelin
setup facebook chat api key
google business profile - marelin said the password for the google account is on the laptop at the salon
get business reviews on google, use chatgpt to reply to them using keywords
take more pictures, one for each service offered and the outside and inside, take big camera
add some product pages, connect them to service pages
add pages for weddings, parties, 15yr parties, haloween makeup, any reason for visiting the salon
compare other competitors for other ideas

# Video TODO

some of the clips have motion blur, edit or reshoot
marelin wants to re-shoot it afer changing some things in the shop
some of the clips in the video are out of focus
still not sure about some of the colours
shortening the pan clip to remove the coke bottle probably messed up the sound sync

# Blog Category Ideas

Hair care
Skincare
Makeup
Nail care
Beauty tips and tricks
DIY beauty
Product reviews and recommendations
Beauty industry news and trends
Beauty routines and regimens
Spa and relaxation techniques
Special Days/Events
use a celebrity name

# Services, taken from the "menu"

This is so i can keep track of what they mean and if they are included

balayage - gradient colour picture TODO
cepillado y planchado - brushing and straightening DONE
cortes - cutting DONE
depilaciones - waxing DONE
maquillaje - make-up TODO
mechas - tints, hilights
nail-bar - nail bar DONE
peinados - hairstyles DONE
tintes, color completo - non-natural whole hair, full colour, natural
trataimientos - treatments GONE
keratina inoar - inar keratin GONE
keratina k-milk - k-milk keratin GONE

balayage
cepillado y planchado
cortes
depilaciones
maquillaje
mechas
nail-bar
peinados
tintes

## SEO

### Backlinks

spamzilla to possibly buy expired old relevant domains for easy backlinks
competitor analysis - and competitors with a different location too, this is in a sheets document

### Marketing Ideas

- newsletter signup
- get onto all the facebook groups, just do an intro post or info post, no hard sales
- guatemala.com has a page listing salons, get on it somehow
- retail sales.. do they do this? YES, some products might actually rank well too! phase 2
- target expats looking for US brands etc
- write down what information they should get from clients, email, dob, name, what serices they paid for, get feedback, google review etc
- check this data is in a database so it can be used by mailchimp etc
- create beauty gift boxes to sell at specific holidays
- you need a face for the business, introduce, pictures, etc
- try to get the website reviews to have a real persons picture or similar, copy over google reviews?
- include a quote from the owner, to make it aproachable
- chase them for appointment
- ask for a review after the appointment

### Topical Authority

think of a keyword funnel, going from generic "what is a beauty salon" to "best type of hair extensions" or "best salon for highlights" - conversions are low with general but visits high, this is really for topical authority
author/bio page - connect to personal profiles, reference articles to that page
answer main questions for the topic
create supporting pages that link to the main service page for each type, within the content
generate an html sitemap - plugin?
content silo of a specific topic like "hair dyeing"
generate a list of what content to create
answer the public
on google
people also ask section
related search, related reoated
autocomplete
find competitor sitemap
write content vefore the next google core update
audit the website
techcnical seo
content refresh
ahrefs, paid
siteliner free tool
screaming frog
google structured data tool
core web vitals and site speed
compare rank from 1 yr ago for pages, prio worst ones
surfer tool, word count check, keyword density
failing to quote sources??
Expertise, Authoritativeness, Trust
include an author markup for blog articles, structured content
list them on the about page

# GPT Topical Authority Map

## Haircut

DONE Layered haircut for curly hair
DONE Shoulder-length haircut
DONE Textured haircut
DONE Natural haircut
Long layers haircut with bangs
Bob haircut with layers
Undercut haircut for women
Asymmetrical haircut
French haircut
Bridal haircut
Tousled haircut
Sleek haircut
Razor haircut
Stacked haircut
Layered haircut for thick hair
Spiky haircut
Pixie haircut with undercut
Feathered haircut with bangs
Angled haircut
Short haircut for round face
Mullet haircut
Emo haircut
Scene haircut
Half-up haircut
Bowl haircut
Tomboy haircut
Braided haircut

## Hair color

Blonde hair color
Balayage hair color
Ombre hair color
Brown hair color
Highlights hair color
Red hair color
Copper hair color
Ash hair color
Burgundy hair color
Strawberry blonde hair color
Platinum hair color
Caramel hair color
Honey blonde hair color
Chestnut hair color
Jet black hair color
Lavender hair color
Rose gold hair color
Pastel hair color
Unicorn hair color
Rainbow hair color
Mermaid hair color
Dark chocolate hair color
Light chocolate hair color
Dirty blonde hair color
Icy blonde hair color
Dark auburn hair color
Light auburn hair color
Mahogany hair color
Blonde balayage hair color
Chocolate brown hair color

## Hairstyling

Updo hairstyles
Braided hairstyles
Ponytail hairstyles
Bun hairstyles
Half-up hairstyles
Messy hairstyles
Sleek hairstyles
Retro hairstyles
Beachy hairstyles
Boho hairstyles
Wedding hairstyles
Prom hairstyles
Formal hairstyles
Edgy hairstyles
Punk hairstyles
Grunge hairstyles
Natural hairstyles
Afro hairstyles
Curly hairstyles
Straight hairstyles
Wavy hairstyles
Bob hairstyles
Lob hairstyles
Pixie hairstyles
Layered hairstyles
Choppy hairstyles
Blunt hairstyles
Feathered hairstyles
Shag hairstyles
Fringe hairstyles

## Manicure

French manicure
Gel manicure
Acrylic manicure
Dip powder manicure
Matte manicure
Glitter manicure
Ombre manicure
Chrome manicure
Marble manicure
Floral manicure
Geometric manicure
Gradient manicure
Metallic manicure
Striped manicure
Polka dot manicure
Half-moon manicure
Stiletto manicure
Coffin manicure
Square manicure
Round manicure
Almond manicure
Oval manicure
Short manicure
Long manicure
Natural manicure
French tip manicure
Rhinestone manicure
Lace manicure
Holographic manicure
Neon manicure

## Pedicure

French pedicure
Gel pedicure
Spa pedicure
Callus removal pedicure
Fish pedicure
Paraffin pedicure
Hot stone pedicure
Athletic pedicure
Acrylic pedicure
Ombre pedicure
Glitter pedicure
Floral pedicure
Geometric pedicure
Gradient pedicure
Metallic pedicure
Striped pedicure
Polka dot pedicure
Half-moon pedicure
Stiletto pedicure
Coffin pedicure
Square pedicure
Round pedicure
Almond pedicure
Oval pedicure
Short pedicure
Long pedicure
Natural pedicure
Rhinestone pedicure
Lace pedicure
Holographic pedicure

## Waxing

Bikini waxing
Brazilian waxing
Hollywood waxing
Leg waxing
Arm waxing
Underarm waxing
Chest waxing
Back waxing
Facial waxing
Eyebrow waxing
Lip waxing
Chin waxing
Nose waxing
Ear waxing
Full body waxing
Half body waxing
Male waxing
Female waxing
Body hair waxing
Sensitive skin waxing
Hard waxing
Soft waxing
Strip waxing
No-strip waxing
Pre-waxing treatment
Post-waxing treatment
Ingrown hair treatment
Exfoliating waxing
Organic waxing
Spa waxing

## Facials

Sure, here are 30 different keyword variations of "Facials" that address a different search intent:

Anti-aging facial
Acne facial
Hydrating facial
Brightening facial
Oxygen facial
Gold facial
Silver facial
Charcoal facial
Chocolate facial
Diamond facial
Microdermabrasion facial
Chemical peel facial
Collagen facial
Enzyme facial
LED facial
Galvanic facial
High frequency facial
Dermaplaning facial
Ultrasonic facial
Jade facial
Rose facial
Vitamin C facial
Fruit facial
Aromatherapy facial
Men's facial
Women's facial
Teen facial
Sensitive skin facial
Dry skin facial
Oily skin facial

## Massage

Swedish massage
Deep tissue massage
Sports massage
Hot stone massage
Aromatherapy massage
Reflexology massage
Shiatsu massage
Thai massage
Pregnancy massage
Couples massage
Chair massage
Foot massage
Hand massage
Back massage
Scalp massage
Full body massage
Half body massage
Men's massage
Women's massage
Senior massage
Infant massage
Lymphatic drainage massage
Trigger point massage
Craniosacral therapy massage
Reiki massage
Myofascial release massage
Hydrotherapy massage
Cupping massage
Ashiatsu massage
Himalayan salt stone massage

## Body scrubs

Salt body scrub
Sugar body scrub
Coffee body scrub
Coconut body scrub
Honey body scrub
Chocolate body scrub
Lavender body scrub
Rose body scrub
Charcoal body scrub
Sea kelp body scrub
Lemon body scrub
Grapefruit body scrub
Mint body scrub
Eucalyptus body scrub
Cinnamon body scrub
Vanilla body scrub
Shea butter body scrub
Jojoba oil body scrub
Apricot oil body scrub
Almond oil body scrub
Aloe vera body scrub
Green tea body scrub
Matcha body scrub
Turmeric body scrub
Papaya body scrub
Pineapple body scrub
Mango body scrub
Ginseng body scrub
Dead sea salt body scrub
Himalayan salt body scrub

## Eyelash extensions

Classic eyelash extensions
Volume eyelash extensions
Hybrid eyelash extensions
Mega volume eyelash extensions
Natural-looking eyelash extensions
Dramatic eyelash extensions
Colored eyelash extensions
Ombre eyelash extensions
Feather eyelash extensions
Mink eyelash extensions
Silk eyelash extensions
Faux mink eyelash extensions
Cashmere eyelash extensions
Flat eyelash extensions
Round eyelash extensions
C-curl eyelash extensions
J-curl eyelash extensions
D-curl eyelash extensions
L-curl eyelash extensions
Y-lash extensions
Bottom eyelash extensions
Corner eyelash extensions
Russian volume eyelash extensions
American volume eyelash extensions
3D eyelash extensions
4D eyelash extensions
5D eyelash extensions
6D eyelash extensions
Pre-made fan eyelash extensions
Customized eyelash extensions

## Eyebrow shaping

Eyebrow threading
Eyebrow waxing
Eyebrow tweezing
Eyebrow tinting
Microblading eyebrows
Ombre powder brows
Hybrid brows
Feather brows
Straight brows
Arched brows
Rounded brows
Angled brows
S-shaped brows
Bushy brows
Natural-looking brows
Defined brows
Sculpted brows
High-arched brows
Low-arched brows
Thick brows
Thin brows
Uneven brows
Sparse brows
Full brows
Boy brow
Textured brows
Gradient brows
Henna brows
Stenciled brows
Razor-cut brows

## Bridal makeup

Natural bridal makeup
Glam bridal makeup
Smokey bridal makeup
Bold bridal makeup
Vintage bridal makeup
Classic bridal makeup
Romantic bridal makeup
Beach bridal makeup
Boho bridal makeup
Traditional bridal makeup
Contemporary bridal makeup
Ethereal bridal makeup
Whimsical bridal makeup
Soft bridal makeup
Edgy bridal makeup
Modern bridal makeup
Rustic bridal makeup
Asian bridal makeup
Indian bridal makeup
Arabic bridal makeup
African bridal makeup
Latina bridal makeup
Fair-skinned bridal makeup
Dark-skinned bridal makeup
Neutral bridal makeup
Cool-toned bridal makeup
Warm-toned bridal makeup
Monochromatic bridal makeup
Multi-tonal bridal makeup
Glittery bridal makeup

## Hair extensions

Clip-in hair extensions
Tape-in hair extensions
Weave hair extensions
Microbead hair extensions
Fusion hair extensions
Sew-in hair extensions
Pre-bonded hair extensions
Halo hair extensions
Flip-in hair extensions
Ponytail hair extensions
Bangs hair extensions
Balayage hair extensions
Ombre hair extensions
Highlights hair extensions
Lowlights hair extensions
Full head hair extensions
Partial head hair extensions
Synthetic hair extensions
Human hair extensions
Remy hair extensions
Virgin hair extensions
Curly hair extensions
Wavy hair extensions
Straight hair extensions
Colored hair extensions
Natural hair extensions
Thick hair extensions
Thin hair extensions
Volumizing hair extensions
Lengthening hair extensions

## Blowouts

Sure, here are 30 different keyword variations of "Blowouts" that address a different search intent:

Straight blowouts
Curly blowouts
Voluminous blowouts
Sleek blowouts
Beachy blowouts
Textured blowouts
Smooth blowouts
Bouncy blowouts
Defined blowouts
Airy blowouts
Full-bodied blowouts
Wavy blowouts
Edgy blowouts
Classic blowouts
Romantic blowouts
Glamorous blowouts
Everyday blowouts
Red-carpet blowouts
Updo blowouts
Half-up blowouts
Low ponytail blowouts
High ponytail blowouts
Side-swept blowouts
Braided blowouts
Twisty blowouts
Tousled blowouts
Polished blowouts
Effortless blowouts
Runway blowouts
Couture blowouts

## Hair treatments

Sure, here are 30 different keyword variations of "Hair Treatments" that address a different search intent:

Keratin treatments
Scalp treatments
Deep conditioning treatments
Hair gloss treatments
Protein treatments
Hair repair treatments
Moisturizing treatments
Color treatments for hair
Heat protectant treatments
Hair strengthening treatments
Anti-frizz hair treatments
Split ends treatments
Hair smoothing treatments
Hair rejuvenating treatments
Hair detox treatments
Color-enhancing treatments for hair
Hair fortifying treatments
Restorative hair treatments
Hair damage repair treatments
Hair volumizing treatments
Hair thickening treatments
Hair nourishing treatments
Hair regrowth treatments
Hair growth treatments
Hair thinning treatments
Hair loss treatments
Hair protection treatments
Hair softening treatments
Hair brightening treatments
Hair texturizing treatments

## Skin treatments

Acne treatments
Anti-aging treatments
Skin rejuvenation treatments
Dark spot treatments
Skin brightening treatments
Hyperpigmentation treatments
Skin resurfacing treatments
Skin tightening treatments
Microdermabrasion treatments
Chemical peels
Laser skin treatments
Non-invasive skin treatments
Facial treatments for skin
Body treatments for skin
Skin exfoliating treatments
Skin hydrating treatments
Skin calming treatments
Skin nourishing treatments
Skin repair treatments
Skin barrier treatments
Skin detox treatments
Skin firming treatments
Skin softening treatments
Skin purifying treatments
Skin lightening treatments
Skin moisturizing treatments
Skin smoothing treatments
Skin balancing treatments
Skin clarifying treatments
Skin conditioning treatments

## Gel manicure

Here are 30 different keyword variations of "Gel Manicure" that address a different search intent:

Gel nail polish
Gel nail extensions
Gel nail art
Gel nail removal
Gel nail repair
Gel nail designs
French gel manicure
Matte gel manicure
Glitter gel manicure
Ombre gel manicure
Neon gel manicure
Pastel gel manicure
Natural gel manicure
Stiletto gel nails
Coffin gel nails
Square gel nails
Almond gel nails
Oval gel nails
Short gel nails
Long gel nails
Gel polish brands
UV gel nails
LED gel nails
Gel top coat
Gel base coat
Gel overlay manicure
Sculptured gel nails
Custom gel nails
Color-changing gel polish
Quick-dry gel polish.

## Gel pedicure

Here are 30 different keyword variations of "Gel Pedicure" that address a different search intent:

Gel toenails
Gel pedicure designs
French gel pedicure
Matte gel pedicure
Glitter gel pedicure
Ombre gel pedicure
Neon gel pedicure
Pastel gel pedicure
Natural gel pedicure
Short gel pedicure
Long gel pedicure
Square gel pedicure
Round gel pedicure
Almond gel pedicure
Pedicure with gel polish
Gel pedicure with nail art
Gel toe nail extensions
Gel toe nail removal
Gel toe nail repair
Gel toe nail designs
Gel toe nail overlay
Gel toe nail polish brands
UV gel toe nails
LED gel toe nails
Gel top coat for toes
Gel base coat for toes
Sculptured gel toe nails
Custom gel toe nails
Color-changing gel polish for toes
Quick-dry gel polish for toes.

## Nail polish application

Here are 30 different keyword variations of "Nail Polish Application" that address a different search intent:

Nail polish trends
Nail polish brands
Nail polish colors
Nail polish for beginners
Nail polish for professionals
Nail polish remover
Nail polish drying hacks
Nail polish application techniques
Nail polish application tips
Nail polish application mistakes to avoid
Nail polish application with a brush
Nail polish application with a sponge
Nail polish application with a pen
Nail polish application with stencils
Nail polish application with stamping plates
Nail polish application with water decals
Nail polish application with magnetic polish
Nail polish application with chrome powder
Nail polish application with glitter polish
Nail polish application with matte polish
Nail polish application with gel polish
Nail polish application with acrylic paint
Nail polish application on short nails
Nail polish application on long nails
Nail polish application on natural nails
Nail polish application on fake nails
Nail polish application on toenails
Nail polish application for a special occasion
Nail polish application for everyday wear
Nail polish application for a bold statement.

## Nail extensions

Acrylic nails
Gel nails
Silk wrap nails
Fiberglass nails
Dip powder nails
Polygel nails
Sculpted nails
French tip nails
Natural-looking nail extensions
Long nail extensions
Short nail extensions
Rounded nail extensions
Square nail extensions
Stiletto nail extensions
Coffin nail extensions
Almond nail extensions
Matte nail extensions
Glittery nail extensions
Ombre nail extensions
Marble nail extensions
Chrome nail extensions
Holographic nail extensions
Colored nail extensions
Natural nail extensions
3D nail extensions
Floral nail extensions
Geometric nail extensions
Rhinestone nail extensions
Beaded nail extensions
Feather nail extensions

## Nail repair

Broken nail repair
Split nail repair
Cracked nail repair
Damaged nail repair
Chipped nail repair
Peeling nail repair
Ingrown nail repair
Fungal nail repair
White spot nail repair
Yellow nail repair
Black nail repair
Green nail repair
Brittle nail repair
Soft nail repair
Weak nail repair
Splitting nail repair
Nail bed repair
Nail plate repair
Cuticle repair
Hangnail repair
Knuckle skin repair
Hand skin repair
Callus repair
Rough skin repair
Dry skin repair
Moisturizing nail repair
Oil treatment nail repair
Vitamin nail repair
Paraffin wax nail repair
Buffing nail repair

## Nail removal

Removing Acrylic Nails
Gel Polish Removal
DIY Nail Removal
Taking Off Dip Nails
Safe Nail Removal at Home
How to Remove Nail Tips
The Best Ways to Remove Nail Polish
Removing Press-On Nails
Quick and Easy Nail Removal Tips
Removing Gel Nails Safely
Nail Glue Removal Tips
How to Remove SNS Nails at Home
What You Need to Know About Acetone Nail Polish Remover
Removing Nail Foils without Damage
Nail Sticker Removal Tips
How to Remove Fake Nails Safely
Soak-Off Gel Removal Techniques
Nail Wraps Removal Tips
Removing Glitter Nail Polish
Professional Nail Removal Services
How to Remove Silk Wrap Nails
Removing Shellac Nails
The Best Nail Polish Removers for Sensitive Nails
Nail Softening Techniques for Easier Removal
DIY Acrylic Nail Removal at Home
Natural Nail Removal Methods
Tips for Removing Nail Polish without Acetone
The Importance of Proper Nail Removal Techniques
Home Remedies for Nail Polish Removal
The Pros and Cons of Nail Drill for Removal

## Hair styling for special occasions

Special occasion hairstyles
Formal hairdos
Hairstyles for weddings
Party hairstyles
Hair updos for special events
Elegant hairstyles
Red carpet hairstyles
Glamorous hairstyles
Celebrity-inspired hairstyles
Romantic hairstyles
Bohemian hairstyles
Retro hairstyles
Vintage-inspired hairstyles
Beachy hairstyles
Braided hairstyles for special occasions
Half-up half-down hairstyles for events
High bun hairstyles
Side-swept hairstyles
Twisted updos for special occasions
Low bun hairstyles for formal events
Loose waves hairstyles for special occasions
Straight hairstyles for special occasions
Bob hairstyles for special events
Layered hairstyles for special occasions
Curly hairstyles for special occasions
Afro hairstyles for special occasions
Pixie hairstyles for special events
Updos with hair accessories for special occasions
Bold hairstyles for special events
Simple hairstyles for special occasions.

## Hair conditioning treatments

Deep conditioning treatment
Protein treatment for hair
Hot oil treatment for hair
Leave-in conditioner for hair
Moisturizing hair treatment
Scalp conditioning treatment
Hair mask for damaged hair
Hair repair treatment
Hydrating hair treatment
Hair nourishment treatment
Hair strengthening treatment
Natural hair conditioner
Hair gloss treatment
Hair smoothening treatment
Hair frizz control treatment
Hair detox treatment
Hair softening treatment
Hair volume treatment
Hair rebonding treatment
Hair retexturizing treatment
Hair regrowth treatment
Hair thinning treatment
Hair loss prevention treatment
Hair breakage treatment
Hair shine treatment
Hair growth treatment
Hair rejuvenation treatment
Hair damage repair treatment
Hair oil treatment
Hair spa treatment

## Makeup lessons

Makeup classes near me
Beginner makeup tutorials"
Online makeup lesson
Professional makeup lessons
Advanced makeup classes
Makeup workshops
Makeup seminars"
One-on-one makeup lessons
Makeup certification courses
Makeup courses for beginners
Virtual makeup lessons
In-person makeup lessons
Group makeup classes
Makeup training programs
Personalized makeup lessons
Makeup masterclasses
Makeup application classes
Makeup artistry courses
Makeup for special occasions classes
Bridal makeup lessons
Airbrush makeup lessons
TV and film makeup courses
Theatrical makeup classes
Special effects makeup classes
Makeup techniques for different skin types
Makeup for mature skin classes
Makeup for people with disabilities classes
Makeup for people of color classes
Makeup for acne-prone skin classes
Makeup for natural looks tutorials

## Customized makeup looks

personalized makeup styles
bespoke makeup looks
tailor-made makeup design
unique makeup application
customized makeup techniques
individualized makeup looks
one-of-a-kind makeup styles
custom makeup artistry
made-to-order makeup design
signature makeup looks
exclusive makeup applications
customized makeup services
bespoke beauty looks
tailor-made cosmetics design
personalized makeup services
individual makeup sessions
custom-tailored makeup looks
made-for-you makeup styles
unique cosmetic design
personalized makeup consultations
custom makeup packages
bespoke beauty services
tailor-made makeup lessons
customized makeup tutorials
individualized cosmetics design
one-on-one makeup training
bespoke makeup applications
custom makeup lessons
personalized makeup workshops
made-to-measure makeup looks

## Spray tanning

Best spray tanning salons near me
How to prepare for a spray tan
Spray tan vs. self-tanning: which is better?
How long does a spray tan last?
How often can I get a spray tan?
Spray tan for special occasions
Benefits of spray tanning
How to make a spray tan last longer
What to wear during a spray tan
Spray tanning tips for first-timers
All-natural spray tanning options
How to maintain a spray tan
Best spray tanning techniques
Spray tanning for people with sensitive skin
How to remove a spray tan
Airbrush spray tanning
Spray tanning for men
Customized spray tanning options
How to avoid a patchy spray tan
Benefits of using a spray tanning booth
Spray tanning for people with acne-prone skin
Organic spray tanning options
How to get a natural-looking spray tan
Spray tanning for brides
How to fix a bad spray tan
Spray tanning for people with rosacea
Best spray tanning products
How to get an even spray tan
Benefits of getting a professional spray tan
DIY spray tanning tips and tricks

## Eyelash lift and tint

Lash lift and tint near me
Best lash lift and tint services
Lash lift vs. eyelash extensions
How to prepare for a lash lift and tint
Before and after photos of lash lift and tint
Lash lift and tint cost
Lash lift and tint deals
Lash lift and tint for short lashes
Lash lift and tint for sensitive eyes
DIY lash lift and tint kit
Lash lift and tint aftercare tips
Lash lift and tint results
Lash lift and tint reviews
Lash lift and tint vs. lash perm
Lash lift and tint training courses
Lash lift and tint certification
Lash lift and tint for blondes
Lash lift and tint for brown eyes
Lash lift and tint for blue eyes
Lash lift and tint for green eyes
Lash lift and tint for hazel eyes
Lash lift and tint for mature eyes
Lash lift and tint for special occasions
Lash lift and tint for wedding
Lash lift and tint for prom
Lash lift and tint for vacation
Lash lift and tint for photoshoot
Lash lift and tint for everyday wear
Lash lift and tint for natural look
Lash lift and tint for dramatic look

## Eyebrow lamination

Eyebrow lamination near me
Eyebrow lamination cost
Before and after eyebrow lamination
Eyebrow lamination vs microblading
Eyebrow lamination at home
Eyebrow lamination for thin eyebrows
Eyebrow lamination for bushy eyebrows
Eyebrow lamination for curly eyebrows
Eyebrow lamination for straight eyebrows
Eyebrow lamination for men
Eyebrow lamination for women
Eyebrow lamination for blondes
Eyebrow lamination for brunettes
Eyebrow lamination for redheads
Eyebrow lamination for oily skin
Eyebrow lamination for dry skin
Eyebrow lamination for sensitive skin
Eyebrow lamination for mature skin
Eyebrow lamination for teenagers
Eyebrow lamination for special occasions
Eyebrow lamination before a photoshoot
Eyebrow lamination before a wedding
Eyebrow lamination aftercare
Eyebrow lamination products
Eyebrow lamination training
Eyebrow lamination certification
Eyebrow lamination for beginners
DIY eyebrow lamination
Eyebrow lamination near my workplace
Best eyebrow lamination salons

# compound seo

- launch a page, will google trust it even without much seo?
- launch a page with a slightly different keyword, does it trust for that? use it to determine what keywords they like
  post within your tier, slowly growing out the tier
  when launching, dont expect hard keywords to rank well, find easy ones then focus on those getting more general
  keyword golden ratio
  check monthly traffic average per day, target new content that uses that daily traffic on a monthly basis to build up the "basement"
- lsi keywords, gramatical similies

# competitors:

- https://www.rebecana.com/
- https://www.butterflystudiosalon.com/salon
- https://www.salonfiona.com/
- https://zoeguatemala.com/

instagram profile improvements
picture of you
bio -

- intro youself, who you are
- expertise
- how to book
- link to website
- address, contact information
- category
- comparison with other companies in gt and usa

# ChatGPT Service Prompt

use keyword feature to generate a list, add that to the service/area page

** filter the keywords using google trends and other tools **
add more keywords using related topics section

use extension prompt to generate content for the page e.g.

Please ignore all previous instructions. I want you to respond only in language Latin American Spanish. I want you to act as a very proficient SEO and high end copy writer that speaks and writes fluent Latin American Spanish. Write the text as long as possible, at least 1700 words. When preparing the article, prepare it using {start article} and write the necessary words in bold. I want you to pretend that you can write content so good in Latin American Spanish that it can outrank other websites. I want you to pretend that you can write content so good in Latin American Spanish that it can outrank other websites. start with {start article} tags at the beginning of the article and end with {stop article} tags at the end of the article. Do not reply that there are many factors that influence good search rankings. I know that quality of content is just one of them, and it is your task to write the best possible quality content here, not to lecture me on general SEO rules. I give you the Title "Long layers haircut with bangs" of an article that we need to outrank in Google. This is a service that the companies website - a beauty salon - offers to potential customers, write it in a way that convinces the reader to use the salon, called "nik salon". Then I want you to write an article in an informal "we form" that helps me outrank the article I gave you, in Google. Write a long, fully markdown formatted article in Latin American Spanish that could rank on Google on the same keywords as that website. The article should contain rich and comprehensive, very detailed paragraphs, with lots of details to get customers to visit the salon for this service. Do not echo my prompt. Let the article be a long article of 1000 words. Do not remind me what I asked you for. Do not apologize. Do not self-reference. Do now use generic filler phrases. Do use useful subheadings with keyword-rich titles. Get to the point precisely and accurate. Do not explain what and why, just give me your best possible article. All output shall be in Latin American Spanish. Write the article as long as possible, at least 1000 words. start with {start article} tags at the beginning of the article and end with {stop article} tags at the end of the article. Make headings bold and appropriate for h tags. make sure to include a call to action for readers to make a booking at the salon. The salon likes to provide a relaxing, friendly and professional environment for customers and is relatively informal, the content style should reflect that. write the output in markdown code format so it can be pasted into a file with .md extension. First, generate a suitable url slug that doesnt include the name of the business, a page h1 title and a meta description for this article, in latin american spanish.

using the above markdown headings create a SEO friendly document that is around 500 words long to describe "nail services" offered by a salon. This website article page needs to include keywords listed in your answer above and include calls to action. The output needs to be in raw markdown format and have a friendly and informal tone. do not self-reference, do not use generic filler phrases. include references to other complimentary services that a beauty salon may also provide.

## ChatGPT content scoring prompt

Rate the content below thats targeting the keyword phrase "" on a scale of 1-10 (10 being highest) based on the following guidelines:

- Does the content demonstrate first hand experience?
- Does the content demonstrate in-the-field experience?
- How well does the content share a personal experience, perspective or feelings on a topic
- How well does the content speak from a first person perspective
- Does the content also demonstrate that it was produced with some degree of experience such as with actual use of a product, having actually visited a place or communicating what a person experienced?
- How original is the content
- How helpful is the content

Content Snippet:
\_\_ insert content here

Then Share some actionable ways I can upgrade this content to demonstrate better experience or expertise so i can get this score to 10/10

# notes

i put the new socials into the profiles component as i cant get them to load from the graphql, all the other things are in there ready
changing schema? then itll get cached like crazy, not sure how i did it the first time but i have it again for the logo
you also probably need to copy over lots of files from the theme, check the error message carefully
gatsby/node functions are called with not in replace to the plugins, so to add a new section dont keep the old one in the file
this also means you cant change anything either, so make a local copy of the plugin, but doing that you loose updates...hmm
resolver is for the body field of articles, the error wont tell you this and a search on github wont show it up either :(
inar is argan oil, kmilk is probably too
medias is like a line of colour in the hair, highlights, so i have two. what is tintes then?
note- i think that pwa wont be possible for 7/7 as icon options cant be added without replacing the whole plugin :(
i had to delete the mp4 intro video for zip size space on cloudflare limit of 25mb because no node 18 to buid

# Problems Encountered

i broke something but the error isnt useful
cleared all hooks
removed newest section contact
changed gatsby-config
gatsby build error is not connected to the develop error
tried changing the query, nothing
tried removing the query from the page component, then the header component broke
tried to consolelog what was happening but nothing appeared during build, typical
trying to remove my node changes and hook changes
erm i removed all the hooks and its still acting like they are there... even reporting the wrong file with the wrong content as being broken
i renamed all the folders and found it was still using it even after renaming!!!
i changed the query for the logo, only selecting the text, but thats not possible as ive done it already, yet it seems to have worked
i turned back on al the other things and its now working on develop more
???!! HELP, what broke from the last time i rebooted
I fixed it by removing everything i changed and adding it all back in, i think it was the contact section
