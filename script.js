const WHATSAPP_NUMBER = "96171561608"; // Update with your WhatsApp number (country code + number, no plus sign)

const products = [
  {
    id: "detangling-spray",
    name: "Detangling spray",
    price: 6,
    category: "Hair",
    description: "200ml. With betaine and panthenol. Silicone-free. No sticking or weighing down. Small knots unravel without pulling.",
    image: "assets/p1.jpeg",
  },
  {
    id: "sheet-mask-aha-bha",
    name: "Sheet mask AHA & BHA",
    price: 4.5,
    category: "Skin",
    description: "1 pc. Vegan. With AHA and BHA fruit acids. Removes dead skin cells and refines pores. Helps prevent blemishes and pimples for a natural glow.",
    image: "assets/p2.jpeg",
  },
  {
    id: "vitamin-c-face-mask",
    name: "Vitamin C face mask",
    price: 3.5,
    category: "Skin",
    description: "16 ml. 24-hour moisturizing with vitamin C and hyaluronic acid. Antioxidant effect. Vegan.",
    image: "assets/p3.jpeg",
  },
  {
    id: "hair-color-removal-cream",
    name: "Hair color removal cream",
    price: 16,
    category: "Hair",
    description: "100 ml. Makes hairs invisible for face, upper lip, arms, and legs. Suitable for all skin types. Individually dosable.",
    image: "assets/p4.jpeg",
  },
  {
    id: "fixing-brush-stick",
    name: "Fixing Brush Styling Finishing Stick",
    price: 9.5,
    category: "Hair",
    description: "10 ml. Against baby hairs. Quick fixation of stray hairs. Easy control. Apply to dry hair.",
    image: "assets/p5.jpeg",
  },
  {
    id: "soft-cotton-dry-shampoo",
    name: "Soft Cotton dry shampoo",
    price: 7.5,
    category: "Hair",
    description: "200 ml. Floral-fresh scent. Fresh hair without washing in seconds. No visible residue after brushing.",
    image: "assets/p6.jpeg",
  },
  {
    id: "braun-dry-shampoo",
    name: "Braun dry shampoo",
    price: 8,
    category: "Skin",
    description: "200 ml. For dark hair. Fresh hair without washing in seconds. No visible residue after brushing.",
    image: "assets/p7.jpeg",
  },
  {
    id: "makeup-remover-wipes",
    name: "3-in-1 Caring Makeup Remover Wipes",
    price: 4.5,
    category: "Makeup",
    description: "25 count. Gentle cleansing for a soft skin feeling. With vitamin E, provitamin B5, and almond oil. Fragrance-free. For dry and sensitive skin.",
    image: "assets/p8.jpeg",
  },
  {
    id: "oil-free-eye-pads",
    name: "Oil-free eye makeup remover pads",
    price: 5,
    category: "Makeup",
    description: "50 pieces. Oil-free eye pads for water-soluble makeup. Nourishes without leaving a greasy residue. Fragrance-free.",
    image: "assets/p9.jpeg",
  },
  {
    id: "micellar-eye-pads",
    name: "Micellar eye makeup remover pads, oil-based",
    price: 5,
    category: "Makeup",
    description: "50 count. Oily eye pads for waterproof makeup. Conditions the eyelashes. Fragrance-free.",
    image: "assets/p10.jpeg",
  },
  {
    id: "hair-removal-cream",
    name: "Hair removal cream",
    price: 5,
    category: "Body",
    description: "125 ml. Suitable for sensitive skin. Removes body hair easily and safely. With shea butter, silk, and lotus extract.",
    image: "assets/p11.jpeg",
  },
  {
    id: "retinol-sheet-mask",
    name: "Retinol sheet mask",
    price: 4.5,
    category: "Skin",
    description: "1 pc. Provides intense moisture with retinol, phytosqualane, and vitamin E. Firming and smoothing.",
    image: "assets/p12.jpeg",
  },
  {
    id: "bamboo-head-massage-brush",
    name: "Bamboo head massage brush",
    price: 20.5,
    category: "Hair",
    description: "1 pc. Made from premium bamboo - 100% FSC. Antistatic. Soothing massage sensation. Suitable for all hair lengths and hair types.",
    image: "assets/p13.jpeg",
  },
  {
    id: "shaving-oil",
    name: "Shaving oil",
    price: 7.5,
    category: "Body",
    description: "75 ml. With 5-fold care oil complex. For sensitive skin. Forms a protective barrier between the blade and the skin. Calms stressed skin for a silky-smooth feel.",
    image: "assets/p14.jpeg",
  },
  {
    id: "anti-blackhead-nose-strips",
    name: "Anti-blackhead nose strips, skin cleanser",
    price: 5,
    category: "Skin",
    description: "3 pieces. Removes blackheads on nose, chin, and forehead. Deep pore cleaning with salicylic acid and tea tree oil.",
    image: "assets/p15.jpeg",
  },
  {
    id: "anti-acne-patches",
    name: "Anti-acne patches, skin clear",
    price: 7,
    category: "Skin",
    description: "36 pieces. With salicylic acid for fast, targeted drying. Transparent patches in two diameters. Results visible after first application.",
    image: "assets/p16.jpeg",
  },
  {
    id: "moisturizing-hair-milk",
    name: "Moisturizing Hair Milk",
    price: 5,
    category: "Hair",
    description: "200 ml. Coconut and papaya scent. Anti-dryness effect for dry & damaged hair. Silicone-free. Vegan.",
    image: "assets/p17.jpeg",
  },
  {
    id: "natural-beauty-shower-gel",
    name: "Natural Beauty Shower Gel with Cherry Blossom Extract & Almond Oil",
    price: 4.5,
    category: "Body",
    description: "250 ml. With organic almond oil and cherry blossom extract. Dermatologically confirmed skin compatibility. pH skin neutral. Vegan.",
    image: "assets/p18.jpeg",
  },
  {
    id: "sensitive-deodorant-wipes",
    name: "Sensitive deodorant wipes",
    price: 6,
    category: "Skin",
    description: "10 pieces. Up to 24 hours of deodorant protection with aloe vera. Suitable for sensitive skin. Aluminum-free.",
    image: "assets/p19.jpeg",
  },
  {
    id: "lavender-herbal-bath",
    name: "Lavender herbal bath",
    price: 5.5,
    category: "Body",
    description: "500 ml. Dermatologically confirmed skin compatibility. With lavender oil. pH skin-neutral. Formula without microplastics and water-soluble, purely synthetic polymers.",
    image: "assets/p20.jpeg",
  },
  {
    id: "shower-gel-moment-of-happiness",
    name: 'Shower gel "Moment of Happiness"',
    price: 4,
    category: "Body",
    description: "300 ml. Floral scent. Moisture formula with AquaCellSoft. Dermatologically confirmed, pH skin-neutral. Vegan.",
    image: "assets/p21.jpeg",
  },
  {
    id: "fairytale-cream-shower-gel",
    name: "Fairytale Cream Shower Gel",
    price: 4,
    category: "Body",
    description: "300 ml. Limited edition. Care shower with delicate, creamy texture. Gentle on sensitive skin for magical moments of well-being.",
    image: "assets/p22.jpeg",
  },
  {
    id: "bath-advent-calendar-2025",
    name: "Bath Advent Calendar 2025",
    price: 39,
    category: "Body",
    description: "1 pc. Festive design with 24 surprises. Sensually scented care for face, body, and hair. Convenient trial sizes. Ideal as a gift during Advent.",
    image: "assets/p23.jpeg",
  },
  {
    id: "glow-peel-off-mask",
    name: "Glow Peel-Off Mask",
    price: 4.5,
    category: "Skin",
    description: "16 ml (2x8 ml). Peel-off face mask with lotus flower extract. Deep cleaning effect. Leaves a refreshed complexion. Vegan formulation.",
    image: "assets/p24.jpeg",
  },
  {
    id: "lip-balm-rose",
    name: "Lip balm rose",
    price: 3.5,
    category: "Makeup",
    description: "4.8 g. Gentle lip care with almond oil and shea butter. Gentle color finish for a natural look. Dermatologically approved. Formula without water-soluble synthetic polymers.",
    image: "assets/p25.jpeg",
  },
  {
    id: "shower-gel-be-relaxed-and-calm",
    name: "Shower gel Be Relaxed and calm",
    price: 6.5,
    category: "Body",
    description: "200 ml. Harmonious and balancing. Relaxing shower experience with a soothing scent.",
    image: "assets/p26.jpeg",
  },
  {
    id: "glow-ampoule-vitamin-c",
    name: "Glow Ampoule Treatment 2-Phase Vitamin C",
    price: 10.5,
    category: "Skin",
    description: "14 ml. Glow treatment for the face with 4% vitamin C. Lipid complex of almond oil and sunflower oil. Revitalizes dull skin for a fresh glow.",
    image: "assets/p27.jpeg",
  },
  {
    id: "peel-off-mask-activated-charcoal",
    name: "Peel-off face mask with activated charcoal",
    price: 8.5,
    category: "Skin",
    description: "100 ml. Peel-off mask with activated charcoal, panthenol, aloe vera, and vitamin E. Gentle care for a radiant complexion.",
    image: "assets/p28.jpeg",
  },
  {
    id: "refreshing-makeup-remover-wipes",
    name: "3-in-1 refreshing makeup remover wipes",
    price: 4,
    category: "Makeup",
    description: "25 count. Facial cleansing wipes with 10% aloe vera and hydro complex. Ideal for normal and combination skin. For a fresh skin feeling. Without alcohol.",
    image: "assets/p29.jpeg",
  },
  {
    id: "micellar-cleansing-wipes",
    name: "Micellar cleansing wipes",
    price: 5,
    category: "Makeup",
    description: "25 count. Effectively removes waterproof makeup. Gentle cleansing with micellar technology. Moisturizing for a pleasant skin feel.",
    image: "assets/p30.jpeg",
  },
  {
    id: "intimate-shaving-gel",
    name: "Intimate shaving gel",
    price: 6.5,
    category: "Body",
    description: "150 ml. For sensitive skin in the external intimate area. Particularly mild and gentle shave with lactic acid, aloe vera, and peach blossom extract.",
    image: "assets/p31.jpeg",
  },
  {
    id: "shower-oil",
    name: "Shower oil",
    price: 6.5,
    category: "Body",
    description: "250 ml. 70% vegetable oil content. Soft, supple skin feel. Intensive care for very dry skin for a pampering shower experience.",
    image: "assets/p32.jpeg",
  },
  {
    id: "lip-mask-cherry-love",
    name: "Lip mask hydrogel Cherry Love",
    price: 3.5,
    category: "Makeup",
    description: "1 pc. Moisturizing hydrogel lip care with hyaluronic acid, macadamia oil, and cherry extract. Refreshing, subtle cherry scent.",
    image: "assets/p33.jpeg",
  },
  {
    id: "lip-balm-vanilla-dream",
    name: "Vanilla Dream lip balm",
    price: 3.5,
    category: "Makeup",
    description: "4.8 g. Smooth and creamy texture with shea butter and organic coconut oil. Delicate scent of vanilla pudding. Smooth, cared-for lips.",
    image: "assets/p34.jpeg",
  },
  {
    id: "lip-balm-elegant-cherry",
    name: "Elegant Cherry lip balm",
    price: 3.5,
    category: "Makeup",
    description: "4.8 g. Creamy, nourishing texture with shea butter for velvety lips. Gentle color finish. Smells like cherry and chocolate. Limited edition.",
    image: "assets/p35.jpeg",
  },
  {
    id: "hand-cream-fast-absorbing",
    name: "Fast-absorbing hand cream for dry skin",
    price: 6.5,
    category: "Body",
    description: "100 ml. Express care with bamboo extract, shea butter, and lime oil. Provides intense moisture. Absorbs quickly, non-greasy. For dry hands.",
    image: "assets/p36.jpeg",
  },
  {
    id: "hand-cream-fairytale",
    name: "Fairytale hand cream",
    price: 4.5,
    category: "Body",
    description: "100 ml. Fruity-aromatic care with an enchanting fragrance for special moments. Vegan and free from microplastics.",
    image: "assets/p37.jpeg",
  },
  {
    id: "soft-lotus-shaving-foam",
    name: "Soft Lotus shaving foam",
    price: 5,
    category: "Body",
    description: "150 ml. Smooth, creamy texture. Scent of blue lotus and rice milk. Suitable for sensitive skin. Moisturizes and pampers the skin.",
    image: "assets/p38.jpeg",
  },
  {
    id: "shampoo-anti-dandruff-ultra-sensitive",
    name: "Shampoo anti-dandruff ultra sensitive",
    price: 10,
    category: "Hair",
    description: "250 ml. Anti-dandruff shampoo for sensitive and dry scalp. Soothes and relieves itching for well-groomed, smoothly shiny hair.",
    image: "assets/p39.jpeg",
  },
  {
    id: "shampoo-growth-strength",
    name: "Shampoo Growth + Strength",
    price: 9,
    category: "Hair",
    description: "250 ml. Anti-breakage technology with caffeine and Baicapil. For weak and brittle hair. Promotes hair growth and can reduce hair loss. Silicone-free formula.",
    image: "assets/p40.jpeg",
  },
  {
    id: "shower-gel-hemp-papaya",
    name: "Shower gel with hemp seeds and papaya",
    price: 5,
    category: "Body",
    description: "250 ml. With organic hemp seed oil and papaya extract. Dermatologically confirmed skin compatibility. pH skin neutral.",
    image: "assets/p41.jpeg",
  },
  {
    id: "shampoo-ultra-sensitive",
    name: "Shampoo Ultra Sensitive",
    price: 9.5,
    category: "Hair",
    description: "250 ml. Suitable for sensitive scalp. Free from silicones, perfume, parabens, and dyes. Microbiome balance. Recyclable packaging.",
    image: "assets/p42.jpeg",
  },
  {
    id: "cream-shower-nice-to-sea-you",
    name: "Cream shower Nice To Sea You",
    price: 5,
    category: "Body",
    description: "300 ml. Magically sweet scent. pH skin neutral. Suitable for sensitive skin. Formula without microplastics and water-soluble synthetic polymers.",
    image: "assets/p43.jpeg",
  },
  {
    id: "ampoules-hyaluronic-lifting",
    name: "Ampoules Beauty Hyaluronic Lifting Treatment",
    price: 14,
    category: "Skin",
    description: "7 ml (7x1 ml). 7-step lifting treatment with 7-fold hyaluronic acid and galangal extract as a hyaluronic booster. Lines and wrinkles reduced instantly. Firming and smoothing.",
    image: "assets/p44.jpeg",
  },
  {
    id: "vitamin-c-sheet-mask",
    name: "Vitamin C sheet mask",
    price: 4.5,
    category: "Skin",
    description: "1 piece. With vitamin C and hyaluronic acid. Antioxidant effect. Even skin tone and radiant complexion. Intensive moisture. Formula without microplastics and water-soluble, purely synthetic polymers.",
    image: "assets/p45.jpeg",
  },
  {
    id: "milky-coconut-sheet-mask",
    name: "Milky Coconut Sheet Mask",
    price: 4.5,
    category: "Skin",
    description: "1 pc. Sheet mask with coconut milk and hyaluronic acid. Intensive moisture and rich care.",
    image: "assets/p46.jpeg",
  },
  {
    id: "shower-depilatory-cream",
    name: "Shower depilatory cream",
    price: 8.5,
    category: "Body",
    description: "150 ml. Suitable for all skin types. Enriched with shea butter and rose extract. Easy to use in the shower.",
    image: "assets/p47.jpeg",
  },
  {
    id: "hair-wax-styling-stick",
    name: "Hair wax styling stick",
    price: 9.5,
    category: "Hair",
    description: "25 g. Simple and quick fixing for trendy sleek looks. Also suitable for fixing baby hair. With mango butter and avocado oil. Vegan with carnauba wax.",
    image: "assets/p48.jpeg",
  },
  {
    id: "kids-lip-balm-happy-vibes",
    name: "Kids Lip Balm Happy Vibes",
    price: 4.5,
    category: "Makeup",
    description: "4.8 g. Nourishing formula with shea butter and vitamin E. Fruity-sweet scent. Tailored to young skin. Dermatologically confirmed skin compatibility.",
    image: "assets/p49.jpeg",
  },
  {
    id: "gift-set-swirly-kiss",
    name: "Gift set Swirly Kiss",
    price: 16,
    category: "Body",
    description: "3 pieces. Intensive care for soft lips. Indulge in unique recipes. Harmonious combination of design and fragrance. Exceptional look.",
    image: "assets/p50.jpeg",
  },
  {
    id: "gift-set-relax-harmony",
    name: "Relax and Harmony 3-piece gift set",
    price: 16,
    category: "Body",
    description: "Set includes: 3x cream shower gels (100 ml each). Cream shower set with three fruity scents for wintery-fruity relaxation.",
    image: "assets/p51.jpeg",
  },
  {
    id: "gift-set-arctic-moods",
    name: "Gift set Arctic Moods",
    price: 16,
    category: "Body",
    description: "3 pieces. Set includes: 3x shower gel (100 ml each). Three refreshing scents. Gentle and thorough skin cleansing. Ideal as a gift.",
    image: "assets/p52.jpeg",
  },
  {
    id: "vitamin-d3-pearls-1000-iu",
    name: "Vitamin D3 pearls 1000 IU",
    price: 13,
    category: "Vitamin",
    description: "60 pieces, 13.3 g. The sunshine vitamin. Contributes to normal bones and muscles, supports immune system.",
    image: "assets/p53.jpeg",
  },
  {
    id: "magnesium-500-night-depot",
    name: "Magnesium 500 Night Depot",
    price: 17,
    category: "Vitamin",
    description: "30 tablets, 43 g. For relaxed muscles during sleep. 3 magnesium compounds with depot effect. With L-tryptophan + hop extract.",
    image: "assets/p54.jpeg",
  },
  {
    id: "skin-hair-nails",
    name: "Skin, hair, nails",
    price: 16,
    category: "Vitamin",
    description: "30 pieces, 22 g. Beauty formula with 14 nutrients. Collagen, hyaluronic acid, coenzyme Q10, and zinc.",
    image: "assets/p55.jpeg",
  },
  {
    id: "vitamin-b12-350-depot",
    name: "Vitamin B12 350 Depot",
    price: 13,
    category: "Vitamin",
    description: "30 mini-tablets, 6 g. Helps reduce tiredness and fatigue. High dose 350 mcg B12 with long-term care.",
    image: "assets/p56.jpeg",
  },
  {
    id: "intensive-gastrointestinal-relief",
    name: "Intensive Gastrointestinal Relief Capsules",
    price: 15,
    category: "Vitamin",
    description: "20 capsules. Fast-acting pressure relief. Up to 1,000 mg simethicone per day. Gluten and lactose free.",
    image: "assets/p57.jpeg",
  },
  {
    id: "collagen-5000",
    name: "Collagen 5000",
    price: 22,
    category: "Vitamin",
    description: "20 sachets, 140 g. 5000 mg collagen hydrolyzate per serving. With 100 mg chondroitin, vitamins C and D.",
    image: "assets/p58.jpeg",
  },
  {
    id: "multivitamin-gummy-bears-kids",
    name: "Multivitamin gummy bears for children",
    price: 11,
    category: "Vitamin",
    description: "60 pieces, 120 g. Multivitamin gummies. No dyes or preservatives.",
    image: "assets/p59.jpeg",
  },
  {
    id: "multivitamin-gummies",
    name: "Multivitamin Gummies",
    price: 15,
    category: "Vitamin",
    description: "60 pieces, 120 g. With 10 vitamins. 3 fruity flavors. Vegan and sugar-free.",
    image: "assets/p60.jpeg",
  },
  {
    id: "multi-mineral-effervescent",
    name: "Multi-mineral effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 pieces, 82 g. Effervescent mineral blend.",
    image: "assets/p61.jpeg",
  },
  {
    id: "vitamin-b12-effervescent",
    name: "Vitamin B12 effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent B12 supplement.",
    image: "assets/p62.jpeg",
  },
  {
    id: "vitamin-c-effervescent",
    name: "Vitamin C effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent vitamin C.",
    image: "assets/p63.jpeg",
  },
  {
    id: "multivitamin-effervescent",
    name: "Multivitamin effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent multivitamin.",
    image: "assets/p64.jpeg",
  },
  {
    id: "magnesium-effervescent",
    name: "Magnesium effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent magnesium.",
    image: "assets/p65.jpeg",
  },
  {
    id: "iron-vitamin-c-effervescent",
    name: "Iron + Vitamin C effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent iron with vitamin C.",
    image: "assets/p66.jpeg",
  },
  {
    id: "calcium-effervescent",
    name: "Calcium effervescent tablets",
    price: 5.5,
    category: "Vitamin",
    description: "20 tablets, 82 g. Effervescent calcium.",
    image: "assets/p67.jpeg",
  },
  {
    id: "hair-powder-volume",
    name: "Hair powder VOLUME",
    price: 12,
    category: "Hair",
    description: "10 g. Volume and control for all hair types. Up to 24 hours without clogging. Helps protect from drying and humidity.",
    image: "assets/p68.jpeg",
  },
  {
    id: "heat-protection-spray",
    name: "Heat protection spray",
    price: 13,
    category: "Hair",
    description: "250 ml. Protection for heat styling up to 230 C. Up to 3 days anti-frizz and shine. No weight or sticking.",
    image: "assets/p69.jpeg",
  },
  {
    id: "magnesium-intense-600-d3-sachets",
    name: "Magnesium Intense 600 + D3 Sachets",
    price: 19,
    category: "Vitamin",
    description: "20 sachets, 36 g. Granules with magnesium and vitamin D3. Depot effect and easy on the go.",
    image: "assets/p70.jpeg",
  },
  {
    id: "omega-3-d3-kids-chewable",
    name: "Omega-3 + Vitamin D3 Kids chewable tablets",
    price: 24,
    category: "Vitamin",
    description: "27 pieces, 35.1 g. Strawberry and citrus flavor. With vitamin D3 and omega-3.",
    image: "assets/p71.jpeg",
  },
  {
    id: "dead-sea-scalp-therapy-anti-itch",
    name: "Dead Sea Scalp Therapy Anti-Itch Fluid",
    price: 18,
    category: "Hair",
    description: "75 ml. Soothes itching, tightness, and dryness. Improves moisture retention. Dermatologically confirmed.",
    image: "assets/p72.jpeg",
  },
  {
    id: "acute-irritating-cough-spray",
    name: "Acute Irritating Cough Spray",
    price: 19,
    category: "Vitamin",
    description: "1 piece. Throat spray with honey and dexpanthenol. Moisturizes mucous membranes. Suitable for ages 5+.",
    image: "assets/p73.jpeg",
  },
  {
    id: "melatonin-intens-mini-tablets",
    name: "Melatonin Intens Mini Tablets",
    price: 14,
    category: "Vitamin",
    description: "30 tablets. 2.5 mg melatonin with vitamins B1 and B2. Practical and easy to swallow. Helps with jet lag.",
    image: "assets/p74.jpeg",
  },
  {
    id: "immusan-c-complex",
    name: "Immusan C Complex tablets",
    price: 17,
    category: "Vitamin",
    description: "20 pieces, 25.2 g. Depot tablets with vitamins C, D, B12, zinc, and selenium. High-dose formula.",
    image: "assets/p75.jpeg",
  },
  {
    id: "hair-tonic-rosemary",
    name: "Hair Tonic Invigorating Rosemary Hair Tonic",
    price: 30,
    category: "Hair",
    description: "100 ml. Maintains a healthy scalp. Use morning and evening. Gives hair more structure.",
    image: "assets/p76.jpeg",
  },
  {
    id: "hair-treatment-conditioning-balm",
    name: "Hair treatment conditioning balm",
    price: 8,
    category: "Hair",
    description: "60 ml. Permanent hair color. 100% grey hair coverage. Glossy, long-lasting color. Silicone-free.",
    image: "assets/p77.jpeg",
  },
  {
    id: "shampoo-thick-full-biotin-collagen",
    name: "Shampoo thick & full, biotin & collagen",
    price: 21,
    category: "Hair",
    description: "385 ml. Leaves volume and a silky feel. With biotin, collagen, and wheat protein. Nourishes from root to tip.",
    image: "assets/p78.jpeg",
  },
  {
    id: "hair-treatment-rescue-shots-smooth-silky",
    name: "Hair Treatment Rescue Shots Smooth & Silky",
    price: 12,
    category: "Hair",
    description: "45 ml (3 x 15 ml). Hyaluronic acid, argan oil, and vitamin B7. For unruly hair. Swiss Vitamin Institute tested.",
    image: "assets/p79.jpeg",
  },
  {
    id: "hair-vitamins-ah-mazing-biotin",
    name: "Hair vitamins Ah-Mazing Hair Vitamin Biotin",
    price: 35,
    category: "Hair",
    description: "45 tablets, 112.5 g. Biotin, zinc, folic acid, coconut oil, vitamins C and E. Sugar-free, vegan, 5,000 mcg biotin per gummy.",
    image: "assets/p80.jpeg",
  },
  {
    id: "virus-test-5-in-1",
    name: "5-in-1 Virus Test Self-Test",
    price: 15,
    category: "Device",
    description: "1 piece. Detects SARS-CoV-2, Influenza A/B, RSV, and Adenovirus. Easy to use at home.",
    image: "assets/p81.jpeg",
  },
  {
    id: "moisture-shampoo",
    name: "Moisture Shampoo",
    price: 16,
    category: "Hair",
    description: "350 ml. Moisturizing shampoo with rice protein. For normal and dry hair. PETA-certified and sulfate-free.",
    image: "assets/p82.jpeg",
  },
  {
    id: "dry-shampoo-no-bad-hair-days",
    name: "Dry shampoo no bad hair days effect 7in1",
    price: 11,
    category: "Hair",
    description: "200 ml. Instant freshness and volume with UV filters. Leaves no white residue. Free from animal ingredients.",
    image: "assets/p83.jpeg",
  },
  {
    id: "shampoo-curl-dream-mango-matcha",
    name: "Shampoo Curl Dream Mango Matcha",
    price: 12,
    category: "Hair",
    description: "300 ml. Curly hair shampoo with anti-frizz effect. For damaged, dull, dry, and colored hair. No microplastics or mineral oil.",
    image: "assets/p84.jpeg",
  },
  {
    id: "bali-curls-volume-foam",
    name: "BALI CURLS Volume Foam",
    price: 20,
    category: "Hair",
    description: "150 ml. Airy texture for flexible application. Gentle hold for structured curls. Protein-rich formula. Silicone and paraben-free.",
    image: "assets/p85.jpg",
  },
  {
    id: "outdoor-freakz-bamboo-toothbrush",
    name: "Outdoor Freakz Bamboo toothbrush, medium",
    price: 9,
    category: "Tools",
    description: "1 pc. Sustainable dental care. Vegan.",
    image: "assets/p86.jpg",
  },
  {
    id: "yuicy-hair-vitamins-hair-glow",
    name: "yuicy Hair Vitamins Hair Glow Biotin | B12 + 8 Essentials Gummies",
    price: 29,
    category: "Vitamin",
    description: "45 pieces, 121 g. With biotin for maintaining normal hair and vitamin B12. Orange flavor. Vegan and gluten-free.",
    image: "assets/p87.jpg",
  },
  {
    id: "langhaarmaedchen-lovely-long-tonic",
    name: "Langhaarmädchen Scalp care tonic Lovely Long",
    price: 17,
    category: "Hair",
    description: "75 ml. Scalp Booster Tonic. Thicker hair in 3 months. Helps improve hair growth. With almond blossom extract and AnaGain. Silicone-free.",
    image: "assets/p88.jpg",
  },
  {
    id: "reelle-color-shine-treatment-cool-blonde",
    name: "réell'e EXPERT Color Shine Treatment Glossing Cool Blonde",
    price: 15,
    category: "Hair",
    description: "150 ml. Washable hair dye. Conceals first gray hairs. Lasts up to 8 washes. Intensifies hair color. Brilliant shine and intensive care.",
    image: "assets/p89.jpg",
  },
  {
    id: "tesori-gift-set-let-yourself-be-enchanted",
    name: 'Tesori d\'Oriente Gift set "Let yourself be enchanted"',
    price: 16,
    category: "Body",
    description: "3-piece set. Includes 3x Cream Shower (75 ml). Aromatic cream shower gels with pleasant scents. Ideal as a gift.",
    image: "assets/p90.jpg",
  },
  {
    id: "being-gift-set-keep-cool-stay-fresh",
    name: "BEING Gift set KEEP COOL. STAY FRESH.",
    price: 24,
    category: "Body",
    description: "4 pieces. Includes 1x shower gel (300 ml), 1x shower gel (100 ml), 1x deodorant spray (200 ml) & 1x deodorant spray (50 ml). Shower gel for body, face & hair. Up to 24 hours of deodorant protection. Ideal as a gift.",
    image: "assets/p91.jpg",
  },
  {
    id: "tom-tailor-adventurous-extreme-gift-set",
    name: "TOM TAILOR Gift set Adventurous Extreme Eau de Toilette",
    price: 32,
    category: "Perfume",
    description: "2 pieces. Includes 1x Eau de Toilette (30 ml) and 1x Shower Gel (75 ml). Aromatic, woody scent. Perfect for adventurers. Ideal as a gift.",
    image: "assets/p92.jpg",
  },
  {
    id: "kneipp-pampering-massage-favorites",
    name: "Kneipp Gift set Pampering Massage Favorites",
    price: 16,
    category: "Body",
    description: "3-piece set. Includes 1x Almond Blossom Skin Softening Massage Oil (20 ml), 1x You & Me Massage Oil (20 ml) & 1x Ylang-Ylang Massage Oil (20 ml). With vitamin E.",
    image: "assets/p93.jpg",
  },
  {
    id: "revolution-blush-stick-jelly-peach-orange",
    name: "REVOLUTION Blush Stick Jelly Peach Orange",
    price: 16,
    category: "Makeup",
    description: "5 g. Lip and cheek color. Flexible gel formula with variable opacity. Provides moisture. Long stop.",
    image: "assets/p94.jpg",
  },
  {
    id: "revolution-blush-stick-jelly-cherry-red",
    name: "REVOLUTION Blush Stick Jelly Cherry Red",
    price: 16,
    category: "Makeup",
    description: "5 g. Lip and cheek color. Flexible gel formula with variable opacity. Provides moisture. Long stop.",
    image: "assets/p95.jpg",
  },
  {
    id: "revolution-lip-gloss-pout-bomb-shimmer-glimmer-nude",
    name: "REVOLUTION Lip gloss Pout Bomb Shimmer Glimmer Nude",
    price: 16,
    category: "Makeup",
    description: "4.5 ml. Transparent lip gloss with nourishing vitamin E. Sponge applicator. For fuller lips. Cruelty-free and vegan.",
    image: "assets/p96.jpg",
  },
  {
    id: "revolution-lip-gloss-pout-bomb-milky-sheer-holo",
    name: "REVOLUTION Lip gloss Pout Bomb Milky Sheer Holo",
    price: 16,
    category: "Makeup",
    description: "4.6 ml. Lip gloss with mirror shine effect. Non-sticky with gentle tingling. Sweet vanilla aroma. Nourishing and caring ingredients.",
    image: "assets/p97.jpg",
  },
  {
    id: "revolution-eyeshadow-palette-enchanted-icon",
    name: "REVOLUTION Eyeshadow Palette The Enchanted Icon",
    price: 24,
    category: "Makeup",
    description: "8.4 g. 12 eyeshadow colors with creamy, matte and shimmering textures. Easy to blend. Highly pigmented. Rose gold design.",
    image: "assets/p98.jpg",
  },
  {
    id: "revolution-eyeshadow-palette-true-icon-bronze",
    name: "REVOLUTION Eyeshadow Palette The True Icon Bronze",
    price: 24,
    category: "Makeup",
    description: "8.4 g. 12 eyeshadow colors with creamy, matte and shimmering textures. Easy to blend. Highly pigmented. Rose gold design.",
    image: "assets/p99.jpg",
  },
  {
    id: "revolution-bronzer-mega-02-warm",
    name: "REVOLUTION Bronzer Mega 02 Warm",
    price: 16,
    category: "Makeup",
    description: "15 g. Ultra Bronze. Matte finish. Long stop. Stately presentation.",
    image: "assets/p100.jpg",
  },
  {
    id: "revolution-loose-powder-baking-translucent",
    name: "REVOLUTION Loose powder Baking Translucent",
    price: 16,
    category: "Makeup",
    description: "32 g. Baking powder for all skin tones. Fine powder texture. Ideal for highlighting individual facial features. Evens out the complexion.",
    image: "assets/p101.jpg",
  },
  {
    id: "the-ordinary-aha-30-bha-2-peeling",
    name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    price: 17,
    category: "Skin",
    description: "10-minute exfoliating facial. Combined 30% AHA and 2% BHA to diminish the look of blemishes. Smooths skin texture for a more radiant look.",
    image: "assets/p102.jpg",
  },
  {
    id: "maxfactor-instant-fabulous-colour",
    name: "MaxFactor Instant Fabulous Colour",
    price: 14.5,
    category: "Makeup",
    description: "Instant fabulous colour. Actively moisturises for smoother, fuller lips (vs bare lips). Blend of 60% emollients, conditioners and antioxidants including vitamin E.",
    image: "assets/p103.jpg",
  },
  {
    id: "rimmel-london-2-in-1-lipstick-gloss",
    name: "Rimmel London 2-in-1 lipstick and gloss",
    price: 12,
    category: "Makeup",
    description: "Long-lasting vibrant color. 2-in-1 lipstick and gloss that lasts for 16 hours.",
    image: "assets/p104.jpg",
  },
  {
    id: "panoxyl-acne-foaming-face-wash-10-bpo",
    name: "PanOxyl Acne Foaming Face Wash 10% Benzoyl Peroxide",
    price: 23,
    category: "Skin",
    description: "5.5 oz. Maximum strength acne foaming face wash with 10% benzoyl peroxide.",
    image: "assets/p105.jpg",
  },
  {
    id: "the-ordinary-glycolic-acid-7-toning-solution",
    name: "The Ordinary Glycolic Acid 7% Toning Solution",
    price: 18,
    category: "Skin",
    description: "240 ml. Exfoliating toner for radiant skin.",
    image: "assets/p106.jpg",
  },
  {
    id: "sally-hansen-hydrate-peel-off-nail-mask",
    name: "Sally Hansen Spa Collection Hydrate Peel-Off Nail Mask",
    price: 13,
    category: "Nails",
    description: "Instant relief for rough, dry nails and conditions cuticles.",
    image: "assets/p107.jpg",
  },
  {
    id: "bio-vital-olive-oil-luxury-care-kit",
    name: "Bio Vital Original Olive Oil 5 Piece Luxury Care Kit",
    price: 39,
    category: "Body",
    description: "5-piece luxury care kit with precious Mediterranean olive oil.",
    image: "assets/p108.jpg",
  },
  {
    id: "some-by-mi-galactomyces-vitamin-c-glow-serum",
    name: "SOME BY MI Galactomyces Pure Vitamin C Glow Serum",
    price: 19,
    category: "Skin",
    description: "30 ml. Korean vitamin C face serum for glow glass skin. Dark spot correcting ampule with brightening and elasticity care.",
    image: "assets/p109.jpg",
  },
  {
    id: "cosrx-niacinamide-acne-control-serum",
    name: "COSRX Niacinamide Acne Control Serum",
    price: 25,
    category: "Skin",
    description: "Highly concentrated serum with maximum niacinamide and synergistic ingredients for total acne control.",
    image: "assets/p110.jpg",
  },
];

const PRODUCTS_PAGE_SIZE = 12;

const state = {
  activeFilter: "All",
  cart: [],
  visibleCount: PRODUCTS_PAGE_SIZE,
  searchQuery: "",
};

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewLessBtn = document.getElementById("viewLessBtn");
const productSearch = document.getElementById("productSearch");
const cartPanel = document.getElementById("cartPanel");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const bubbleField = document.getElementById("bubbleField");
let checkoutModal;
let checkoutForm;
let nameInput;
let phoneInput;
let locationSelect;
let checkoutError;
let checkoutDelivery;
let checkoutTotal;

const deliveryAreas = [
  { key: "Beirut", label: "Beirut", fee: 4 },
  { key: "Mount-lebanon", label: "All Lebanon", fee: 5 },
];

function init() {
  renderFilters();
  renderProducts();
  attachEvents();
  renderCart();
  createBubbles();
  buildCheckoutModal();
  initReveal();
}

function renderFilters() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filters = ["All", ...categories];
  categoryFilters.innerHTML = "";

  filters.forEach((label) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    if (label === state.activeFilter) btn.classList.add("active");
    btn.addEventListener("click", () => {
      state.activeFilter = label;
      state.visibleCount = PRODUCTS_PAGE_SIZE;
      renderFilters();
      renderProducts();
    });
    categoryFilters.appendChild(btn);
  });
}

function getSearchedProducts() {
  const filtered = state.activeFilter === "All"
    ? products
    : products.filter((p) => p.category === state.activeFilter);

  const query = state.searchQuery.trim().toLowerCase();
  return query
    ? filtered.filter((p) => p.name.toLowerCase().includes(query))
    : filtered;
}

function renderProducts() {
  productGrid.innerHTML = "";
  const searched = getSearchedProducts();

  const displayList = searched.slice(0, state.visibleCount);
  displayList.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const badge = product.badge ? `<span class="badge">${product.badge}</span>` : "";
    const imageSrc = product.image || "assets/placeholder.jpg";

    const isMobile = window.matchMedia("(max-width: 540px)").matches;
    if (isMobile) {
      card.classList.add("desc-collapsed");
    }

    card.innerHTML = `
      ${badge}
      <div class="card-glow"></div>
      <div class="product-visual">
        <img src="${imageSrc}" alt="${product.name}">
      </div>
      <div class="product-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="subtle product-desc">${product.description}</p>
        <div class="product-footer">
          <div class="product-inline">
            <button class="toggle-desc" type="button">${isMobile ? "Details" : "Hide details"}</button>
            <span class="price price-mobile">${formatCurrency(product.price)}</span>
          </div>
          <div class="product-meta">
            <span class="price price-desktop">${formatCurrency(product.price)}</span>
            <div class="card-actions">
              <button class="add">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".add").addEventListener("click", () => addToCart(product.id));
    const toggleBtn = card.querySelector(".toggle-desc");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isCollapsed = card.classList.toggle("desc-collapsed");
        toggleBtn.textContent = isCollapsed ? "Details" : "Hide details";
      });
    }
    productGrid.appendChild(card);
  });

  if (viewMoreBtn && viewLessBtn) {
    const canShowAll = searched.length > PRODUCTS_PAGE_SIZE;
    const hasMore = state.visibleCount < searched.length;
    const canShowLess = state.visibleCount > PRODUCTS_PAGE_SIZE;
    viewMoreBtn.classList.toggle("hidden", !canShowAll || !hasMore);
    viewLessBtn.classList.toggle("hidden", !canShowAll || !canShowLess);
  }
}

function addToCart(productId) {
  const item = state.cart.find((i) => i.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  renderCart();
  openCart();
}

function changeQty(productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.id !== productId);
  }
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const lineTotal = product.price * item.qty;
    total += lineTotal;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div>
        <h4>${product.name}</h4>
        <p class="meta">${formatCurrency(product.price)} · ${product.category}</p>
      </div>
      <div class="qty-controls">
        <button aria-label="Decrease">-</button>
        <span>${item.qty}</span>
        <button aria-label="Increase">+</button>
      </div>
    `;

    const [decreaseBtn, , increaseBtn] = li.querySelectorAll("button, span");
    decreaseBtn.addEventListener("click", () => changeQty(item.id, -1));
    increaseBtn.addEventListener("click", () => changeQty(item.id, 1));

    cartItems.appendChild(li);
  });

  cartTotal.textContent = formatCurrency(total);
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function openCart() {
  cartPanel.classList.add("open");
  cartBackdrop.classList.add("show");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartBackdrop.classList.remove("show");
}

function formatCurrency(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `$${rounded}` : `$${rounded.toFixed(1)}`;
}

function handleCheckout() {
  if (!state.cart.length) return alert("Your cart is empty.");
  openCheckoutModal();
}

function submitCheckout(e) {
  e.preventDefault();
  if (!state.cart.length) {
    closeCheckoutModal();
    return alert("Your cart is empty.");
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\s|-/g, "");
  const locationKey = locationSelect.value;
  const location = deliveryAreas.find((area) => area.key === locationKey);

  checkoutError.textContent = "";

  if (!name || !phone || !locationKey) {
    checkoutError.textContent = "Please fill name, phone, and delivery area.";
    if (!name) nameInput.focus();
    else if (!phone) phoneInput.focus();
    else locationSelect.focus();
    return;
  }

  if (!name) {
    checkoutError.textContent = "Please enter your name.";
    nameInput.focus();
    return;
  }

  if (!isLebanesePhone(phone)) {
    checkoutError.textContent = "Enter a valid Lebanese number (e.g., +96171234567).";
    phoneInput.focus();
    return;
  }

  if (!location) {
    checkoutError.textContent = "Please select your delivery area.";
    locationSelect.focus();
    return;
  }

  let subtotal = 0;
  const orderLines = [];
  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    subtotal += product.price * item.qty;
    orderLines.push(`${product.name} x${item.qty} - ${formatCurrency(product.price * item.qty)}`);
  });

  const lines = [
    "New j-holic order",
    "----------------",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${location.label}`,
    "",
    ...orderLines,
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Delivery (${location.label}): ${formatCurrency(location.fee)}`,
    `Total with delivery: ${formatCurrency(subtotal + location.fee)}`,
    "",
    
  ];

  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  closeCheckoutModal();
  window.open(url, "_blank");
}

function isLebanesePhone(value) {
  const cleaned = value.replace(/\D/g, "");
  // Accept +961 / 961 / 0 followed by 7-8 digits (Lebanese mobile/landline lengths)
  const lebaneseRegex = /^(?:961|0)(?:[1-9]\d{7}|[1-9]\d{6})$/;
  const plusRegex = /^961(?:[1-9]\d{7}|[1-9]\d{6})$/;

  if (value.startsWith("+")) {
    return plusRegex.test(cleaned);
  }
  return lebaneseRegex.test(cleaned);
}

function buildCheckoutModal() {
  checkoutModal = document.createElement("div");
  checkoutModal.className = "modal-backdrop";
  const areaOptions = deliveryAreas.map(
    (area) => `<option value="${area.key}">${area.label} (${formatCurrency(area.fee)} delivery)</option>`
  ).join("");
  checkoutModal.innerHTML = `
    <div class="modal-panel">
      <div class="modal-header">
        <div>
          <p class="eyebrow">Finalize</p>
          <h3>Delivery details</h3>
        </div>
        <button class="icon close-modal" aria-label="Close modal">x</button>
      </div>
      <form class="modal-form">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          <span>Phone (Lebanon)</span>
          <input type="tel" name="phone" placeholder="+96171234567" required />
        </label>
        <label>
          <span>Delivery area</span>
          <select name="location" required>
            <option value="">Select area (delivery added)</option>
            ${areaOptions}
          </select>
        </label>
        <div class="form-summary">
          <div>
            <span>Delivery</span>
            <strong id="deliveryFee">--</strong>
          </div>
          <div>
            <span>Order total</span>
            <strong id="deliveryTotal">--</strong>
          </div>
        </div>
        <p class="form-note">We confirm everything via WhatsApp before shipping.</p>
        <p class="form-error" aria-live="polite"></p>
        <button type="submit" class="primary block">Send order via WhatsApp</button>
      </form>
    </div>
  `;
  document.body.appendChild(checkoutModal);

  checkoutForm = checkoutModal.querySelector("form");
  nameInput = checkoutForm.querySelector('input[name="name"]');
  phoneInput = checkoutForm.querySelector('input[name="phone"]');
  locationSelect = checkoutForm.querySelector('select[name="location"]');
  checkoutError = checkoutForm.querySelector(".form-error");
  checkoutDelivery = checkoutForm.querySelector("#deliveryFee");
  checkoutTotal = checkoutForm.querySelector("#deliveryTotal");

  checkoutForm.addEventListener("submit", submitCheckout);
  locationSelect.addEventListener("change", updateCheckoutSummary);
  checkoutModal.querySelector(".close-modal").addEventListener("click", closeCheckoutModal);
  checkoutModal.addEventListener("click", (e) => {
    if (e.target === checkoutModal) closeCheckoutModal();
  });
}

function attachEvents() {
  checkoutBtn.addEventListener("click", handleCheckout);
  cartToggle.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartPanel);
  cartBackdrop.addEventListener("click", closeCartPanel);
  if (productSearch) {
    productSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      state.visibleCount = PRODUCTS_PAGE_SIZE;
      renderProducts();
    });
  }
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", () => {
      const searched = getSearchedProducts();
      state.visibleCount = Math.min(state.visibleCount + PRODUCTS_PAGE_SIZE, searched.length);
      renderProducts();
    });
  }
  if (viewLessBtn) {
    viewLessBtn.addEventListener("click", () => {
      state.visibleCount = PRODUCTS_PAGE_SIZE;
      renderProducts();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartPanel();
      closeCheckoutModal();
    }
  });
}

function openCheckoutModal() {
  if (!checkoutModal) return;
  checkoutModal.classList.add("show");
  updateCheckoutSummary();
  nameInput.focus();
}

function closeCheckoutModal() {
  if (!checkoutModal) return;
  checkoutModal.classList.remove("show");
  checkoutError.textContent = "";
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);
}

function updateCheckoutSummary() {
  if (!checkoutDelivery || !checkoutTotal) return;
  const subtotal = getCartSubtotal();
  const location = deliveryAreas.find((area) => area.key === locationSelect.value);
  const fee = location ? location.fee : 0;
  checkoutDelivery.textContent = location ? formatCurrency(fee) : "--";
  checkoutTotal.textContent = formatCurrency(subtotal + fee);
}

function createBubbles() {
  if (!bubbleField) return;
  const bubbleCount = 28;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < bubbleCount; i += 1) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = Math.random() * 22 + 12; // 12-34px
    const left = Math.random() * 100;
    const delay = Math.random() * -12;
    const duration = Math.random() * 12 + 12;
    bubble.style.setProperty("--size", `${size}px`);
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${Math.random() * 40 - 10}%`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.setProperty("--duration", `${duration}s`);
    frag.appendChild(bubble);
  }
  bubbleField.appendChild(frag);
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", init);
