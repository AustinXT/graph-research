const nodes = [
  {
    productId: '3822', productCommunity: '2', x: 1327.595947265625, y: 2131.487548828125, nodeSize: 17.45947265625, productName: 'Composite diagnostic or laboratory reagents, nes', nodeColor: '#9c219c',
  },
  {
    productId: '8307', productCommunity: '4', x: 1637.9583740234375, y: 2680.027587890625, nodeSize: 15.205078125, productName: 'Tubing,flexible, with/without fittings, iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '8601', productCommunity: '4', x: 1842.530517578125, y: 2671.224609375, nodeSize: 15.02392578125, productName: 'Rail locomotives, externally electrically powered', nodeColor: '#299fff',
  },
  {
    productId: '8901', productCommunity: '4', x: 1929.0184326171875, y: 2142.746826171875, nodeSize: 31.50048828125, productName: 'Cruise ships, excursion boats, ferry boats', nodeColor: '#299fff',
  },
  {
    productId: '9015', productCommunity: '4', x: 1655.446044921875, y: 2040.5494384765625, nodeSize: 16.233154296875, productName: 'Rangefinders', nodeColor: '#299fff',
  },
  {
    productId: '8429', productCommunity: '4', x: 1673.9191284179688, y: 2745.16650390625, nodeSize: 23.2703857421875, productName: 'Bulldozers and angledozers, crawler type', nodeColor: '#299fff',
  },
  {
    productId: '8410', productCommunity: '4', x: 1938.622314453125, y: 2602.894287109375, nodeSize: 15.080078125, productName: 'Hydraulic turbines, water wheels, power < 1000 kW', nodeColor: '#299fff',
  },
  {
    productId: '8411', productCommunity: '3', x: 1341.784423828125, y: 2810.605712890625, nodeSize: 29.3427734375, productName: 'Turbo-jet engines of a thrust < 25 KN', nodeColor: '#0576a6',
  },
  {
    productId: '9111', productCommunity: '3', x: 1375.3038330078125, y: 2782.478759765625, nodeSize: 15.014892578125, productName: 'Watch cases of, or clad with, precious metal', nodeColor: '#0576a6',
  },
  {
    productId: '9703', productCommunity: '3', x: 1324.2454223632812, y: 2855.2275390625, nodeSize: 15.2054443359375, productName: 'Original sculptures and statuary, in any material', nodeColor: '#0576a6',
  },
  {
    productId: '9014', productCommunity: '4', x: 1494.684326171875, y: 2545.16015625, nodeSize: 15.912109375, productName: 'Direction finding compasses', nodeColor: '#299fff',
  },
  {
    productId: '5111', productCommunity: '4', x: 1814.8948974609375, y: 2052.95458984375, nodeSize: 15.05126953125, productName: 'Woven fabric, >85% carded wool or fine hair, <300 g/m', nodeColor: '#299fff',
  },
  {
    productId: '5112', productCommunity: '4', x: 1796.06689453125, y: 2122.331298828125, nodeSize: 15.36083984375, productName: 'Woven fabric, >85% combed wool or fine hair, <300 g/m', nodeColor: '#299fff',
  },
  {
    productId: '8466', productCommunity: '4', x: 1761.302490234375, y: 2390.467529296875, nodeSize: 17.611083984375, productName: 'Tool holders, self-opening dieheads, for machine tool', nodeColor: '#299fff',
  },
  {
    productId: '6115', productCommunity: '8', x: 2643.6607666015625, y: 2262.0445556640625, nodeSize: 16.423095703125, productName: 'Panty hose etc, synthetic fibre yarn <67 dtex/sy, kni', nodeColor: '#33cc00',
  },
  {
    productId: '4823', productCommunity: '6', x: 2133.3924560546875, y: 2414.60888671875, nodeSize: 15.813232421875, productName: 'Paper, self-adhesive, cut to size, in strips or rolls', nodeColor: '#ff0000',
  },
  {
    productId: '6902', productCommunity: '4', x: 1747.533935546875, y: 2522.902099609375, nodeSize: 15.544677734375, productName: 'Refractory bricks, etc with >50% Mg, Ca or Cr as oxid', nodeColor: '#299fff',
  },
  {
    productId: '7602', productCommunity: '20', x: 2382.5894775390625, y: 2316.6278076171875, nodeSize: 16.578369140625, productName: 'Waste or scrap, aluminium', nodeColor: '#330000',
  },
  {
    productId: '9010', productCommunity: '1', x: 1322.382080078125, y: 2428.58447265625, nodeSize: 15.09716796875, productName: 'Equipment for automatic development of photo film', nodeColor: '#99ffff',
  },
  {
    productId: '7315', productCommunity: '4', x: 1582.1749267578125, y: 2319.52587890625, nodeSize: 15.49609375, productName: 'Chain, roller, iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '7612', productCommunity: '4', x: 2308.7421875, y: 2244.7801513671875, nodeSize: 15.6044921875, productName: 'Aluminium containers, collapsible tubular', nodeColor: '#299fff',
  },
  {
    productId: '6105', productCommunity: '8', x: 2717.490478515625, y: 2394.27001953125, nodeSize: 15.96826171875, productName: 'Mens, boys shirts, of cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6110', productCommunity: '8', x: 2691.7591552734375, y: 2298.499267578125, nodeSize: 21.924072265625, productName: 'Pullovers, cardigans etc of wool or hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6101', productCommunity: '8', x: 2671.9654541015625, y: 2374.242919921875, nodeSize: 15.099853515625, productName: 'Mens, boys overcoats, etc, of wool or hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6104', productCommunity: '8', x: 2644.9263916015625, y: 2409.486572265625, nodeSize: 17.241455078125, productName: 'Womens, girls suits, of wool or hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '8605', productCommunity: '4', x: 1679.2789306640625, y: 2527.708984375, nodeSize: 15.004150390625, productName: 'Railway passenger and special purpose coaches', nodeColor: '#299fff',
  },
  {
    productId: '8406', productCommunity: '4', x: 1727.9107666015625, y: 2415.22900390625, nodeSize: 15.8427734375, productName: 'Steam and vapour turbines for marine propulsion', nodeColor: '#299fff',
  },
  {
    productId: '3801', productCommunity: '4', x: 1693.8334350585938, y: 2644.517578125, nodeSize: 15.1143798828125, productName: 'Artificial graphite', nodeColor: '#299fff',
  },
  {
    productId: '9019', productCommunity: '4', x: 1488.261474609375, y: 2765.7490234375, nodeSize: 15.991943359375, productName: 'Massage and psychological aptitude-test apparatus', nodeColor: '#299fff',
  },
  {
    productId: '7217', productCommunity: '4', x: 2203.1114501953125, y: 2340.635498046875, nodeSize: 16.118896484375, productName: 'Wire, iron or non-alloy steel, not plated or coated, <0.25%C', nodeColor: '#299fff',
  },
  {
    productId: '3816', productCommunity: '4', x: 1783.429931640625, y: 2509.76171875, nodeSize: 15.15576171875, productName: 'Refractory cements, mortars, concretes except graphit', nodeColor: '#299fff',
  },
  {
    productId: '5007', productCommunity: '99', x: 1412.352783203125, y: 2605.56298828125, nodeSize: 15.1728515625, productName: 'Woven fabric of noil silk', nodeColor: '#9c9a87',
  },
  {
    productId: '3815', productCommunity: '2', x: 1296.65625, y: 2263.208740234375, nodeSize: 16.752197265625, productName: 'Supported catalysts, nickel based', nodeColor: '#9c219c',
  },
  {
    productId: '5101', productCommunity: '9', x: 2068.6527099609375, y: 1777.787109375, nodeSize: 15.351806640625, productName: 'Greasy shorn wool, not carded or combed', nodeColor: '#6e451e',
  },
  {
    productId: '0511', productCommunity: '10', x: 2174.0445556640625, y: 2735.1451416015625, nodeSize: 15.117919921875, productName: 'Semen bovine', nodeColor: '#d1ff00',
  },
  {
    productId: '0404', productCommunity: '10', x: 2126.56884765625, y: 2687.986328125, nodeSize: 15.39501953125, productName: 'Whey', nodeColor: '#d1ff00',
  },
  {
    productId: '0304', productCommunity: '10', x: 2140.27294921875, y: 2774.21142578125, nodeSize: 17.58935546875, productName: 'Fish fillet or meat, fresh or chilled, not liver, roe', nodeColor: '#d1ff00',
  },
  {
    productId: '5107', productCommunity: '4', x: 2122.7119140625, y: 2279.32763671875, nodeSize: 15.107421875, productName: 'Yarn of combed wool, >85% wool, not retail', nodeColor: '#299fff',
  },
  {
    productId: '0102', productCommunity: '5', x: 2176.1611328125, y: 2455.51904296875, nodeSize: 15.82861328125, productName: 'Bovine animals, live pure-bred breeding', nodeColor: '#730049',
  },
  {
    productId: '0201', productCommunity: '10', x: 2213.9912109375, y: 2690.233154296875, nodeSize: 17.59228515625, productName: 'Bovine carcasses and half carcasses, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0401', productCommunity: '5', x: 2224.73095703125, y: 2493.444091796875, nodeSize: 15.96337890625, productName: 'Milk not concentrated nor sweetened < 1% fat', nodeColor: '#730049',
  },
  {
    productId: '4907', productCommunity: '99', x: 2906.4732666015625, y: 2565.6220703125, nodeSize: 15.504150390625, productName: 'Documents of title (bonds etc), unused stamps etc', nodeColor: '#9c9a87',
  },
  {
    productId: '0303', productCommunity: '10', x: 2104.87255859375, y: 2781.86083984375, nodeSize: 17.578125, productName: 'Salmon, Pacific, frozen, whole', nodeColor: '#d1ff00',
  },
  {
    productId: '0305', productCommunity: '10', x: 2145.18212890625, y: 2825.642822265625, nodeSize: 15.626953125, productName: 'Flours, meals & pellets of fish for human consumption', nodeColor: '#d1ff00',
  },
  {
    productId: '7103', productCommunity: '20', x: 2876.6260986328125, y: 2514.8609619140625, nodeSize: 15.427490234375, productName: 'Precious, semi-precious stones unworked, partly worke', nodeColor: '#330000',
  },
  {
    productId: '4908', productCommunity: '4', x: 1493.4207763671875, y: 2336.861572265625, nodeSize: 15.009765625, productName: 'Transfers (decalcomanias), vitrifiable', nodeColor: '#299fff',
  },
  {
    productId: '1502', productCommunity: '10', x: 2098.219970703125, y: 2756.84619140625, nodeSize: 15.12451171875, productName: 'Bovine, sheep and goat fats, raw or rendered', nodeColor: '#d1ff00',
  },
  {
    productId: '1007', productCommunity: '10', x: 2070.6998291015625, y: 2755.8671875, nodeSize: 15.175537109375, productName: 'Grain sorghum', nodeColor: '#d1ff00',
  },
  {
    productId: '0202', productCommunity: '10', x: 2091.778564453125, y: 2723.38134765625, nodeSize: 16.876953125, productName: 'Bovine carcasses and half carcasses, frozen', nodeColor: '#d1ff00',
  },
  {
    productId: '1108', productCommunity: '10', x: 2230.776123046875, y: 2728.199462890625, nodeSize: 15.25244140625, productName: 'Wheat, starch', nodeColor: '#d1ff00',
  },
  {
    productId: '0206', productCommunity: '10', x: 2208.1904296875, y: 2740.009765625, nodeSize: 15.560546875, productName: 'Bovine edible offal, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '4909', productCommunity: '99', x: 1495.0965576171875, y: 2815.514892578125, nodeSize: 15.05615234375, productName: 'Postcards, printed or illustrated, greeting cards', nodeColor: '#9c9a87',
  },
  {
    productId: '4106', productCommunity: '10', x: 2350.74560546875, y: 2709.769287109375, nodeSize: 15.01171875, productName: 'Goat or kid skin leather, vegetable pre-tanned', nodeColor: '#d1ff00',
  },
  {
    productId: '0104', productCommunity: '10', x: 2360.2236328125, y: 2757.6953125, nodeSize: 15.048828125, productName: 'Sheep, live', nodeColor: '#d1ff00',
  },
  {
    productId: '0203', productCommunity: '10', x: 1722.6929931640625, y: 2621.986328125, nodeSize: 18.85791015625, productName: 'Swine carcasses and half carcasses, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0103', productCommunity: '10', x: 1711.279052734375, y: 2703.8388671875, nodeSize: 15.42578125, productName: 'Swine, live pure-bred breeding', nodeColor: '#d1ff00',
  },
  {
    productId: '8716', productCommunity: '6', x: 2253.945068359375, y: 2472.808837890625, nodeSize: 18.83740234375, productName: 'Trailers for housing or camping', nodeColor: '#ff0000',
  },
  {
    productId: '0403', productCommunity: '5', x: 2113.0906982421875, y: 2459.75634765625, nodeSize: 15.495849609375, productName: 'Yogurt', nodeColor: '#730049',
  },
  {
    productId: '3925', productCommunity: '6', x: 2315.7174072265625, y: 2378.8819580078125, nodeSize: 16.173583984375, productName: 'Plastic reservoirs, tanks, vats, etc, capacity <300l', nodeColor: '#ff0000',
  },
  {
    productId: '4410', productCommunity: '6', x: 2265.5556640625, y: 2434.960205078125, nodeSize: 15.9248046875, productName: 'Particle board of wood', nodeColor: '#ff0000',
  },
  {
    productId: '4808', productCommunity: '6', x: 2364.94091796875, y: 2371.2720947265625, nodeSize: 15.083984375, productName: 'Paper, corrugated', nodeColor: '#ff0000',
  },
  {
    productId: '6806', productCommunity: '5', x: 1995.1932373046875, y: 2407.49560546875, nodeSize: 15.427978515625, productName: 'Slag wool, rock wool, similar wools, bulk, sheet, rol', nodeColor: '#730049',
  },
  {
    productId: '3209', productCommunity: '5', x: 2116.2896728515625, y: 2486.121826171875, nodeSize: 15.642822265625, productName: 'Acrylic & vinyl polymer based paint, varnish, in wate', nodeColor: '#730049',
  },
  {
    productId: '3402', productCommunity: '5', x: 2177.34814453125, y: 2402.884765625, nodeSize: 18.6826171875, productName: 'Anionic surface-active agents', nodeColor: '#730049',
  },
  {
    productId: '3921', productCommunity: '5', x: 2143.0167236328125, y: 2471.838134765625, nodeSize: 17.831787109375, productName: 'Sheet etc, cellular of polymers of styrene', nodeColor: '#730049',
  },
  {
    productId: '8477', productCommunity: '4', x: 1579.7407836914062, y: 2559.498291015625, nodeSize: 18.5135498046875, productName: 'Injection-moulding machines for rubber or plastic', nodeColor: '#299fff',
  },
  {
    productId: '8443', productCommunity: '1', x: 1271.6505737304688, y: 2609.826171875, nodeSize: 32.6881103515625, productName: 'Reel fed offset printing machinery', nodeColor: '#99ffff',
  },
  {
    productId: '7410', productCommunity: '1', x: 1228.666748046875, y: 2731.148193359375, nodeSize: 15.75341796875, productName: 'Foil of refined copper, not backed, t < 0.15mm', nodeColor: '#99ffff',
  },
  {
    productId: '7006', productCommunity: '1', x: 1229.4537353515625, y: 2710.156005859375, nodeSize: 15.154541015625, productName: 'Cast, drawn or float glass sheet, edge worked or bent', nodeColor: '#99ffff',
  },
  {
    productId: '8413', productCommunity: '4', x: 1545.4822998046875, y: 2467.462158203125, nodeSize: 23.2236328125, productName: 'Pumps dispensing fuel, lubricants in filling stations', nodeColor: '#299fff',
  },
  {
    productId: '8541', productCommunity: '1', x: 1239.9779052734375, y: 2671.4169921875, nodeSize: 27.1357421875, productName: 'Diodes, except photosensitive and light emitting', nodeColor: '#99ffff',
  },
  {
    productId: '8534', productCommunity: '1', x: 1266.261474609375, y: 2704.1181640625, nodeSize: 20.0, productName: 'Electronic printed circuits', nodeColor: '#99ffff',
  },
  {
    productId: '8522', productCommunity: '1', x: 1230.40673828125, y: 2604.59765625, nodeSize: 16.451904296875, productName: 'Pick-up cartridges', nodeColor: '#99ffff',
  },
  {
    productId: '8473', productCommunity: '1', x: 1172.2359619140625, y: 2623.829833984375, nodeSize: 36.63134765625, productName: 'Parts and accessories of typewriters, word processors', nodeColor: '#99ffff',
  },
  {
    productId: '8417', productCommunity: '4', x: 1914.6055908203125, y: 2362.802490234375, nodeSize: 15.830322265625, productName: 'Furnaces/ovens non-electric for ores/pyrites/metals', nodeColor: '#299fff',
  },
  {
    productId: '7019', productCommunity: '4', x: 1872.3770751953125, y: 2490.209716796875, nodeSize: 16.626953125, productName: 'Slivers, rovings, yarn and chopped strands of glass', nodeColor: '#299fff',
  },
  {
    productId: '4707', productCommunity: '6', x: 2165.9833984375, y: 2475.064208984375, nodeSize: 16.22900390625, productName: 'Waste or scrap of unbleached kraft or paperboard', nodeColor: '#ff0000',
  },
  {
    productId: '5602', productCommunity: '6', x: 2145.2021484375, y: 2391.589599609375, nodeSize: 15.0087890625, productName: 'Needleloom felt and stitch-bonded fibre fabric', nodeColor: '#ff0000',
  },
  {
    productId: '6202', productCommunity: '8', x: 2545.1514892578125, y: 2357.546630859375, nodeSize: 16.677490234375, productName: 'Womens, girls overcoats etc of wool or hair not knit', nodeColor: '#33cc00',
  },
  {
    productId: '3506', productCommunity: '5', x: 2064.6297607421875, y: 2503.35693359375, nodeSize: 16.107666015625, productName: 'Glues and adhesives of all kinds, package <1 kg', nodeColor: '#730049',
  },
  {
    productId: '7404', productCommunity: '20', x: 2432.3338623046875, y: 2320.48779296875, nodeSize: 17.785400390625, productName: 'Copper/copper alloy waste or scrap', nodeColor: '#330000',
  },
  {
    productId: '2501', productCommunity: '10', x: 2114.255859375, y: 2943.5400390625, nodeSize: 15.20849609375, productName: 'Salt (sodium chloride) including solution, salt water', nodeColor: '#d1ff00',
  },
  {
    productId: '2402', productCommunity: '7', x: 2414.61279296875, y: 2353.589599609375, nodeSize: 17.9345703125, productName: 'Cigars, cheroots and cigarillos, containing tobacco', nodeColor: '#bf8845',
  },
  {
    productId: '7308', productCommunity: '6', x: 2344.0660400390625, y: 2352.1129150390625, nodeSize: 21.681884765625, productName: 'Bridges and bridge sections, iron or steel', nodeColor: '#ff0000',
  },
  {
    productId: '8432', productCommunity: '4', x: 2108.8011474609375, y: 2349.274658203125, nodeSize: 15.989013671875, productName: 'Ploughs', nodeColor: '#299fff',
  },
  {
    productId: '1605', productCommunity: '10', x: 2156.906494140625, y: 2893.585205078125, nodeSize: 15.962890625, productName: 'Crab, prepared or preserved', nodeColor: '#d1ff00',
  },
  {
    productId: '2603', productCommunity: '20', x: 2270.162109375, y: 1780.110595703125, nodeSize: 20.0, productName: 'Copper ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '8105', productCommunity: '20', x: 1090.3078002929688, y: 2442.056884765625, nodeSize: 15.7352294921875, productName: 'Cobalt, unwrought, matte, waste or scrap, powders', nodeColor: '#330000',
  },
  {
    productId: '8437', productCommunity: '99', x: 1369.862548828125, y: 2449.44140625, nodeSize: 15.125, productName: 'Machines to clean, sort, grade seed,grain, dry legume', nodeColor: '#9c9a87',
  },
  {
    productId: '2530', productCommunity: '20', x: 1375.8272705078125, y: 2479.0146484375, nodeSize: 15.079833984375, productName: 'Vermiculite, perlite and chlorites, unexpanded', nodeColor: '#330000',
  },
  {
    productId: '7106', productCommunity: '20', x: 2012.290771484375, y: 1809.7853393554688, nodeSize: 17.585205078125, productName: 'Silver powder', nodeColor: '#330000',
  },
  {
    productId: '2529', productCommunity: '20', x: 1982.2733154296875, y: 1772.0388793945312, nodeSize: 15.03662109375, productName: 'Feldspar', nodeColor: '#330000',
  },
  {
    productId: '2612', productCommunity: '20', x: 1010.3504943847656, y: 2417.33251953125, nodeSize: 15.13739013671875, productName: 'Uranium ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '2602', productCommunity: '20', x: 1067.5899658203125, y: 2428.7265625, nodeSize: 15.961669921875, productName: 'Manganese ores, concentrates, iron ores >20% Manganes', nodeColor: '#330000',
  },
  {
    productId: '7203', productCommunity: '20', x: 994.2952880859375, y: 2240.13037109375, nodeSize: 15.2991943359375, productName: 'Ferrous products from direct reduction of iron ore', nodeColor: '#330000',
  },
  {
    productId: '2601', productCommunity: '20', x: 943.7775268554688, y: 2228.8170166015625, nodeSize: 26.4874267578125, productName: 'Iron ore, concentrate, not iron pyrites,unagglomerate', nodeColor: '#330000',
  },
  {
    productId: '3207', productCommunity: '2', x: 1263.093017578125, y: 2055.1805419921875, nodeSize: 15.468017578125, productName: 'Pigment, opacifier, colours etc for ceramics or glass', nodeColor: '#9c219c',
  },
  {
    productId: '3814', productCommunity: '5', x: 2125.46728515625, y: 2607.51025390625, nodeSize: 15.1435546875, productName: 'Organic composite solvents, paint, varnish remover et', nodeColor: '#730049',
  },
  {
    productId: '0407', productCommunity: '10', x: 2177.9979248046875, y: 2226.4765625, nodeSize: 15.270263671875, productName: 'Birds eggs, in shell, fresh, preserved or cooked', nodeColor: '#d1ff00',
  },
  {
    productId: '8902', productCommunity: '99', x: 2051.6726684570312, y: 2764.624755859375, nodeSize: 15.0228271484375, productName: 'Fishing vessels and factory ships', nodeColor: '#9c9a87',
  },
  {
    productId: '3913', productCommunity: '2', x: 1348.6689453125, y: 2091.0655517578125, nodeSize: 15.12939453125, productName: 'Alginic acid, its salts & esters, in primary forms', nodeColor: '#9c219c',
  },
  {
    productId: '6301', productCommunity: '8', x: 2767.506591796875, y: 2508.3837890625, nodeSize: 15.310546875, productName: 'Electric blankets of textile material', nodeColor: '#33cc00',
  },
  {
    productId: '8458', productCommunity: '4', x: 1510.85888671875, y: 2580.626953125, nodeSize: 16.154296875, productName: 'Horizontal numerically controlled metal work lathes', nodeColor: '#299fff',
  },
  {
    productId: '8111', productCommunity: '20', x: 2758.41796875, y: 2646.963623046875, nodeSize: 15.08935546875, productName: 'Manganese, articles thereof, waste or scrap', nodeColor: '#330000',
  },
  {
    productId: '7614', productCommunity: '99', x: 2680.497802734375, y: 2194.409423828125, nodeSize: 15.052734375, productName: 'Aluminium wire, cables, etc, steel core, uninsulated', nodeColor: '#9c9a87',
  },
  {
    productId: '5504', productCommunity: '2', x: 1028.6437683105469, y: 2075.3343505859375, nodeSize: 15.19024658203125, productName: 'Staple fibres of viscose rayon, not carded or combed', nodeColor: '#9c219c',
  },
  {
    productId: '2934', productCommunity: '2', x: 1089.23046875, y: 2122.9671630859375, nodeSize: 19.188720703125, productName: 'Heterocyclic compounds with an unfused thiazole ring', nodeColor: '#9c219c',
  },
  {
    productId: '2931', productCommunity: '2', x: 1132.842041015625, y: 2136.5899658203125, nodeSize: 16.056396484375, productName: 'Organo-inorganic compounds, nes', nodeColor: '#9c219c',
  },
  {
    productId: '8539', productCommunity: '4', x: 1491.17431640625, y: 2149.561767578125, nodeSize: 17.70556640625, productName: 'Sealed beam lamp units', nodeColor: '#299fff',
  },
  {
    productId: '2929', productCommunity: '4', x: 1474.375, y: 2207.75537109375, nodeSize: 15.816162109375, productName: 'Isocyanates', nodeColor: '#299fff',
  },
  {
    productId: '2926', productCommunity: '2', x: 1421.3011474609375, y: 2095.6077880859375, nodeSize: 15.68701171875, productName: 'Acrylonitrile', nodeColor: '#9c219c',
  },
  {
    productId: '8904', productCommunity: '8', x: 2806.1055908203125, y: 2377.3016357421875, nodeSize: 15.568603515625, productName: 'Tugs and pusher craft', nodeColor: '#33cc00',
  },
  {
    productId: '6215', productCommunity: '99', x: 1395.72119140625, y: 2832.421875, nodeSize: 15.024169921875, productName: 'Ties, bow ties and cravats, of silk, not knit', nodeColor: '#9c9a87',
  },
  {
    productId: '6303', productCommunity: '8', x: 2629.4920654296875, y: 2150.8529052734375, nodeSize: 15.411376953125, productName: 'Curtains drapes blinds valances, cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6306', productCommunity: '8', x: 2652.15185546875, y: 2091.499755859375, nodeSize: 15.263671875, productName: 'Tarpaulins, awnings and sunblinds, of cotton', nodeColor: '#33cc00',
  },
  {
    productId: '9603', productCommunity: '8', x: 2598.154541015625, y: 2147.3076171875, nodeSize: 15.75, productName: 'Brooms/brushes of vegetable material', nodeColor: '#33cc00',
  },
  {
    productId: '8430', productCommunity: '4', x: 1632.4571533203125, y: 1983.2159423828125, nodeSize: 17.32666015625, productName: 'Pile-drivers and pile-extractors', nodeColor: '#299fff',
  },
  {
    productId: '6404', productCommunity: '8', x: 2737.103271484375, y: 2560.1708984375, nodeSize: 16.453125, productName: 'Sports footwear, sole rubber or plastic, upper textil', nodeColor: '#33cc00',
  },
  {
    productId: '6505', productCommunity: '8', x: 2728.0069580078125, y: 2631.080810546875, nodeSize: 15.406982421875, productName: 'Hair-nets of any material', nodeColor: '#33cc00',
  },
  {
    productId: '6001', productCommunity: '8', x: 2805.4390869140625, y: 2482.072265625, nodeSize: 15.248779296875, productName: 'Long pile knit or crochet textile fabric', nodeColor: '#33cc00',
  },
  {
    productId: '8461', productCommunity: '4', x: 1639.4776611328125, y: 2828.2021484375, nodeSize: 15.327880859375, productName: 'Metal planing machines', nodeColor: '#299fff',
  },
  {
    productId: '3304', productCommunity: '9', x: 1705.7357177734375, y: 2827.1767578125, nodeSize: 18.77099609375, productName: 'Lip make-up preparations', nodeColor: '#6e451e',
  },
  {
    productId: '8548', productCommunity: '1', x: 1314.4573974609375, y: 2553.884521484375, nodeSize: 15.42822265625, productName: 'Electrical parts of machinery and apparatus, nes', nodeColor: '#99ffff',
  },
  {
    productId: '7208', productCommunity: '20', x: 2205.0369873046875, y: 2047.8671264648438, nodeSize: 28.004150390625, productName: 'Hot rolled iron or non-alloy steel, coil,w >600mm, t >10mm, myp 355 mpa', nodeColor: '#330000',
  },
  {
    productId: '8415', productCommunity: '1', x: 1359.23583984375, y: 2659.892822265625, nodeSize: 20.153076171875, productName: 'Air conditioners window/wall types, self-contained', nodeColor: '#99ffff',
  },
  {
    productId: '9606', productCommunity: '8', x: 2767.4068603515625, y: 2536.497802734375, nodeSize: 15.119873046875, productName: 'Press-fasteners, snap-fasteners and press-studs, part', nodeColor: '#33cc00',
  },
  {
    productId: '4002', productCommunity: '2', x: 1377.328369140625, y: 2158.6461181640625, nodeSize: 17.94189453125, productName: 'Styrene-butadiene rubber (SBR/XSBR) latex', nodeColor: '#9c219c',
  },
  {
    productId: '1512', productCommunity: '10', x: 2303.3060302734375, y: 2660.876220703125, nodeSize: 15.983154296875, productName: 'Sunflower-seed or safflower oil, crude', nodeColor: '#d1ff00',
  },
  {
    productId: '8423', productCommunity: '1', x: 1302.6011962890625, y: 2483.756591796875, nodeSize: 15.378662109375, productName: 'Personal weighing machines, baby & household scales', nodeColor: '#99ffff',
  },
  {
    productId: '3603', productCommunity: '99', x: 2320.5281982421875, y: 2645.67333984375, nodeSize: 15.039794921875, productName: 'Safety or detonating fuses, detonators, igniters', nodeColor: '#9c9a87',
  },
  {
    productId: '8531', productCommunity: '1', x: 1340.95654296875, y: 2563.111572265625, nodeSize: 17.515625, productName: 'Burglar or fire alarms and similar apparatus', nodeColor: '#99ffff',
  },
  {
    productId: '9503', productCommunity: '1', x: 1199.4970703125, y: 2829.6142578125, nodeSize: 19.57958984375, productName: 'Electric trains, train sets, etc', nodeColor: '#99ffff',
  },
  {
    productId: '8521', productCommunity: '1', x: 1173.3758544921875, y: 2729.501220703125, nodeSize: 17.521484375, productName: 'Video recording/reproducing apparatus, magnetic tape', nodeColor: '#99ffff',
  },
  {
    productId: '8525', productCommunity: '1', x: 1087.8079833984375, y: 2544.99072265625, nodeSize: 43.57763671875, productName: 'Transmission apparatus for radio, telephone and TV', nodeColor: '#99ffff',
  },
  {
    productId: '9207', productCommunity: '1', x: 1191.116455078125, y: 2468.63330078125, nodeSize: 15.181884765625, productName: 'Keyboard instruments electrical/requiring amplifier', nodeColor: '#99ffff',
  },
  {
    productId: '8507', productCommunity: '1', x: 1340.521484375, y: 2699.882080078125, nodeSize: 19.291015625, productName: 'Lead-acid electric accumulators (vehicle)', nodeColor: '#99ffff',
  },
  {
    productId: '9506', productCommunity: '1', x: 1284.9024658203125, y: 2784.908447265625, nodeSize: 18.131591796875, productName: 'Snow-skis and parts', nodeColor: '#99ffff',
  },
  {
    productId: '9020', productCommunity: '4', x: 1475.094482421875, y: 2707.374755859375, nodeSize: 15.0068359375, productName: 'Breathing appliances and gas masks', nodeColor: '#299fff',
  },
  {
    productId: '8706', productCommunity: '4', x: 1463.734375, y: 2746.6572265625, nodeSize: 15.5458984375, productName: 'Motor vehicle chassis fitted with engine', nodeColor: '#299fff',
  },
  {
    productId: '8476', productCommunity: '4', x: 1504.3763427734375, y: 2219.148193359375, nodeSize: 15.14501953125, productName: 'Automatic food-vendors with heating or refrigeration', nodeColor: '#299fff',
  },
  {
    productId: '3104', productCommunity: '20', x: 1534.226806640625, y: 2021.2365112304688, nodeSize: 18.715087890625, productName: 'Carnallite, sylvite, crude potassium salts nes, >10kg', nodeColor: '#330000',
  },
  {
    productId: '4301', productCommunity: '10', x: 1524.9434814453125, y: 2128.38427734375, nodeSize: 15.2119140625, productName: 'Raw mink furskins, whole', nodeColor: '#d1ff00',
  },
  {
    productId: '5512', productCommunity: '8', x: 2687.771728515625, y: 2619.73046875, nodeSize: 15.31591796875, productName: 'Woven fabric >85% polyester staple fibre unbl/bleache', nodeColor: '#33cc00',
  },
  {
    productId: '6403', productCommunity: '8', x: 2697.413818359375, y: 2468.479736328125, nodeSize: 22.4775390625, productName: 'Ski footwear, with uppers of leather', nodeColor: '#33cc00',
  },
  {
    productId: '6302', productCommunity: '8', x: 2664.7237548828125, y: 2464.49853515625, nodeSize: 17.239990234375, productName: 'Bed linen, of textile knit or crochet materials', nodeColor: '#33cc00',
  },
  {
    productId: '5516', productCommunity: '8', x: 2621.328125, y: 2619.9580078125, nodeSize: 15.162109375, productName: 'Woven fabric <85% artif staple fibres, unbl/bleached', nodeColor: '#33cc00',
  },
  {
    productId: '8480', productCommunity: '4', x: 1687.363525390625, y: 2231.772705078125, nodeSize: 17.050048828125, productName: 'Boxes, moulding, for metal foundry', nodeColor: '#299fff',
  },
  {
    productId: '8419', productCommunity: '4', x: 1650.6270751953125, y: 2359.895263671875, nodeSize: 20.944580078125, productName: 'Instantaneous gas water heaters', nodeColor: '#299fff',
  },
  {
    productId: '6002', productCommunity: '8', x: 2768.64013671875, y: 2464.836669921875, nodeSize: 17.642578125, productName: 'Knit or crochet fabric, width <30 cm, >5% elastomer', nodeColor: '#33cc00',
  },
  {
    productId: '8537', productCommunity: '4', x: 1905.1281127929688, y: 2307.033935546875, nodeSize: 19.8756103515625, productName: 'Electrical control and distribution boards, < 1kV', nodeColor: '#299fff',
  },
  {
    productId: '6112', productCommunity: '8', x: 2570.5594482421875, y: 2354.3511962890625, nodeSize: 15.446533203125, productName: 'Track suits, of cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6107', productCommunity: '8', x: 2548.875732421875, y: 2426.2984619140625, nodeSize: 15.5966796875, productName: 'Mens, boys underpants or briefs, of cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '8485', productCommunity: '4', x: 1674.9940185546875, y: 2266.1302490234375, nodeSize: 16.181884765625, productName: 'Ships or boats propellers and blades thereof', nodeColor: '#299fff',
  },
  {
    productId: '8421', productCommunity: '4', x: 1577.35107421875, y: 2357.341552734375, nodeSize: 22.1240234375, productName: 'Cream separators', nodeColor: '#299fff',
  },
  {
    productId: '5906', productCommunity: '4', x: 1726.3814697265625, y: 2117.60400390625, nodeSize: 15.037841796875, productName: 'Rubberised textile adhesive tape < 20cm wide', nodeColor: '#299fff',
  },
  {
    productId: '8467', productCommunity: '4', x: 1627.8560791015625, y: 2232.00439453125, nodeSize: 16.185791015625, productName: 'Tools for working in the hand, pneumatic rotary type', nodeColor: '#299fff',
  },
  {
    productId: '8529', productCommunity: '1', x: 1279.6566162109375, y: 2646.469970703125, nodeSize: 26.498779296875, productName: 'Aerials and aerial reflectors', nodeColor: '#99ffff',
  },
  {
    productId: '8475', productCommunity: '4', x: 1549.0152587890625, y: 2403.775146484375, nodeSize: 15.400390625, productName: 'Machines to assemble electric lamps, glass envelope', nodeColor: '#299fff',
  },
  {
    productId: '3215', productCommunity: '2', x: 1315.69921875, y: 2179.5789794921875, nodeSize: 16.394775390625, productName: 'Printing ink, black', nodeColor: '#9c219c',
  },
  {
    productId: '2910', productCommunity: '2', x: 1161.7747802734375, y: 2169.80517578125, nodeSize: 15.447509765625, productName: 'Oxirane (ethylene oxide)', nodeColor: '#9c219c',
  },
  {
    productId: '3702', productCommunity: '2', x: 1167.457763671875, y: 2204.0150146484375, nodeSize: 15.4365234375, productName: 'Photographic film, rolls, for x-ray', nodeColor: '#9c219c',
  },
  {
    productId: '8545', productCommunity: '4', x: 1703.6148681640625, y: 2737.460205078125, nodeSize: 15.854248046875, productName: 'Carbon and graphite furnace electrodes', nodeColor: '#299fff',
  },
  {
    productId: '2712', productCommunity: '99', x: 1572.5738525390625, y: 2019.865966796875, nodeSize: 15.622314453125, productName: 'Petroleum jelly', nodeColor: '#9c9a87',
  },
  {
    productId: '7312', productCommunity: '4', x: 2149.211181640625, y: 2107.759521484375, nodeSize: 15.93798828125, productName: 'Stranded steel wire/cable/etc, no electric insulation', nodeColor: '#299fff',
  },
  {
    productId: '4703', productCommunity: '2', x: 1023.6372985839844, y: 2251.942626953125, nodeSize: 18.97125244140625, productName: 'Chem wood pulp, soda or sulphate, conifer, unbleached', nodeColor: '#9c219c',
  },
  {
    productId: '7206', productCommunity: '4', x: 1563.4349365234375, y: 2077.1290283203125, nodeSize: 15.249755859375, productName: 'Iron or non-alloy steel in ingots, <99.94% iron', nodeColor: '#299fff',
  },
  {
    productId: '7907', productCommunity: '4', x: 1988.5445556640625, y: 2276.11474609375, nodeSize: 15.0244140625, productName: 'Zinc fabricated building components (gutters,etc)', nodeColor: '#299fff',
  },
  {
    productId: '8205', productCommunity: '4', x: 1859.646728515625, y: 2525.54638671875, nodeSize: 15.80810546875, productName: 'Drilling, threading or tapping tools', nodeColor: '#299fff',
  },
  {
    productId: '8501', productCommunity: '4', x: 2066.5797119140625, y: 2322.6318359375, nodeSize: 21.466064453125, productName: 'Electric motors of an output < 37.5 watts', nodeColor: '#299fff',
  },
  {
    productId: '3926', productCommunity: '4', x: 1848.81982421875, y: 2295.468994140625, nodeSize: 22.760009765625, productName: 'Plastic office and school articles and supplies', nodeColor: '#299fff',
  },
  {
    productId: '7306', productCommunity: '6', x: 2294.530029296875, y: 2354.0362548828125, nodeSize: 19.15673828125, productName: 'Pipe (oil/gas line) iron or steel nes, diameter <406m', nodeColor: '#ff0000',
  },
  {
    productId: '7321', productCommunity: '6', x: 2175.061279296875, y: 2364.80029296875, nodeSize: 16.115234375, productName: 'Cooking appliances for gas fuel, etc, iron or steel', nodeColor: '#ff0000',
  },
  {
    productId: '7314', productCommunity: '4', x: 2160.9931640625, y: 2333.727294921875, nodeSize: 15.646484375, productName: 'Woven products of stainless steel', nodeColor: '#299fff',
  },
  {
    productId: '4421', productCommunity: '4', x: 2177.2078857421875, y: 2329.540771484375, nodeSize: 15.675048828125, productName: 'Clothes hangers of wood', nodeColor: '#299fff',
  },
  {
    productId: '8455', productCommunity: '4', x: 1593.67041015625, y: 2222.274658203125, nodeSize: 16.063232421875, productName: 'Tube mills, metal rolling', nodeColor: '#299fff',
  },
  {
    productId: '3916', productCommunity: '4', x: 1719.417724609375, y: 2479.858642578125, nodeSize: 15.6953125, productName: 'Monofilament(>1mm), rods, etc, ethylene polymers', nodeColor: '#299fff',
  },
  {
    productId: '4205', productCommunity: '4', x: 2059.459228515625, y: 2280.52392578125, nodeSize: 15.1240234375, productName: 'Articles of leather and composition leather, nes', nodeColor: '#299fff',
  },
  {
    productId: '3908', productCommunity: '2', x: 1285.25146484375, y: 2216.381591796875, nodeSize: 16.63720703125, productName: 'Polyamide-6, -11, -12, -6,6, -6,9, -6,10 or -6,12', nodeColor: '#9c219c',
  },
  {
    productId: '8703', productCommunity: '4', x: 1929.6378173828125, y: 2402.337646484375, nodeSize: 56.369384765625, productName: 'Automobiles', nodeColor: '#299fff',
  },
  {
    productId: '2915', productCommunity: '2', x: 1357.300537109375, y: 2356.0894775390625, nodeSize: 16.767822265625, productName: 'Formic acid', nodeColor: '#9c219c',
  },
  {
    productId: '8401', productCommunity: '2', x: 1328.8489990234375, y: 2016.8987426757812, nodeSize: 15.658447265625, productName: 'Nuclear reactors', nodeColor: '#9c219c',
  },
  {
    productId: '3902', productCommunity: '4', x: 1544.1248779296875, y: 2224.9892578125, nodeSize: 20.137939453125, productName: 'Polypropylene in primary forms', nodeColor: '#299fff',
  },
  {
    productId: '0910', productCommunity: '8', x: 2722.9388427734375, y: 2369.7381591796875, nodeSize: 15.091552734375, productName: 'Ginger', nodeColor: '#33cc00',
  },
  {
    productId: '6910', productCommunity: '6', x: 2482.6627197265625, y: 2385.431396484375, nodeSize: 15.626220703125, productName: 'Porcelain bathroom, kitchen & other sanitary fixtures', nodeColor: '#ff0000',
  },
  {
    productId: '6106', productCommunity: '8', x: 2602.2940673828125, y: 2438.30322265625, nodeSize: 15.827392578125, productName: 'Womens, girls blouses & shirts, of cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6103', productCommunity: '8', x: 2621.69873046875, y: 2348.68798828125, nodeSize: 15.6279296875, productName: 'Mens, boys suits, of wool, fine animal hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '0806', productCommunity: '10', x: 2542.0938720703125, y: 2790.021484375, nodeSize: 15.970458984375, productName: 'Grapes, fresh', nodeColor: '#d1ff00',
  },
  {
    productId: '0807', productCommunity: '7', x: 2454.1500244140625, y: 2588.892578125, nodeSize: 15.249267578125, productName: 'Melons (including watermelons), fresh', nodeColor: '#bf8845',
  },
  {
    productId: '0811', productCommunity: '7', x: 2436.7513427734375, y: 2373.308837890625, nodeSize: 15.348876953125, productName: 'Strawberries, (uncooked steamed or boiled), frozen', nodeColor: '#bf8845',
  },
  {
    productId: '0813', productCommunity: '10', x: 2571.0185546875, y: 2795.272705078125, nodeSize: 15.1181640625, productName: 'Apricots, dried', nodeColor: '#d1ff00',
  },
  {
    productId: '6809', productCommunity: '6', x: 2202.4298095703125, y: 2440.965087890625, nodeSize: 15.157958984375, productName: 'Plaster board etc not ornamental, paper reinforced', nodeColor: '#ff0000',
  },
  {
    productId: '6109', productCommunity: '8', x: 2647.3145751953125, y: 2365.288330078125, nodeSize: 19.792724609375, productName: 'T-shirts, singlets and other vests, of cotton, knit', nodeColor: '#33cc00',
  },
  {
    productId: '6108', productCommunity: '8', x: 2605.692138671875, y: 2385.23681640625, nodeSize: 16.50048828125, productName: 'Womens, girls slips or petticoats, manmade fibre knit', nodeColor: '#33cc00',
  },
  {
    productId: '4409', productCommunity: '20', x: 2242.446044921875, y: 2190.5242919921875, nodeSize: 15.68212890625, productName: 'Coniferous wood continuously shaped along any edges', nodeColor: '#330000',
  },
  {
    productId: '1507', productCommunity: '10', x: 2699.182861328125, y: 2794.434814453125, nodeSize: 16.77880859375, productName: 'Soya-bean oil crude, whether or not degummed', nodeColor: '#d1ff00',
  },
  {
    productId: '0809', productCommunity: '10', x: 2601.3468017578125, y: 2754.647216796875, nodeSize: 15.493896484375, productName: 'Apricots, fresh', nodeColor: '#d1ff00',
  },
  {
    productId: '0705', productCommunity: '10', x: 2668.2578125, y: 2788.951416015625, nodeSize: 15.1728515625, productName: 'Cabbage lettuce (head lettuce) fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0713', productCommunity: '10', x: 2494.0166015625, y: 2720.209228515625, nodeSize: 15.916015625, productName: 'Peas dried, shelled', nodeColor: '#d1ff00',
  },
  {
    productId: '0710', productCommunity: '10', x: 2571.0718994140625, y: 2666.240966796875, nodeSize: 15.658447265625, productName: 'Potatoes, frozen, uncooked steamed or boiled', nodeColor: '#d1ff00',
  },
  {
    productId: '0810', productCommunity: '7', x: 2500.5616455078125, y: 2601.0185546875, nodeSize: 15.922119140625, productName: 'Strawberries, fresh', nodeColor: '#bf8845',
  },
  {
    productId: '0708', productCommunity: '7', x: 2508.7469482421875, y: 2568.6044921875, nodeSize: 15.018310546875, productName: 'Peas, shelled or unshelled, fresh or chilled', nodeColor: '#bf8845',
  },
  {
    productId: '1509', productCommunity: '10', x: 2694.0523681640625, y: 2831.499755859375, nodeSize: 15.772705078125, productName: 'Olive oil, virgin', nodeColor: '#d1ff00',
  },
  {
    productId: '1516', productCommunity: '7', x: 2437.892333984375, y: 2599.0045166015625, nodeSize: 15.52880859375, productName: 'Animal fats, oils, fractions, hydrogenated, esterifie', nodeColor: '#bf8845',
  },
  {
    productId: '0803', productCommunity: '10', x: 2040.8877563476562, y: 2936.250244140625, nodeSize: 16.4197998046875, productName: 'Bananas, including plantains, fresh or dried', nodeColor: '#d1ff00',
  },
  {
    productId: '0714', productCommunity: '10', x: 2002.15673828125, y: 2966.806640625, nodeSize: 15.05615234375, productName: 'Manioc (cassava), fresh or dried', nodeColor: '#d1ff00',
  },
  {
    productId: '1517', productCommunity: '7', x: 2433.598388671875, y: 2535.206298828125, nodeSize: 15.66748046875, productName: 'Margarine, except liquid margarine', nodeColor: '#bf8845',
  },
  {
    productId: '7412', productCommunity: '4', x: 1567.9110107421875, y: 2768.5078125, nodeSize: 15.477294921875, productName: 'Pipe & tube fittings, of refined copper', nodeColor: '#299fff',
  },
  {
    productId: '8516', productCommunity: '4', x: 1531.9508056640625, y: 2749.484130859375, nodeSize: 20.391845703125, productName: 'Electric instant, storage and immersion water heaters', nodeColor: '#299fff',
  },
  {
    productId: '8201', productCommunity: '99', x: 2535.0284423828125, y: 2163.14599609375, nodeSize: 15.048583984375, productName: 'Spades and shovels', nodeColor: '#9c9a87',
  },
  {
    productId: '8204', productCommunity: '4', x: 1577.3785400390625, y: 2652.6287841796875, nodeSize: 15.2021484375, productName: 'Wrenches, hand-operated, with non-adjustable jaws', nodeColor: '#299fff',
  },
  {
    productId: '8448', productCommunity: '4', x: 1647.4559326171875, y: 2696.2119140625, nodeSize: 15.548095703125, productName: 'Dobbies, Jacquards, etc for spinning machines & looms', nodeColor: '#299fff',
  },
  {
    productId: '8535', productCommunity: '4', x: 2045.8554077148438, y: 2306.16552734375, nodeSize: 16.2276611328125, productName: 'Electrical fuses, for voltage > 1kV', nodeColor: '#299fff',
  },
  {
    productId: '7228', productCommunity: '4', x: 2211.033935546875, y: 2116.9322509765625, nodeSize: 17.25390625, productName: 'Bar/rod of high speed steel not in coils', nodeColor: '#299fff',
  },
  {
    productId: '7223', productCommunity: '4', x: 1620.1541748046875, y: 2674.262939453125, nodeSize: 15.184814453125, productName: 'Wire of stainless steel', nodeColor: '#299fff',
  },
  {
    productId: '8711', productCommunity: '3', x: 1359.363525390625, y: 2857.579345703125, nodeSize: 18.18408203125, productName: 'Motorcycles, spark ignition engine of < 50 cc', nodeColor: '#0576a6',
  },
  {
    productId: '7317', productCommunity: '99', x: 2525.597900390625, y: 2075.554443359375, nodeSize: 15.28759765625, productName: 'Nails/staples/etc, iron/steel, not office stationary', nodeColor: '#9c9a87',
  },
  {
    productId: '2604', productCommunity: '20', x: 1071.3983154296875, y: 2390.459716796875, nodeSize: 15.336181640625, productName: 'Nickel ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '7501', productCommunity: '20', x: 1038.8062744140625, y: 2371.1943359375, nodeSize: 16.22216796875, productName: 'Nickel mattes', nodeColor: '#330000',
  },
  {
    productId: '2616', productCommunity: '20', x: 2310.624267578125, y: 1758.4228515625, nodeSize: 15.33447265625, productName: 'Silver ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '7403', productCommunity: '20', x: 2213.8367919921875, y: 1803.8626708984375, nodeSize: 23.750244140625, productName: 'Copper cathodes and sections of cathodes unwrought', nodeColor: '#330000',
  },
  {
    productId: '2606', productCommunity: '20', x: 1782.1796875, y: 2831.419677734375, nodeSize: 15.29345703125, productName: 'Aluminium ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '2818', productCommunity: '20', x: 1748.7261962890625, y: 2760.135009765625, nodeSize: 17.997802734375, productName: 'Artificial corundum', nodeColor: '#330000',
  },
  {
    productId: '7502', productCommunity: '20', x: 1112.4569091796875, y: 2426.57177734375, nodeSize: 17.73486328125, productName: 'Nickel unwrought, not alloyed', nodeColor: '#330000',
  },
  {
    productId: '2605', productCommunity: '20', x: 1048.689208984375, y: 2483.48486328125, nodeSize: 15.060302734375, productName: 'Cobalt ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '3918', productCommunity: '99', x: 1411.9820556640625, y: 2162.746826171875, nodeSize: 15.4951171875, productName: 'Floor, wall, ceiling cover, roll, tile, vinyl chlorid', nodeColor: '#9c9a87',
  },
  {
    productId: '3904', productCommunity: '4', x: 1669.08837890625, y: 2085.2021484375, nodeSize: 17.50830078125, productName: 'Polyvinyl chloride in primary forms', nodeColor: '#299fff',
  },
  {
    productId: '2608', productCommunity: '20', x: 2512.2198486328125, y: 2910.4388427734375, nodeSize: 15.820068359375, productName: 'Zinc ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '2610', productCommunity: '20', x: 1465.0775146484375, y: 2100.6048583984375, nodeSize: 15.317626953125, productName: 'Chromium ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '7005', productCommunity: '4', x: 2168.078125, y: 2173.78955078125, nodeSize: 15.84375, productName: 'Float glass etc sheets, absorbent or reflecting layer', nodeColor: '#299fff',
  },
  {
    productId: '5902', productCommunity: '4', x: 2147.79248046875, y: 2163.4609375, nodeSize: 15.2861328125, productName: 'Tyre cord fabric of nylon, polyamides', nodeColor: '#299fff',
  },
  {
    productId: '8212', productCommunity: '2', x: 1416.7730712890625, y: 2125.580078125, nodeSize: 15.453125, productName: 'Razors including safety razors, open blade razors', nodeColor: '#9c219c',
  },
  {
    productId: '6309', productCommunity: '99', x: 2160.486083984375, y: 2611.50830078125, nodeSize: 15.2216796875, productName: 'Worn clothing and other worn articles', nodeColor: '#9c9a87',
  },
  {
    productId: '1701', productCommunity: '10', x: 2495.4864501953125, y: 2192.3076171875, nodeSize: 17.949462890625, productName: 'Raw sugar, cane', nodeColor: '#d1ff00',
  },
  {
    productId: '1702', productCommunity: '10', x: 1827.024169921875, y: 2707.446533203125, nodeSize: 15.633544921875, productName: 'Lactose and lactose syrup', nodeColor: '#d1ff00',
  },
  {
    productId: '9303', productCommunity: '4', x: 1475.823974609375, y: 2485.320068359375, nodeSize: 15.011474609375, productName: 'Muzzle-loading firearms', nodeColor: '#299fff',
  },
  {
    productId: '2933', productCommunity: '2', x: 1217.769775390625, y: 2041.298583984375, nodeSize: 23.9208984375, productName: 'Phenazone (antipyrin), derivatives', nodeColor: '#9c219c',
  },
  {
    productId: '8202', productCommunity: '4', x: 1505.6654052734375, y: 2493.67333984375, nodeSize: 15.384765625, productName: 'Hand saws', nodeColor: '#299fff',
  },
  {
    productId: '8416', productCommunity: '4', x: 1514.280029296875, y: 2317.41748046875, nodeSize: 15.28857421875, productName: 'Furnace burners for liquid fuel', nodeColor: '#299fff',
  },
  {
    productId: '2921', productCommunity: '2', x: 1194.0570678710938, y: 2081.880859375, nodeSize: 16.5843505859375, productName: 'Methylamine, di- or trimethylamine, salts', nodeColor: '#9c219c',
  },
  {
    productId: '5603', productCommunity: '5', x: 1947.1340942382812, y: 2449.057861328125, nodeSize: 16.4886474609375, productName: 'Nonwovens textiles except felt', nodeColor: '#730049',
  },
  {
    productId: '2920', productCommunity: '2', x: 1241.3131103515625, y: 2073.4464111328125, nodeSize: 15.039794921875, productName: 'Thiophosphoric esters(phosphorothioates),salts,derivs', nodeColor: '#9c219c',
  },
  {
    productId: '2925', productCommunity: '2', x: 1241.2255859375, y: 2096.57470703125, nodeSize: 15.03466796875, productName: 'Saccharin, salts', nodeColor: '#9c219c',
  },
  {
    productId: '2935', productCommunity: '2', x: 1220.30078125, y: 2086.9124755859375, nodeSize: 15.460205078125, productName: 'Sulphonamides in bulk', nodeColor: '#9c219c',
  },
  {
    productId: '2936', productCommunity: '2', x: 1284.972900390625, y: 2188.08935546875, nodeSize: 16.00244140625, productName: 'Provitamins, unmixed', nodeColor: '#9c219c',
  },
  {
    productId: '2912', productCommunity: '2', x: 1259.628173828125, y: 2109.047607421875, nodeSize: 15.149658203125, productName: 'Methanal (formaldehyde)', nodeColor: '#9c219c',
  },
  {
    productId: '9025', productCommunity: '4', x: 1534.840576171875, y: 2243.295166015625, nodeSize: 15.393310546875, productName: 'Thermometers, liquid-filled', nodeColor: '#299fff',
  },
  {
    productId: '8203', productCommunity: '4', x: 1873.474365234375, y: 2638.526611328125, nodeSize: 15.134033203125, productName: 'Files, rasps and similar tools', nodeColor: '#299fff',
  },
  {
    productId: '8104', productCommunity: '20', x: 1654.555419921875, y: 2900.2498779296875, nodeSize: 15.2587890625, productName: 'Magnesium unwrought > 99.8% pure', nodeColor: '#330000',
  },
  {
    productId: '8102', productCommunity: '99', x: 1612.8240966796875, y: 2913.057861328125, nodeSize: 15.13134765625, productName: 'Molybdenum, powder', nodeColor: '#9c9a87',
  },
  {
    productId: '8303', productCommunity: '4', x: 1805.0535278320312, y: 2695.587646484375, nodeSize: 15.0037841796875, productName: 'Safes/strong-boxes etc, of base metal', nodeColor: '#299fff',
  },
  {
    productId: '8715', productCommunity: '99', x: 2810.6751708984375, y: 2739.058349609375, nodeSize: 15.148681640625, productName: 'Baby carriages and parts thereof', nodeColor: '#9c9a87',
  },
  {
    productId: '5208', productCommunity: '8', x: 2711.7891845703125, y: 2588.630126953125, nodeSize: 16.898681640625, productName: 'Plain weave cotton, >85% <100 g/m2, unbleached', nodeColor: '#33cc00',
  },
  {
    productId: '8209', productCommunity: '4', x: 1472.0946044921875, y: 2164.14794921875, nodeSize: 15.79345703125, productName: 'Tool plates/tips/etc, sintered metal carbide & cermet', nodeColor: '#299fff',
  },
  {
    productId: '9612', productCommunity: '1', x: 1248.066162109375, y: 2455.52783203125, nodeSize: 15.11767578125, productName: 'Typewriter or similar ribbons', nodeColor: '#99ffff',
  },
  {
    productId: '8510', productCommunity: '4', x: 1701.633544921875, y: 2051.2825927734375, nodeSize: 15.332763671875, productName: 'Shavers, with self-contained electric motor', nodeColor: '#299fff',
  },
  {
    productId: '8305', productCommunity: '4', x: 1699.3553466796875, y: 2145.039794921875, nodeSize: 15.009765625, productName: 'Office binder/file fittings, of base metal', nodeColor: '#299fff',
  },
  {
    productId: '7615', productCommunity: '8', x: 2598.3304443359375, y: 2548.169677734375, nodeSize: 15.369873046875, productName: 'Aluminium table/kitchen/household articles, scourers', nodeColor: '#33cc00',
  },
  {
    productId: '5503', productCommunity: '4', x: 2184.1077880859375, y: 2125.765869140625, nodeSize: 15.852294921875, productName: 'Staple fibres of nylon, polyamides, not carded, combe', nodeColor: '#299fff',
  },
  {
    productId: '0805', productCommunity: '10', x: 2550.5111083984375, y: 2913.752197265625, nodeSize: 16.502197265625, productName: 'Oranges, fresh or dried', nodeColor: '#d1ff00',
  },
  {
    productId: '9026', productCommunity: '4', x: 1427.739990234375, y: 2347.103515625, nodeSize: 17.1982421875, productName: 'Equipment to measure or check liquid flow or level', nodeColor: '#299fff',
  },
  {
    productId: '0302', productCommunity: '10', x: 2106.2303466796875, y: 2843.02587890625, nodeSize: 16.506591796875, productName: 'Trout, fresh or chilled, whole', nodeColor: '#d1ff00',
  },
  {
    productId: '2916', productCommunity: '2', x: 1204.5999755859375, y: 2318.647216796875, nodeSize: 16.1044921875, productName: 'Acrylic acid, salts', nodeColor: '#9c219c',
  },
  {
    productId: '2505', productCommunity: '20', x: 2687.804931640625, y: 2745.95263671875, nodeSize: 15.12744140625, productName: 'Silica sands and quartz sands', nodeColor: '#330000',
  },
  {
    productId: '0706', productCommunity: '10', x: 2668.2557373046875, y: 2827.03955078125, nodeSize: 15.051513671875, productName: 'Carrots and turnips, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0707', productCommunity: '10', x: 2618.5667724609375, y: 2901.890625, nodeSize: 15.127197265625, productName: 'Cucumbers and gherkins, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0602', productCommunity: '10', x: 2653.636962890625, y: 2900.631591796875, nodeSize: 15.96435546875, productName: 'Cuttings and slips, not rooted', nodeColor: '#d1ff00',
  },
  {
    productId: '0603', productCommunity: '10', x: 2901.4996337890625, y: 2107.953369140625, nodeSize: 16.002685546875, productName: 'Cut flowers and flower buds for bouquets, etc., fresh', nodeColor: '#d1ff00',
  },
  {
    productId: '0409', productCommunity: '10', x: 2585.0867919921875, y: 2111.0557861328125, nodeSize: 15.031005859375, productName: 'Honey, natural', nodeColor: '#d1ff00',
  },
  {
    productId: '0601', productCommunity: '10', x: 2059.967041015625, y: 2840.50927734375, nodeSize: 15.07421875, productName: 'Bulbs, tubers, corms, crowns and rhizomes, dormant', nodeColor: '#d1ff00',
  },
  {
    productId: '2515', productCommunity: '20', x: 2468.3037109375, y: 2869.84814453125, nodeSize: 15.125, productName: 'Marble and travertine, crude or roughly trimmed', nodeColor: '#330000',
  },
  {
    productId: '5705', productCommunity: '99', x: 2430.3343505859375, y: 2922.87548828125, nodeSize: 15.006103515625, productName: 'Carpets and textile floor coverings, nes', nodeColor: '#9c9a87',
  },
  {
    productId: '1511', productCommunity: '10', x: 2884.4332275390625, y: 2173.9041748046875, nodeSize: 19.248779296875, productName: 'Palm oil, crude', nodeColor: '#d1ff00',
  },
  {
    productId: '0701', productCommunity: '10', x: 2448.7960205078125, y: 2898.685791015625, nodeSize: 15.400634765625, productName: 'Potatoes seed, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '1604', productCommunity: '10', x: 2182.6571044921875, y: 2822.854736328125, nodeSize: 16.876708984375, productName: 'Salmon prepared or preserved, not minced', nodeColor: '#d1ff00',
  },
  {
    productId: '0307', productCommunity: '10', x: 2140.4056396484375, y: 2862.322021484375, nodeSize: 16.112060546875, productName: 'Oysters', nodeColor: '#d1ff00',
  },
  {
    productId: '1601', productCommunity: '5', x: 2221.880615234375, y: 2421.59423828125, nodeSize: 15.39306640625, productName: 'Sausages, similar products of meat, meat offal & bloo', nodeColor: '#730049',
  },
  {
    productId: '5608', productCommunity: '10', x: 2174.9805908203125, y: 2853.777587890625, nodeSize: 15.008056640625, productName: 'Made up fishing nets, of manmade textile materials', nodeColor: '#d1ff00',
  },
  {
    productId: '2103', productCommunity: '5', x: 2228.990966796875, y: 2458.926513671875, nodeSize: 16.07666015625, productName: 'Soya sauce', nodeColor: '#730049',
  },
  {
    productId: '1602', productCommunity: '5', x: 2268.473876953125, y: 2494.555908203125, nodeSize: 16.76025390625, productName: 'Homogenized preparations of meat and meat offal', nodeColor: '#730049',
  },
  {
    productId: '2309', productCommunity: '5', x: 2244.132080078125, y: 2514.90185546875, nodeSize: 17.62109375, productName: 'Dog or cat food (retail)', nodeColor: '#730049',
  },
  {
    productId: '2105', productCommunity: '5', x: 2276.352783203125, y: 2466.430419921875, nodeSize: 15.29150390625, productName: 'Ice cream and other edible ice', nodeColor: '#730049',
  },
  {
    productId: '3208', productCommunity: '5', x: 2083.9539794921875, y: 2483.3642578125, nodeSize: 16.799560546875, productName: 'Polyester based paints, varnishes, non-aqueous medium', nodeColor: '#730049',
  },
  {
    productId: '2716', productCommunity: '99', x: 2309.4471435546875, y: 2553.49462890625, nodeSize: 21.436767578125, productName: 'Electrical energy', nodeColor: '#9c9a87',
  },
  {
    productId: '1515', productCommunity: '10', x: 2664.7955322265625, y: 2688.954833984375, nodeSize: 15.445068359375, productName: 'Linseed oil, crude', nodeColor: '#d1ff00',
  },
  {
    productId: '9031', productCommunity: '1', x: 1342.76513671875, y: 2456.540771484375, nodeSize: 19.13818359375, productName: 'Machines for balancing mechanical parts, nes', nodeColor: '#99ffff',
  },
  {
    productId: '3206', productCommunity: '4', x: 1476.7069091796875, y: 2245.410400390625, nodeSize: 16.400146484375, productName: 'Pigments and preparations based on titanium dioxide', nodeColor: '#299fff',
  },
  {
    productId: '4805', productCommunity: '6', x: 2193.4400634765625, y: 2422.6484375, nodeSize: 16.294677734375, productName: 'Paper, fluting, in rolls, semi-chemical, uncoated', nodeColor: '#ff0000',
  },
  {
    productId: '4401', productCommunity: '6', x: 2234.411376953125, y: 2332.173095703125, nodeSize: 15.6669921875, productName: 'Fuel wood', nodeColor: '#ff0000',
  },
  {
    productId: '4408', productCommunity: '20', x: 2271.22314453125, y: 2227.7144775390625, nodeSize: 15.41259765625, productName: 'Veneer or ply sheet, coniferous (softwood) <6 mm thic', nodeColor: '#330000',
  },
  {
    productId: '4403', productCommunity: '20', x: 2292.5804443359375, y: 2191.4581298828125, nodeSize: 17.099365234375, productName: 'Poles, treated or painted with preservatives', nodeColor: '#330000',
  },
  {
    productId: '8607', productCommunity: '4', x: 1895.4003295898438, y: 2535.391845703125, nodeSize: 16.5970458984375, productName: 'Railway & tramway driving bogies  & bissel-bogies', nodeColor: '#299fff',
  },
  {
    productId: '8530', productCommunity: '4', x: 1878.888427734375, y: 2418.219482421875, nodeSize: 15.22216796875, productName: 'Electric signal, safety & traffic controls, railway', nodeColor: '#299fff',
  },
  {
    productId: '7222', productCommunity: '4', x: 1561.1343994140625, y: 2538.217041015625, nodeSize: 15.998779296875, productName: 'Stainless steel bar nfw than hot rolled/drawn/extrude', nodeColor: '#299fff',
  },
  {
    productId: '7225', productCommunity: '4', x: 1501.0987548828125, y: 2367.191650390625, nodeSize: 18.745849609375, productName: 'Flat rolled silicon-electrical steel, width >600mm', nodeColor: '#299fff',
  },
  {
    productId: '7219', productCommunity: '4', x: 1428.1402587890625, y: 2188.847900390625, nodeSize: 20.0, productName: 'Hot rolled stainless steel coil, w >600mm, t >10mm', nodeColor: '#299fff',
  },
  {
    productId: '7221', productCommunity: '4', x: 1430.893310546875, y: 2576.3831787109375, nodeSize: 15.22509765625, productName: 'Bar or rod, stainless steel, hot rolled, coiled', nodeColor: '#299fff',
  },
  {
    productId: '7204', productCommunity: '20', x: 2422.0889892578125, y: 2277.2747802734375, nodeSize: 23.237548828125, productName: 'Waste or scrap, of cast iron', nodeColor: '#330000',
  },
  {
    productId: '7216', productCommunity: '4', x: 2203.9119873046875, y: 2246.86962890625, nodeSize: 18.578369140625, productName: 'Sections, U/I/H, iron or non-alloy steel, nfw than hot formed <80mm', nodeColor: '#299fff',
  },
  {
    productId: '8450', productCommunity: '4', x: 1556.6336669921875, y: 2603.56396484375, nodeSize: 16.99462890625, productName: 'Automatic washing machines, of a dry capacity < 10 kg', nodeColor: '#299fff',
  },
  {
    productId: '7013', productCommunity: '4', x: 2088.84912109375, y: 2138.812255859375, nodeSize: 16.072265625, productName: 'Glass-ceramic ware for table kitchen, etc', nodeColor: '#299fff',
  },
  {
    productId: '8465', productCommunity: '4', x: 1888.5636596679688, y: 2352.548583984375, nodeSize: 16.2091064453125, productName: 'Multi-purpose machines for wood etc work', nodeColor: '#299fff',
  },
  {
    productId: '8409', productCommunity: '4', x: 1693.413330078125, y: 2412.24609375, nodeSize: 24.2998046875, productName: 'Parts for spark-ignition aircraft engines', nodeColor: '#299fff',
  },
  {
    productId: '2101', productCommunity: '6', x: 2378.2386474609375, y: 2257.578125, nodeSize: 15.766357421875, productName: 'Coffee extracts, essences, concentrates, preparations', nodeColor: '#ff0000',
  },
  {
    productId: '2201', productCommunity: '5', x: 2090.7001953125, y: 2557.778076171875, nodeSize: 15.34375, productName: 'Mineral and aerated waters not sweetened or flavoured', nodeColor: '#730049',
  },
  {
    productId: '2003', productCommunity: '2', x: 1053.6934814453125, y: 2231.677734375, nodeSize: 15.030029296875, productName: 'Mushrooms, prepared or preserved, not in vinegar', nodeColor: '#9c219c',
  },
  {
    productId: '2401', productCommunity: '7', x: 2545.725341796875, y: 2560.859375, nodeSize: 16.46337890625, productName: 'Tobacco, unmanufactured, not stemmed or stripped', nodeColor: '#bf8845',
  },
  {
    productId: '3924', productCommunity: '99', x: 2832.049560546875, y: 2425.3193359375, nodeSize: 16.63525390625, productName: 'Plastic table and kitchen ware', nodeColor: '#9c9a87',
  },
  {
    productId: '6802', productCommunity: '20', x: 2487.764892578125, y: 2823.798095703125, nodeSize: 16.4208984375, productName: 'Stone mosaic tiles, artificial coloured chips etc', nodeColor: '#330000',
  },
  {
    productId: '1804', productCommunity: '10', x: 2813.5733642578125, y: 2203.056396484375, nodeSize: 15.529541015625, productName: 'Cocoa butter, fat, oil', nodeColor: '#d1ff00',
  },
  {
    productId: '1902', productCommunity: '99', x: 2884.408935546875, y: 2396.337158203125, nodeSize: 15.91552734375, productName: 'Uncooked egg pasta not stuffed or prepared', nodeColor: '#9c9a87',
  },
  {
    productId: '2907', productCommunity: '2', x: 1260.9442138671875, y: 2194.68701171875, nodeSize: 16.03564453125, productName: 'Phenol (hdroxybenzene), salts', nodeColor: '#9c219c',
  },
  {
    productId: '3701', productCommunity: '2', x: 1201.78759765625, y: 2205.191162109375, nodeSize: 15.785400390625, productName: 'X-ray plates and films', nodeColor: '#9c219c',
  },
  {
    productId: '7220', productCommunity: '4', x: 1409.9498291015625, y: 2218.4716796875, nodeSize: 15.728515625, productName: 'Hot rolled stainless steel sheet, w <600mm, t >4.75 m', nodeColor: '#299fff',
  },
  {
    productId: '3906', productCommunity: '2', x: 1252.21533203125, y: 2163.691162109375, nodeSize: 16.649658203125, productName: 'Polymethyl methacrylate, in primary forms', nodeColor: '#9c219c',
  },
  {
    productId: '3707', productCommunity: '2', x: 1179.7425537109375, y: 2147.022705078125, nodeSize: 15.774169921875, productName: 'Sensitising emulsions', nodeColor: '#9c219c',
  },
  {
    productId: '2903', productCommunity: '2', x: 1202.4136352539062, y: 2133.2445068359375, nodeSize: 16.2398681640625, productName: 'Chloromethane and chloroethane', nodeColor: '#9c219c',
  },
  {
    productId: '2203', productCommunity: '5', x: 1970.2487182617188, y: 2639.4169921875, nodeSize: 16.5494384765625, productName: 'Beer made from malt', nodeColor: '#730049',
  },
  {
    productId: '2207', productCommunity: '5', x: 1936.7354736328125, y: 2579.537353515625, nodeSize: 15.94287109375, productName: 'Undenatured ethyl alcohol > 80% by volume', nodeColor: '#730049',
  },
  {
    productId: '7507', productCommunity: '4', x: 1372.020263671875, y: 2296.2398681640625, nodeSize: 15.005615234375, productName: 'Tubes and pipe, nickel, not alloyed', nodeColor: '#299fff',
  },
  {
    productId: '8108', productCommunity: '20', x: 1252.0589599609375, y: 2299.84228515625, nodeSize: 15.681396484375, productName: 'Titanium, unwrought, waste or scrap, powders', nodeColor: '#330000',
  },
  {
    productId: '9024', productCommunity: '4', x: 1472.4964599609375, y: 2289.0048828125, nodeSize: 15.185302734375, productName: 'Machines for testing mechanical properties of metals', nodeColor: '#299fff',
  },
  {
    productId: '3911', productCommunity: '2', x: 1212.985595703125, y: 2172.0882568359375, nodeSize: 15.64990234375, productName: 'Petroleum resins, coumarone, indene, polyterpenes', nodeColor: '#9c219c',
  },
  {
    productId: '8427', productCommunity: '4', x: 1371.2890625, y: 2226.794189453125, nodeSize: 17.332763671875, productName: 'Self-propelled works trucks, electric motor', nodeColor: '#299fff',
  },
  {
    productId: '8524', productCommunity: '2', x: 1395.154541015625, y: 2254.589111328125, nodeSize: 19.267578125, productName: 'Recorded gramophone records', nodeColor: '#9c219c',
  },
  {
    productId: '7002', productCommunity: '2', x: 1214.0670166015625, y: 2230.453369140625, nodeSize: 15.0810546875, productName: 'Glass balls except microspheres < 1mm diameter', nodeColor: '#9c219c',
  },
  {
    productId: '7506', productCommunity: '2', x: 1268.4544677734375, y: 2250.611572265625, nodeSize: 15.105712890625, productName: 'Plates, sheet, strip and foil, nickel, not alloyed', nodeColor: '#9c219c',
  },
  {
    productId: '5502', productCommunity: '2', x: 1182.667724609375, y: 2260.125732421875, nodeSize: 15.188720703125, productName: 'Artificial filament tow', nodeColor: '#9c219c',
  },
  {
    productId: '3910', productCommunity: '2', x: 1228.6258544921875, y: 2199.56396484375, nodeSize: 15.77001953125, productName: 'Silicones in primary forms', nodeColor: '#9c219c',
  },
  {
    productId: '0105', productCommunity: '10', x: 2217.3897705078125, y: 2603.901611328125, nodeSize: 15.164794921875, productName: 'Fowls, live domestic < 185 grams', nodeColor: '#d1ff00',
  },
  {
    productId: '1209', productCommunity: '7', x: 2515.213134765625, y: 2648.6046142578125, nodeSize: 15.6474609375, productName: 'Seed, sugar beet, for sowing', nodeColor: '#bf8845',
  },
  {
    productId: '3922', productCommunity: '6', x: 2079.51953125, y: 2392.3017578125, nodeSize: 15.42919921875, productName: 'Baths, shower-baths and wash basins, of plastics', nodeColor: '#ff0000',
  },
  {
    productId: '8506', productCommunity: '2', x: 1122.6209716796875, y: 2216.281494140625, nodeSize: 15.908447265625, productName: 'Manganese dioxide primary cell/battery volume < 300 c', nodeColor: '#9c219c',
  },
  {
    productId: '4014', productCommunity: '2', x: 1357.8856201171875, y: 2383.370361328125, nodeSize: 15.02587890625, productName: 'Sheath contraceptives', nodeColor: '#9c219c',
  },
  {
    productId: '3204', productCommunity: '2', x: 1126.1904296875, y: 2237.9990234375, nodeSize: 16.79052734375, productName: 'Disperse dyes and preparations based thereon', nodeColor: '#9c219c',
  },
  {
    productId: '7303', productCommunity: '99', x: 2438.1358642578125, y: 2863.498291015625, nodeSize: 15.222900390625, productName: 'Tubes, pipes and hollow profiles, of cast iron', nodeColor: '#9c9a87',
  },
  {
    productId: '7117', productCommunity: '2', x: 1186.6302490234375, y: 2433.90380859375, nodeSize: 15.678955078125, productName: 'Cuff-links and studs of base metal, plated or not', nodeColor: '#9c219c',
  },
  {
    productId: '2922', productCommunity: '2', x: 1196.71044921875, y: 1981.1673583984375, nodeSize: 17.177978515625, productName: 'Monoethanolmine, salts', nodeColor: '#9c219c',
  },
  {
    productId: '2917', productCommunity: '2', x: 1129.8458251953125, y: 2190.29443359375, nodeSize: 17.62109375, productName: 'Oxalic acid, its salts & esters', nodeColor: '#9c219c',
  },
  {
    productId: '3812', productCommunity: '2', x: 1203.7107543945312, y: 2446.937744140625, nodeSize: 15.4906005859375, productName: 'Prepared rubber accelerators', nodeColor: '#9c219c',
  },
  {
    productId: '9105', productCommunity: '3', x: 1416.5218505859375, y: 2722.7861328125, nodeSize: 15.02294921875, productName: 'Alarm clocks, battery or mains powered', nodeColor: '#0576a6',
  },
  {
    productId: '6601', productCommunity: '99', x: 1436.0234375, y: 2759.843994140625, nodeSize: 15.172119140625, productName: 'Garden and similar umbrellas', nodeColor: '#9c9a87',
  },
  {
    productId: '7020', productCommunity: '1', x: 1361.991455078125, y: 2699.45166015625, nodeSize: 15.244140625, productName: 'Articles of glass, nes', nodeColor: '#99ffff',
  },
  {
    productId: '6506', productCommunity: '1', x: 1358.80712890625, y: 2729.682373046875, nodeSize: 15.201904296875, productName: 'Safety headgear', nodeColor: '#99ffff',
  },
  {
    productId: '6801', productCommunity: '20', x: 2461.751708984375, y: 2846.3525390625, nodeSize: 15.09375, productName: 'Stone setts, curbstones, flagstones (except slate)', nodeColor: '#330000',
  },
  {
    productId: '9505', productCommunity: '9', x: 2807.610107421875, y: 2825.116455078125, nodeSize: 15.60009765625, productName: 'Articles for Christmas festivities', nodeColor: '#6e451e',
  },
  {
    productId: '6704', productCommunity: '9', x: 2821.97216796875, y: 2870.65380859375, nodeSize: 15.05126953125, productName: 'Complete wigs of synthetic textile materials', nodeColor: '#6e451e',
  },
  {
    productId: '6702', productCommunity: '9', x: 2859.936279296875, y: 2825.59521484375, nodeSize: 15.07861328125, productName: 'Artificial flowers foliage fruit, articles, plastic', nodeColor: '#6e451e',
  },
  {
    productId: '9706', productCommunity: '99', x: 2479.178466796875, y: 2766.1005859375, nodeSize: 15.294921875, productName: 'Antiques older than one hundred years', nodeColor: '#9c9a87',
  },
  {
    productId: '3920', productCommunity: '5', x: 2028.8903198242188, y: 2445.904296875, nodeSize: 21.8472900390625, productName: 'Sheet/film not cellular/reinf polymers of ethylene', nodeColor: '#730049',
  },
  {
    productId: '1107', productCommunity: '10', x: 1959.5638427734375, y: 2614.461181640625, nodeSize: 15.509521484375, productName: 'Malt, not roasted', nodeColor: '#d1ff00',
  },
  {
    productId: '5607', productCommunity: '6', x: 2369.7406005859375, y: 2209.512939453125, nodeSize: 15.131103515625, productName: 'Twine, cordage, ropes and cables, of jute, bast fibre', nodeColor: '#ff0000',
  },
  {
    productId: '5701', productCommunity: '9', x: 1966.8853759765625, y: 1869.1754150390625, nodeSize: 15.08154296875, productName: 'Carpets of wool or fine animal hair, knotted', nodeColor: '#6e451e',
  },
  {
    productId: '8604', productCommunity: '4', x: 1568.9718017578125, y: 2896.078125, nodeSize: 15.000244140625, productName: 'Railway maintenance-of-way service vehicles', nodeColor: '#299fff',
  },
  {
    productId: '8215', productCommunity: '8', x: 2768.48681640625, y: 2745.20849609375, nodeSize: 15.18017578125, productName: 'Cutlery sets plated with precious metal', nodeColor: '#33cc00',
  },
  {
    productId: '8405', productCommunity: '4', x: 1652.576171875, y: 2200.126220703125, nodeSize: 15.032958984375, productName: 'Producer, water and acetylene gas generators', nodeColor: '#299fff',
  },
  {
    productId: '8404', productCommunity: '4', x: 1948.4456787109375, y: 2197.966552734375, nodeSize: 15.208251953125, productName: 'Auxiliary plant for steam/vapour generating boilers', nodeColor: '#299fff',
  },
  {
    productId: '8463', productCommunity: '4', x: 1811.9415283203125, y: 2198.050048828125, nodeSize: 15.210205078125, productName: 'Draw-benches for bars, tubes, profiles wire etc', nodeColor: '#299fff',
  },
  {
    productId: '6102', productCommunity: '8', x: 2559.6251220703125, y: 2446.558837890625, nodeSize: 15.237060546875, productName: 'Womens, girls overcoats, etc, of wool or hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '5509', productCommunity: '8', x: 2581.0867919921875, y: 2466.871826171875, nodeSize: 15.599853515625, productName: 'Yarn >85% nylon, etc staple fibres, single, not retai', nodeColor: '#33cc00',
  },
  {
    productId: '5309', productCommunity: '4', x: 1783.5576782226562, y: 2173.46875, nodeSize: 15.0255126953125, productName: 'Woven fabric, >85% flax, unbleached or bleached', nodeColor: '#299fff',
  },
  {
    productId: '5903', productCommunity: '4', x: 1718.58740234375, y: 2209.016357421875, nodeSize: 16.084716796875, productName: 'Fabric impregnated, coated, covered with pvc plastic', nodeColor: '#299fff',
  },
  {
    productId: '5401', productCommunity: '8', x: 2718.9466552734375, y: 2459.605224609375, nodeSize: 15.020751953125, productName: 'Sewing thread of synthetic filaments', nodeColor: '#33cc00',
  },
  {
    productId: '5806', productCommunity: '8', x: 2759.1749267578125, y: 2430.1181640625, nodeSize: 15.295166015625, productName: 'Woven pile fabric and narrow chenille fabric', nodeColor: '#33cc00',
  },
  {
    productId: '5211', productCommunity: '8', x: 2705.873779296875, y: 2517.66845703125, nodeSize: 15.15283203125, productName: 'Plain weave cotton, <85% +manmade fibre, >200g/m2 unb', nodeColor: '#33cc00',
  },
  {
    productId: '5513', productCommunity: '8', x: 2692.542724609375, y: 2568.5753173828125, nodeSize: 15.2939453125, productName: 'Woven plain >85% polyester+cotton, <170g/m2 unbl/blch', nodeColor: '#33cc00',
  },
  {
    productId: '5514', productCommunity: '8', x: 2666.4385986328125, y: 2563.6337890625, nodeSize: 15.101318359375, productName: 'Woven plain >85% polyester+cotton, >170g/m2 unbl/blch', nodeColor: '#33cc00',
  },
  {
    productId: '5807', productCommunity: '8', x: 2744.006103515625, y: 2503.04443359375, nodeSize: 15.01416015625, productName: 'Label, badge, etc, of woven textile not embroidered', nodeColor: '#33cc00',
  },
  {
    productId: '8441', productCommunity: '4', x: 1532.0166015625, y: 2306.722900390625, nodeSize: 15.772216796875, productName: 'Cutting machines for paper pulp, paper or paperboard', nodeColor: '#299fff',
  },
  {
    productId: '8308', productCommunity: '4', x: 1664.266845703125, y: 2393.85888671875, nodeSize: 15.22998046875, productName: 'Hooks, eyes, eyelets, for clothing, footwear, bags et', nodeColor: '#299fff',
  },
  {
    productId: '7211', productCommunity: '4', x: 1840.129150390625, y: 2523.73095703125, nodeSize: 15.888427734375, productName: 'Hot box roll iron or non-alloy steel, flat, w 150-600mm, t >4mm, myp>35', nodeColor: '#299fff',
  },
  {
    productId: '6914', productCommunity: '20', x: 2490.350830078125, y: 2861.914306640625, nodeSize: 15.02880859375, productName: 'Articles of porcelain or china nes', nodeColor: '#330000',
  },
  {
    productId: '7304', productCommunity: '4', x: 1588.2493896484375, y: 2270.779541015625, nodeSize: 21.489501953125, productName: 'Pipes, line, iron or steel, for oil or gas pipelines', nodeColor: '#299fff',
  },
  {
    productId: '3914', productCommunity: '4', x: 1544.4246826171875, y: 2279.821044921875, nodeSize: 15.04296875, productName: 'Ion exchangers based on polymers in primary forms', nodeColor: '#299fff',
  },
  {
    productId: '3905', productCommunity: '2', x: 1126.6734619140625, y: 2261.6162109375, nodeSize: 15.61181640625, productName: 'Polyvinyl acetate, in aqueous dispersion, primary for', nodeColor: '#9c219c',
  },
  {
    productId: '8462', productCommunity: '4', x: 1797.559326171875, y: 2299.2734375, nodeSize: 16.647216796875, productName: 'Machine tools to forge, stamp, hammer or press metals', nodeColor: '#299fff',
  },
  {
    productId: '7322', productCommunity: '4', x: 1849.071533203125, y: 2436.767578125, nodeSize: 15.457763671875, productName: 'Radiators and parts thereof, cast iron', nodeColor: '#299fff',
  },
  {
    productId: '8503', productCommunity: '4', x: 1919.302734375, y: 2268.20654296875, nodeSize: 17.824951171875, productName: 'Parts for electric motors and generators', nodeColor: '#299fff',
  },
  {
    productId: '8483', productCommunity: '4', x: 1599.97705078125, y: 2298.97509765625, nodeSize: 22.047607421875, productName: 'Transmission shafts and cranks, cam and crank shafts', nodeColor: '#299fff',
  },
  {
    productId: '8708', productCommunity: '4', x: 1818.8953857421875, y: 2399.51416015625, nodeSize: 52.724609375, productName: 'Bumpers and parts thereof for motor vehicles', nodeColor: '#299fff',
  },
  {
    productId: '8547', productCommunity: '4', x: 1634.10400390625, y: 2267.388671875, nodeSize: 15.501708984375, productName: 'Electrical insulating fittings of ceramics', nodeColor: '#299fff',
  },
  {
    productId: '3006', productCommunity: '2', x: 1365.359619140625, y: 2269.8828125, nodeSize: 16.51708984375, productName: 'Suture materials, sterile surgical and dental goods', nodeColor: '#9c219c',
  },
  {
    productId: '3919', productCommunity: '2', x: 1389.7451782226562, y: 2200.654052734375, nodeSize: 17.0863037109375, productName: 'Self-adhesive plastic, rolls <20cm wide', nodeColor: '#9c219c',
  },
  {
    productId: '4817', productCommunity: '6', x: 2110.94482421875, y: 2430.992919921875, nodeSize: 15.03076171875, productName: 'Envelopes of paper', nodeColor: '#ff0000',
  },
  {
    productId: '9033', productCommunity: '4', x: 1708.0845947265625, y: 2255.146728515625, nodeSize: 15.196044921875, productName: 'Parts/accessories nes for optical/electric instrument', nodeColor: '#299fff',
  },
  {
    productId: '9028', productCommunity: '4', x: 2076.404052734375, y: 2248.49267578125, nodeSize: 15.60693359375, productName: 'Gas supply/production/calibration meters', nodeColor: '#299fff',
  },
  {
    productId: '8526', productCommunity: '1', x: 1274.10009765625, y: 2477.184814453125, nodeSize: 17.4873046875, productName: 'Radar apparatus', nodeColor: '#99ffff',
  },
  {
    productId: '8527', productCommunity: '1', x: 1229.9718017578125, y: 2767.954833984375, nodeSize: 17.77294921875, productName: 'Radio receivers, portable, with sound reproduce/recor', nodeColor: '#99ffff',
  },
  {
    productId: '9002', productCommunity: '1', x: 1196.1810302734375, y: 2693.47314453125, nodeSize: 16.2392578125, productName: 'Objective lenses for cameras, projectors, etc', nodeColor: '#99ffff',
  },
  {
    productId: '8472', productCommunity: '1', x: 1267.746337890625, y: 2666.89794921875, nodeSize: 15.779296875, productName: 'Office duplicating machines', nodeColor: '#99ffff',
  },
  {
    productId: '9001', productCommunity: '1', x: 1205.7611083984375, y: 2491.96435546875, nodeSize: 18.375, productName: 'Optical fibres, except for telecommunications', nodeColor: '#99ffff',
  },
  {
    productId: '8001', productCommunity: '99', x: 1170.482177734375, y: 1919.89892578125, nodeSize: 15.62451171875, productName: 'Tin not alloyed unwrought', nodeColor: '#9c9a87',
  },
  {
    productId: '8502', productCommunity: '4', x: 1655.4288330078125, y: 2244.897216796875, nodeSize: 19.06591796875, productName: 'Generating sets, diesel, output < 75 kVA', nodeColor: '#299fff',
  },
  {
    productId: '8482', productCommunity: '4', x: 1725.9432373046875, y: 2349.799560546875, nodeSize: 19.47021484375, productName: 'Bearings, ball', nodeColor: '#299fff',
  },
  {
    productId: '6207', productCommunity: '8', x: 2624.9573974609375, y: 2479.886474609375, nodeSize: 15.091552734375, productName: 'Mens, boys underpants or briefs, of cotton, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '2924', productCommunity: '2', x: 1137.24169921875, y: 1988.7410888671875, nodeSize: 15.9287109375, productName: 'Acyclic amides, derivatives, salts thereof', nodeColor: '#9c219c',
  },
  {
    productId: '0808', productCommunity: '10', x: 2584.488525390625, y: 2823.4947509765625, nodeSize: 16.1357421875, productName: 'Apples, fresh', nodeColor: '#d1ff00',
  },
  {
    productId: '0709', productCommunity: '7', x: 2452.1500244140625, y: 2479.33056640625, nodeSize: 16.354248046875, productName: 'Globe artichokes, fresh or chilled', nodeColor: '#bf8845',
  },
  {
    productId: '0703', productCommunity: '10', x: 2561.0665283203125, y: 2747.979248046875, nodeSize: 15.408447265625, productName: 'Onions and shallots, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0712', productCommunity: '10', x: 2590.022705078125, y: 2724.173828125, nodeSize: 15.14990234375, productName: 'Potatoes, dried, not further prepared', nodeColor: '#d1ff00',
  },
  {
    productId: '2008', productCommunity: '7', x: 2473.9259033203125, y: 2463.975341796875, nodeSize: 16.428955078125, productName: 'Ground-nuts otherwise prepared or preserved', nodeColor: '#bf8845',
  },
  {
    productId: '2202', productCommunity: '7', x: 2393.0560302734375, y: 2387.9993896484375, nodeSize: 16.956298828125, productName: 'Beverage waters, sweetened or flavoured', nodeColor: '#bf8845',
  },
  {
    productId: '1905', productCommunity: '7', x: 2404.132080078125, y: 2431.4794921875, nodeSize: 18.3271484375, productName: 'Crispbread', nodeColor: '#bf8845',
  },
  {
    productId: '2005', productCommunity: '7', x: 2462.6982421875, y: 2435.7359619140625, nodeSize: 16.125, productName: 'Homogenized vegetable preparations, not frozen/vinega', nodeColor: '#bf8845',
  },
  {
    productId: '8445', productCommunity: '4', x: 1650.5892333984375, y: 2789.59326171875, nodeSize: 15.4404296875, productName: 'Textile fibre carding machines', nodeColor: '#299fff',
  },
  {
    productId: '9006', productCommunity: '1', x: 1313.32763671875, y: 2588.55810546875, nodeSize: 15.46875, productName: 'Cameras for preparing printing plates or cylinders', nodeColor: '#99ffff',
  },
  {
    productId: '8456', productCommunity: '2', x: 1392.902099609375, y: 2439.781982421875, nodeSize: 15.60302734375, productName: 'Laser, light and photon beam process machine tools', nodeColor: '#9c219c',
  },
  {
    productId: '8457', productCommunity: '4', x: 1614.0859375, y: 2789.039306640625, nodeSize: 16.311279296875, productName: 'Machining centres, for working metal', nodeColor: '#299fff',
  },
  {
    productId: '8523', productCommunity: '1', x: 1248.7589111328125, y: 2557.518798828125, nodeSize: 19.11962890625, productName: 'Unrecorded magnetic tapes, width < 4 mm', nodeColor: '#99ffff',
  },
  {
    productId: '8471', productCommunity: '1', x: 1122.02392578125, y: 2607.70263671875, nodeSize: 52.763916015625, productName: 'Analogue or hybrid computers', nodeColor: '#99ffff',
  },
  {
    productId: '8543', productCommunity: '1', x: 1292.0062255859375, y: 2520.00146484375, nodeSize: 19.041748046875, productName: 'Particle accelerators', nodeColor: '#99ffff',
  },
  {
    productId: '8533', productCommunity: '1', x: 1273.117919921875, y: 2576.636474609375, nodeSize: 16.084228515625, productName: 'Electrical resistors, fixed carbon', nodeColor: '#99ffff',
  },
  {
    productId: '1212', productCommunity: '10', x: 2859.83251953125, y: 2707.277099609375, nodeSize: 15.0302734375, productName: 'Locust beans, locust seeds', nodeColor: '#d1ff00',
  },
  {
    productId: '5201', productCommunity: '8', x: 2842.6961669921875, y: 2599.175048828125, nodeSize: 16.643310546875, productName: 'Cotton, not carded or combed', nodeColor: '#33cc00',
  },
  {
    productId: '1201', productCommunity: '10', x: 1487.6422119140625, y: 2605.9365234375, nodeSize: 20.3798828125, productName: 'Soya beans', nodeColor: '#d1ff00',
  },
  {
    productId: '2304', productCommunity: '10', x: 1485.9752197265625, y: 2574.68310546875, nodeSize: 18.098876953125, productName: 'Soya-bean oil-cake and other solid residues', nodeColor: '#d1ff00',
  },
  {
    productId: '8517', productCommunity: '1', x: 1146.0948486328125, y: 2541.338623046875, nodeSize: 42.854736328125, productName: 'Telephone sets', nodeColor: '#99ffff',
  },
  {
    productId: '9108', productCommunity: '3', x: 1391.8265380859375, y: 2704.90283203125, nodeSize: 15.014892578125, productName: 'Assembled battery watch movement, mechanical display', nodeColor: '#0576a6',
  },
  {
    productId: '1103', productCommunity: '5', x: 2146.31201171875, y: 2602.41650390625, nodeSize: 15.0244140625, productName: 'Wheat meal', nodeColor: '#730049',
  },
  {
    productId: '1104', productCommunity: '7', x: 2411.4488525390625, y: 2536.294921875, nodeSize: 15.000244140625, productName: 'Barley, rolled or flaked grains', nodeColor: '#bf8845',
  },
  {
    productId: '7212', productCommunity: '4', x: 1797.8590087890625, y: 2571.10986328125, nodeSize: 15.57177734375, productName: 'Flat rolled iron or non-alloy steel, width <600mm, plated with tin', nodeColor: '#299fff',
  },
  {
    productId: '3818', productCommunity: '1', x: 1118.65576171875, y: 2737.10400390625, nodeSize: 17.006103515625, productName: 'Chemical element/compound wafers doped for electronic', nodeColor: '#99ffff',
  },
  {
    productId: '3811', productCommunity: '2', x: 1128.1133422851562, y: 2095.9735107421875, nodeSize: 16.4051513671875, productName: 'Anti-knock preparations based on lead compounds', nodeColor: '#9c219c',
  },
  {
    productId: '4814', productCommunity: '2', x: 1057.3359375, y: 2029.992431640625, nodeSize: 15.107177734375, productName: 'Wallpaper Ingrain', nodeColor: '#9c219c',
  },
  {
    productId: '3809', productCommunity: '4', x: 1850.4208374023438, y: 2625.03857421875, nodeSize: 15.4071044921875, productName: 'Finishing agents & dye carriers, amylaceous', nodeColor: '#299fff',
  },
  {
    productId: '3810', productCommunity: '4', x: 1706.0323486328125, y: 2085.4869384765625, nodeSize: 15.078857421875, productName: 'Metal pickling preps, solder and brazing flux, etc.', nodeColor: '#299fff',
  },
  {
    productId: '9005', productCommunity: '1', x: 1168.69091796875, y: 2793.224853515625, nodeSize: 15.0185546875, productName: 'Binoculars', nodeColor: '#99ffff',
  },
  {
    productId: '8101', productCommunity: '1', x: 1152.631591796875, y: 2820.112548828125, nodeSize: 15.002685546875, productName: 'Powders, tungsten (wolfram)', nodeColor: '#99ffff',
  },
  {
    productId: '7607', productCommunity: '4', x: 1915.472900390625, y: 2557.74462890625, nodeSize: 16.56103515625, productName: 'Foil, aluminium, not backed, rolled but nfw, < 0.2mm', nodeColor: '#299fff',
  },
  {
    productId: '8606', productCommunity: '4', x: 1891.4521484375, y: 2669.14111328125, nodeSize: 15.608154296875, productName: 'Railway tank cars', nodeColor: '#299fff',
  },
  {
    productId: '7601', productCommunity: '4', x: 1882.6795654296875, y: 2733.164794921875, nodeSize: 23.620361328125, productName: 'Aluminium unwrought, not alloyed', nodeColor: '#299fff',
  },
  {
    productId: '7413', productCommunity: '4', x: 1747.2005615234375, y: 2823.486083984375, nodeSize: 15.101318359375, productName: 'Stranded copper wire/cable/plaits/etc, uninsulated', nodeColor: '#299fff',
  },
  {
    productId: '8478', productCommunity: '4', x: 1573.65283203125, y: 2814.317626953125, nodeSize: 15.147705078125, productName: 'Machinery for preparing or making up tobacco', nodeColor: '#299fff',
  },
  {
    productId: '7409', productCommunity: '4', x: 1441.7500610351562, y: 2453.984130859375, nodeSize: 16.4871826171875, productName: 'Plate, sheet, strip, refined copper, coil, t > 0.15mm', nodeColor: '#299fff',
  },
  {
    productId: '7407', productCommunity: '20', x: 2252.0828857421875, y: 1920.696044921875, nodeSize: 15.952880859375, productName: 'Bars, rods & profiles of refined copper', nodeColor: '#330000',
  },
  {
    productId: '7402', productCommunity: '20', x: 2246.5987548828125, y: 1853.8673095703125, nodeSize: 16.016357421875, productName: 'Unrefined copper, copper anodes, electrolytic refinin', nodeColor: '#330000',
  },
  {
    productId: '1519', productCommunity: '2', x: 1059.5853271484375, y: 2313.942626953125, nodeSize: 15.8994140625, productName: 'Stearic acid', nodeColor: '#9c219c',
  },
  {
    productId: '1520', productCommunity: '2', x: 1070.0513916015625, y: 2275.0244140625, nodeSize: 15.053955078125, productName: 'Glycerol (glycerine), crude and glycerol waters & lye', nodeColor: '#9c219c',
  },
  {
    productId: '3802', productCommunity: '2', x: 1107.9520263671875, y: 2291.24169921875, nodeSize: 15.104736328125, productName: 'Activated carbon', nodeColor: '#9c219c',
  },
  {
    productId: '3806', productCommunity: '2', x: 1047.2171630859375, y: 2265.830810546875, nodeSize: 15.060546875, productName: 'Rosin and resin acids', nodeColor: '#9c219c',
  },
  {
    productId: '2703', productCommunity: '10', x: 1529.64111328125, y: 2078.98291015625, nodeSize: 15.003173828125, productName: 'Peat (including peat litter)', nodeColor: '#d1ff00',
  },
  {
    productId: '2704', productCommunity: '20', x: 1754.1986083984375, y: 2694.5965576171875, nodeSize: 17.00048828125, productName: 'Coke, semi-coke of coal, lignite, peat & retort carbo', nodeColor: '#330000',
  },
  {
    productId: '1518', productCommunity: '3', x: 1386.2095947265625, y: 2870.503662109375, nodeSize: 15.148193359375, productName: 'Processed animal, vegetable oils, industrial preps ne', nodeColor: '#0576a6',
  },
  {
    productId: '8714', productCommunity: '3', x: 1374.9180908203125, y: 2820.519287109375, nodeSize: 17.160888671875, productName: 'Motorcycle saddles', nodeColor: '#0576a6',
  },
  {
    productId: '2620', productCommunity: '99', x: 1913.39404296875, y: 2729.08984375, nodeSize: 15.4208984375, productName: 'Ash or residues containing hard zinc spelter', nodeColor: '#9c9a87',
  },
  {
    productId: '7218', productCommunity: '4', x: 1450.975830078125, y: 2157.51416015625, nodeSize: 15.316162109375, productName: 'Ingots and other primary forms, stainless steel', nodeColor: '#299fff',
  },
  {
    productId: '2701', productCommunity: '20', x: 1817.7252807617188, y: 2808.66357421875, nodeSize: 32.0740966796875, productName: 'Anthracite, not agglomerated', nodeColor: '#330000',
  },
  {
    productId: '7606', productCommunity: '4', x: 1909.7567749023438, y: 2670.442138671875, nodeSize: 19.1829833984375, productName: 'Pure aluminium rectangular plate/sheet/strip, t >0.2m', nodeColor: '#299fff',
  },
  {
    productId: '2613', productCommunity: '20', x: 1106.0670166015625, y: 2388.1416015625, nodeSize: 16.27783203125, productName: 'Molybdenum concentrates, roasted', nodeColor: '#330000',
  },
  {
    productId: '2614', productCommunity: '20', x: 1462.2719116210938, y: 2133.574951171875, nodeSize: 15.0819091796875, productName: 'Titanium ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '2615', productCommunity: '20', x: 1490.503662109375, y: 2109.73876953125, nodeSize: 15.075927734375, productName: 'Zirconium ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '2844', productCommunity: '20', x: 1147.5880126953125, y: 2398.629150390625, nodeSize: 17.791015625, productName: 'Natural uranium, its compounds, mixtures', nodeColor: '#330000',
  },
  {
    productId: '4013', productCommunity: '99', x: 2052.1036987304688, y: 2080.184326171875, nodeSize: 15.0245361328125, productName: 'Inner tubes of rubber for motor vehicles', nodeColor: '#9c9a87',
  },
  {
    productId: '2937', productCommunity: '2', x: 1299.64501953125, y: 2115.8914794921875, nodeSize: 16.439697265625, productName: 'Pituitary anterior hormones and derivatives, in bulk', nodeColor: '#9c219c',
  },
  {
    productId: '9021', productCommunity: '2', x: 1277.563720703125, y: 2137.58447265625, nodeSize: 20.481201171875, productName: 'Artificial joints', nodeColor: '#9c219c',
  },
  {
    productId: '9027', productCommunity: '2', x: 1336.439697265625, y: 2205.97509765625, nodeSize: 19.103271484375, productName: 'Gas/smoke analysis apparatus', nodeColor: '#9c219c',
  },
  {
    productId: '4012', productCommunity: '4', x: 2210.4444580078125, y: 2285.449951171875, nodeSize: 15.177001953125, productName: 'Retreaded tyres', nodeColor: '#299fff',
  },
  {
    productId: '8442', productCommunity: '1', x: 1304.4955444335938, y: 2454.51708984375, nodeSize: 15.2552490234375, productName: 'Photo-typesetting and composing machines', nodeColor: '#99ffff',
  },
  {
    productId: '3002', productCommunity: '2', x: 1287.096923828125, y: 2301.0615234375, nodeSize: 24.2490234375, productName: 'Antisera and other blood fractions', nodeColor: '#9c219c',
  },
  {
    productId: '4911', productCommunity: '6', x: 2037.5301513671875, y: 2414.6396484375, nodeSize: 16.674072265625, productName: 'Trade advertising material, catalogues etc.', nodeColor: '#ff0000',
  },
  {
    productId: '3003', productCommunity: '5', x: 2006.5376586914062, y: 2478.69287109375, nodeSize: 16.3175048828125, productName: 'Penicillins or streptomycins and derivatives, in bulk', nodeColor: '#730049',
  },
  {
    productId: '3307', productCommunity: '5', x: 1982.6006469726562, y: 2446.702880859375, nodeSize: 16.3050537109375, productName: 'Pre-shave, shaving and after shaving preparations', nodeColor: '#730049',
  },
  {
    productId: '3004', productCommunity: '5', x: 1969.560791015625, y: 2505.359375, nodeSize: 52.8056640625, productName: 'Penicillins and streptomycins, derivs, in dosage', nodeColor: '#730049',
  },
  {
    productId: '7323', productCommunity: '8', x: 2745.92041015625, y: 2703.75927734375, nodeSize: 16.1494140625, productName: 'Iron or steel wool, pot scourers, etc, iron or steel', nodeColor: '#33cc00',
  },
  {
    productId: '5601', productCommunity: '4', x: 2347.4549560546875, y: 2156.417724609375, nodeSize: 15.223388671875, productName: 'Sanitary towels, diapers and similar articles', nodeColor: '#299fff',
  },
  {
    productId: '6913', productCommunity: '99', x: 2027.970947265625, y: 1992.1751708984375, nodeSize: 15.100341796875, productName: 'Statuettes & ornamental articles of porcelain or chin', nodeColor: '#9c9a87',
  },
  {
    productId: '8712', productCommunity: '4', x: 2069.2607421875, y: 2013.5313110351562, nodeSize: 15.916015625, productName: 'Bicycles, other cycles, not motorized', nodeColor: '#299fff',
  },
  {
    productId: '5702', productCommunity: '99', x: 2431.7969970703125, y: 2824.8182373046875, nodeSize: 15.394287109375, productName: 'Hand made rugs including Kelem,Schumacks,Karamanie,et', nodeColor: '#9c9a87',
  },
  {
    productId: '6908', productCommunity: '20', x: 2457.8963623046875, y: 2821.03125, nodeSize: 16.621826171875, productName: 'Glazed ceramic mosaic tiles, cubes & similar <7cm wid', nodeColor: '#330000',
  },
  {
    productId: '8519', productCommunity: '1', x: 1150.0732421875, y: 2672.207275390625, nodeSize: 16.119140625, productName: 'Coin or disc-operated record-players', nodeColor: '#99ffff',
  },
  {
    productId: '8705', productCommunity: '4', x: 2137.0880126953125, y: 2244.864501953125, nodeSize: 17.309814453125, productName: 'Mobile cranes', nodeColor: '#299fff',
  },
  {
    productId: '8470', productCommunity: '1', x: 1232.9212646484375, y: 2833.7015380859375, nodeSize: 15.6142578125, productName: 'Electronic calculators operable with internal power', nodeColor: '#99ffff',
  },
  {
    productId: '8509', productCommunity: '1', x: 1082.0760498046875, y: 2632.4248046875, nodeSize: 17.117431640625, productName: 'Domestic vacuum cleaners', nodeColor: '#99ffff',
  },
  {
    productId: '5801', productCommunity: '8', x: 2753.9447021484375, y: 2787.251220703125, nodeSize: 15.314208984375, productName: 'Woven pile fabric of wool or fine animal hair, w >30c', nodeColor: '#33cc00',
  },
  {
    productId: '8508', productCommunity: '4', x: 1628.4522705078125, y: 2165.486328125, nodeSize: 16.78955078125, productName: 'Drills, hand-held, with self-contained electric motor', nodeColor: '#299fff',
  },
  {
    productId: '9011', productCommunity: '4', x: 1687.109130859375, y: 2852.486328125, nodeSize: 15.111572265625, productName: 'Stereoscopic microscopes', nodeColor: '#299fff',
  },
  {
    productId: '3907', productCommunity: '1', x: 1306.3216552734375, y: 2785.22607421875, nodeSize: 22.1787109375, productName: 'Polyacetals, in primary forms', nodeColor: '#99ffff',
  },
  {
    productId: '8452', productCommunity: '4', x: 1776.7349853515625, y: 2195.633544921875, nodeSize: 15.509765625, productName: 'Household type sewing machines', nodeColor: '#299fff',
  },
  {
    productId: '8460', productCommunity: '4', x: 1628.7425537109375, y: 2715.891845703125, nodeSize: 15.572265625, productName: 'Num controlled surface grinders, accurate to 0.01mm', nodeColor: '#299fff',
  },
  {
    productId: '3903', productCommunity: '1', x: 1309.8006591796875, y: 2734.466064453125, nodeSize: 18.43115234375, productName: 'Polystyrene, expansible in primary forms', nodeColor: '#99ffff',
  },
  {
    productId: '8428', productCommunity: '4', x: 1894.9171142578125, y: 2446.956298828125, nodeSize: 18.72119140625, productName: 'Lifts and skip hoists', nodeColor: '#299fff',
  },
  {
    productId: '9022', productCommunity: '2', x: 1239.2896728515625, y: 2235.59033203125, nodeSize: 17.781494140625, productName: 'Medical X-ray apparatus', nodeColor: '#9c219c',
  },
  {
    productId: '7008', productCommunity: '4', x: 1911.8395385742188, y: 2469.76806640625, nodeSize: 15.0367431640625, productName: 'Multiple-walled insulating units of glass', nodeColor: '#299fff',
  },
  {
    productId: '6114', productCommunity: '8', x: 2669.4542236328125, y: 2437.389892578125, nodeSize: 15.486083984375, productName: 'Garments nes, of wool or fine animal hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '8544', productCommunity: '6', x: 2488.0614013671875, y: 2422.6922607421875, nodeSize: 29.485595703125, productName: 'Insulated winding wire of copper', nodeColor: '#ff0000',
  },
  {
    productId: '9403', productCommunity: '6', x: 2310.6302490234375, y: 2423.34423828125, nodeSize: 26.191650390625, productName: 'Office furniture, metal, nes', nodeColor: '#ff0000',
  },
  {
    productId: '2932', productCommunity: '2', x: 1200.52392578125, y: 2106.181396484375, nodeSize: 15.88818359375, productName: 'Tetrahydrofuran', nodeColor: '#9c219c',
  },
  {
    productId: '2104', productCommunity: '7', x: 2375.068359375, y: 2478.177734375, nodeSize: 15.2685546875, productName: 'Soups and broths and preparations thereof', nodeColor: '#bf8845',
  },
  {
    productId: '2007', productCommunity: '7', x: 2403.7037353515625, y: 2461.482421875, nodeSize: 15.185302734375, productName: 'Homogenised jams, jellies, etc', nodeColor: '#bf8845',
  },
  {
    productId: '1904', productCommunity: '5', x: 2208.0767822265625, y: 2508.372802734375, nodeSize: 15.568603515625, productName: 'Cereal foods obtained by swelling, roasting of cereal', nodeColor: '#730049',
  },
  {
    productId: '7604', productCommunity: '6', x: 2331.966064453125, y: 2457.8974609375, nodeSize: 17.11669921875, productName: 'Bars, rods and profiles, aluminium, not alloyed', nodeColor: '#ff0000',
  },
  {
    productId: '3917', productCommunity: '5', x: 2139.007080078125, y: 2442.003173828125, nodeSize: 17.81201171875, productName: 'Sausage casings of hardened protein, cellulose', nodeColor: '#730049',
  },
  {
    productId: '2009', productCommunity: '7', x: 2422.247802734375, y: 2474.5682373046875, nodeSize: 17.18994140625, productName: 'Orange juice, frozen, not fermented or spirited', nodeColor: '#bf8845',
  },
  {
    productId: '7010', productCommunity: '6', x: 2375.203369140625, y: 2421.463623046875, nodeSize: 16.0615234375, productName: 'Ampoules of glass for conveyance or packing', nodeColor: '#ff0000',
  },
  {
    productId: '3923', productCommunity: '6', x: 2433.33349609375, y: 2444.612548828125, nodeSize: 21.2080078125, productName: 'Boxes, cases, crates etc. of plastic', nodeColor: '#ff0000',
  },
  {
    productId: '4820', productCommunity: '8', x: 2737.5743408203125, y: 2310.799072265625, nodeSize: 15.553955078125, productName: 'Registers, account books, note books, diaries etc', nodeColor: '#33cc00',
  },
  {
    productId: '2923', productCommunity: '2', x: 1480.7054443359375, y: 2422.126953125, nodeSize: 15.110595703125, productName: 'Choline, salts', nodeColor: '#9c219c',
  },
  {
    productId: '7505', productCommunity: '4', x: 1417.135498046875, y: 2296.1240234375, nodeSize: 15.258544921875, productName: 'Bars, rods and profiles, nickel, not alloyed', nodeColor: '#299fff',
  },
  {
    productId: '8484', productCommunity: '4', x: 1455.663330078125, y: 2571.22119140625, nodeSize: 15.3798828125, productName: 'Gaskets of metal sheeting, including sandwich type', nodeColor: '#299fff',
  },
  {
    productId: '7324', productCommunity: '4', x: 1543.015380859375, y: 2679.162109375, nodeSize: 15.274658203125, productName: 'Sinks and wash basins, stainless steel', nodeColor: '#299fff',
  },
  {
    productId: '8422', productCommunity: '4', x: 1540.0791015625, y: 2534.22705078125, nodeSize: 18.84228515625, productName: 'Dish washing machines (domestic)', nodeColor: '#299fff',
  },
  {
    productId: '8311', productCommunity: '4', x: 2007.1259765625, y: 2289.642822265625, nodeSize: 15.387451171875, productName: 'Electrodes, coated, of base metal, for arc welding', nodeColor: '#299fff',
  },
  {
    productId: '7419', productCommunity: '4', x: 1683.85888671875, y: 2289.203369140625, nodeSize: 15.35791015625, productName: 'Chain and parts thereof of copper', nodeColor: '#299fff',
  },
  {
    productId: '7318', productCommunity: '4', x: 1703.35400390625, y: 2449.29150390625, nodeSize: 19.609130859375, productName: 'Screws, coach, iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '8208', productCommunity: '4', x: 1614.9071044921875, y: 2381.169677734375, nodeSize: 15.2294921875, productName: 'Blades for metal working machines', nodeColor: '#299fff',
  },
  {
    productId: '8514', productCommunity: '4', x: 1580.7870483398438, y: 2460.779296875, nodeSize: 15.6929931640625, productName: 'Industrial electric resistance heated furnaces & oven', nodeColor: '#299fff',
  },
  {
    productId: '8515', productCommunity: '4', x: 1549.990478515625, y: 2370.1474609375, nodeSize: 16.4560546875, productName: 'Electric soldering irons and guns', nodeColor: '#299fff',
  },
  {
    productId: '8426', productCommunity: '4', x: 1610.5406494140625, y: 2331.250732421875, nodeSize: 17.880126953125, productName: 'Gantry and overhead travelling cranes on fixed suppor', nodeColor: '#299fff',
  },
  {
    productId: '8412', productCommunity: '4', x: 1619.2308349609375, y: 2460.119140625, nodeSize: 17.08349609375, productName: 'Reaction engines other than turbo jets', nodeColor: '#299fff',
  },
  {
    productId: '8512', productCommunity: '4', x: 1729.05322265625, y: 2459.015869140625, nodeSize: 17.218505859375, productName: 'Lighting/signalling equipment as used on bicycles', nodeColor: '#299fff',
  },
  {
    productId: '8538', productCommunity: '4', x: 1773.330322265625, y: 2295.766357421875, nodeSize: 19.155029296875, productName: 'Elictrical boards, panels, etc, not equipped', nodeColor: '#299fff',
  },
  {
    productId: '8704', productCommunity: '4', x: 1780.9041748046875, y: 2441.18359375, nodeSize: 34.072021484375, productName: 'Dump trucks designed for off-highway use', nodeColor: '#299fff',
  },
  {
    productId: '3823', productCommunity: '5', x: 2046.445068359375, y: 2544.755126953125, nodeSize: 20.84814453125, productName: 'Prepared binders for foundry moulds or cores', nodeColor: '#730049',
  },
  {
    productId: '4011', productCommunity: '4', x: 2150.3118896484375, y: 2212.096435546875, nodeSize: 24.588623046875, productName: 'Pneumatic tyres new of rubber for motor cars', nodeColor: '#299fff',
  },
  {
    productId: '8504', productCommunity: '4', x: 2022.6964111328125, y: 2266.274658203125, nodeSize: 26.630126953125, productName: 'Ballasts for discharge lamps or tubes', nodeColor: '#299fff',
  },
  {
    productId: '7226', productCommunity: '4', x: 1520.187255859375, y: 2412.931884765625, nodeSize: 15.5234375, productName: 'Flat rolled silicon-electrical steel, <600mm wide', nodeColor: '#299fff',
  },
  {
    productId: '7229', productCommunity: '4', x: 1554.3026123046875, y: 2317.79541015625, nodeSize: 15.17626953125, productName: 'Wire of high speed steel', nodeColor: '#299fff',
  },
  {
    productId: '7302', productCommunity: '4', x: 1667.5318603515625, y: 2583.505126953125, nodeSize: 15.62109375, productName: 'Railway/tramway rails, iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '8407', productCommunity: '4', x: 1533.701171875, y: 2442.331298828125, nodeSize: 20.77197265625, productName: 'Aircraft engines, spark-ignition', nodeColor: '#299fff',
  },
  {
    productId: '8425', productCommunity: '4', x: 1831.9378662109375, y: 2315.1279296875, nodeSize: 15.869140625, productName: 'Electric hoists (except skip and vehicle hoists)', nodeColor: '#299fff',
  },
  {
    productId: '8603', productCommunity: '4', x: 1624.815185546875, y: 2616.581298828125, nodeSize: 15.465576171875, productName: 'Self-propelled railway cars, external electric power', nodeColor: '#299fff',
  },
  {
    productId: '8408', productCommunity: '4', x: 1648.8306884765625, y: 2484.778076171875, nodeSize: 22.562744140625, productName: 'Marine propulsion engines, diesel', nodeColor: '#299fff',
  },
  {
    productId: '7608', productCommunity: '4', x: 2135.6524658203125, y: 2343.089111328125, nodeSize: 15.205322265625, productName: 'Tubes and pipe, aluminium, not alloyed', nodeColor: '#299fff',
  },
  {
    productId: '2303', productCommunity: '8', x: 2798.8343505859375, y: 2681.731689453125, nodeSize: 15.352783203125, productName: 'Residues of starch manufacture and similar residues', nodeColor: '#33cc00',
  },
  {
    productId: '2208', productCommunity: '5', x: 1938.3396606445312, y: 2560.000244140625, nodeSize: 18.3419189453125, productName: 'Compound alcoholic preps for beverage manufacture', nodeColor: '#730049',
  },
  {
    productId: '2306', productCommunity: '20', x: 2277.808837890625, y: 2056.92236328125, nodeSize: 15.52685546875, productName: 'Cotton seed oil-cake and other solid residues', nodeColor: '#330000',
  },
  {
    productId: '8609', productCommunity: '6', x: 2140.3201904296875, y: 2570.050537109375, nodeSize: 15.377197265625, productName: 'Cargo containers designed for carriage', nodeColor: '#ff0000',
  },
  {
    productId: '7801', productCommunity: '20', x: 2240.3558349609375, y: 2139.9200439453125, nodeSize: 15.730224609375, productName: 'Lead refined unwrought', nodeColor: '#330000',
  },
  {
    productId: '3102', productCommunity: '20', x: 2302.0382080078125, y: 2001.837646484375, nodeSize: 19.405029296875, productName: 'Urea, including aqueous solution in packs >10 kg', nodeColor: '#330000',
  },
  {
    productId: '3915', productCommunity: '5', x: 2238.1455078125, y: 2591.587890625, nodeSize: 15.84521484375, productName: 'Polyethylene waste or scrap', nodeColor: '#730049',
  },
  {
    productId: '3105', productCommunity: '5', x: 2226.5859375, y: 2569.42138671875, nodeSize: 18.94189453125, productName: 'Fertilizer mixes in tablets etc or in packs <10 kg', nodeColor: '#730049',
  },
  {
    productId: '2711', productCommunity: '20', x: 2441.7357177734375, y: 2015.8312377929688, nodeSize: 54.154541015625, productName: 'Natural gas, liquefied', nodeColor: '#330000',
  },
  {
    productId: '2503', productCommunity: '20', x: 2521.2259521484375, y: 2006.027099609375, nodeSize: 16.400146484375, productName: 'Sulphur, crude or unrefined', nodeColor: '#330000',
  },
  {
    productId: '4420', productCommunity: '8', x: 2779.353759765625, y: 2339.53173828125, nodeSize: 15.072265625, productName: 'Statuettes and other ornaments of wood', nodeColor: '#33cc00',
  },
  {
    productId: '4702', productCommunity: '2', x: 1025.5038452148438, y: 2206.78173828125, nodeSize: 15.2366943359375, productName: 'Chemical wood pulp, dissolving grades', nodeColor: '#9c219c',
  },
  {
    productId: '4803', productCommunity: '6', x: 2345.35009765625, y: 2241.57763671875, nodeSize: 15.30126953125, productName: 'Paper, household, sanitary, width > 36 centimetres', nodeColor: '#ff0000',
  },
  {
    productId: '4806', productCommunity: '99', x: 1469.3189697265625, y: 2387.44970703125, nodeSize: 15.0732421875, productName: 'Paper, vegetable parchment', nodeColor: '#9c9a87',
  },
  {
    productId: '4802', productCommunity: '20', x: 1853.6123046875, y: 2163.381591796875, nodeSize: 18.991455078125, productName: 'Paper, hand-made, uncoated', nodeColor: '#330000',
  },
  {
    productId: '4804', productCommunity: '20', x: 1860.9833984375, y: 2095.97314453125, nodeSize: 16.744873046875, productName: 'Paper, Kraftliner, unbleached, uncoated', nodeColor: '#330000',
  },
  {
    productId: '3703', productCommunity: '2', x: 1213.4068603515625, y: 2270.966064453125, nodeSize: 15.114501953125, productName: 'Unexposed photographic paper,textile roll > 610mm wid', nodeColor: '#9c219c',
  },
  {
    productId: '7326', productCommunity: '4', x: 2009.8424072265625, y: 2357.355712890625, nodeSize: 21.4970703125, productName: 'Balls, iron/steel, forged/stamped for grinding mills', nodeColor: '#299fff',
  },
  {
    productId: '7309', productCommunity: '6', x: 2203.0045166015625, y: 2375.3994140625, nodeSize: 15.462158203125, productName: 'Reservoirs/tanks/vats/etc, iron/steel capacity >300l', nodeColor: '#ff0000',
  },
  {
    productId: '8440', productCommunity: '1', x: 1274.2078857421875, y: 2436.725830078125, nodeSize: 15.148193359375, productName: 'Book-binding machinery including book-sewing machines', nodeColor: '#99ffff',
  },
  {
    productId: '4821', productCommunity: '6', x: 2322.63916015625, y: 2498.2662353515625, nodeSize: 15.52880859375, productName: 'Paper labels of all kinds, printed', nodeColor: '#ff0000',
  },
  {
    productId: '2106', productCommunity: '5', x: 2297.53759765625, y: 2488.7666015625, nodeSize: 18.88916015625, productName: 'Protein concentrates and textured protein substances', nodeColor: '#730049',
  },
  {
    productId: '2102', productCommunity: '5', x: 2239.95263671875, y: 2477.568115234375, nodeSize: 15.0908203125, productName: 'Yeasts, active', nodeColor: '#730049',
  },
  {
    productId: '7616', productCommunity: '4', x: 2126.5333251953125, y: 2376.95166015625, nodeSize: 16.822021484375, productName: 'Aluminium nails, tacks, staples, bolts, nuts etc,', nodeColor: '#299fff',
  },
  {
    productId: '7610', productCommunity: '6', x: 2189.88525390625, y: 2465.92333984375, nodeSize: 16.1826171875, productName: 'Aluminium Doors, windows, frames and thresholds', nodeColor: '#ff0000',
  },
  {
    productId: '4418', productCommunity: '6', x: 2269.52099609375, y: 2322.67822265625, nodeSize: 16.88330078125, productName: 'Windows, French-windows, frames, of wood', nodeColor: '#ff0000',
  },
  {
    productId: '4411', productCommunity: '6', x: 2253.555908203125, y: 2392.40380859375, nodeSize: 16.318359375, productName: 'Fibreboard >0.8 g/cm2 not worked or surface covered', nodeColor: '#ff0000',
  },
  {
    productId: '5911', productCommunity: '4', x: 1962.248291015625, y: 2288.79052734375, nodeSize: 15.494384765625, productName: 'Textile fabric for card clothing, technical use', nodeColor: '#299fff',
  },
  {
    productId: '8707', productCommunity: '4', x: 1672.58935546875, y: 2466.6708984375, nodeSize: 16.4541015625, productName: 'Bodies for passenger carrying vehicles', nodeColor: '#299fff',
  },
  {
    productId: '2403', productCommunity: '7', x: 2403.8126220703125, y: 2651.46435546875, nodeSize: 15.303955078125, productName: 'Cigarette or pipe tobacco and tobacco substitute mixe', nodeColor: '#bf8845',
  },
  {
    productId: '0402', productCommunity: '7', x: 2395.7342529296875, y: 2582.6639404296875, nodeSize: 17.677490234375, productName: 'Milk powder < 1.5% fat', nodeColor: '#bf8845',
  },
  {
    productId: '3507', productCommunity: '10', x: 2158.147216796875, y: 2724.0179443359375, nodeSize: 15.41357421875, productName: 'Rennet and concentrates thereof', nodeColor: '#d1ff00',
  },
  {
    productId: '0405', productCommunity: '10', x: 2051.6380004882812, y: 2685.100830078125, nodeSize: 15.7635498046875, productName: 'Butter and other fats and oils derived from milk', nodeColor: '#d1ff00',
  },
  {
    productId: '0904', productCommunity: '10', x: 2087.365966796875, y: 2902.0103759765625, nodeSize: 15.177734375, productName: 'Pepper of the genus Piper, whole', nodeColor: '#d1ff00',
  },
  {
    productId: '0306', productCommunity: '10', x: 2106.999755859375, y: 2883.618896484375, nodeSize: 17.33056640625, productName: 'Rock lobster and other sea crawfish, frozen', nodeColor: '#d1ff00',
  },
  {
    productId: '2821', productCommunity: '99', x: 1640.741455078125, y: 2940.8511962890625, nodeSize: 15.051513671875, productName: 'Iron oxides and hydroxides', nodeColor: '#9c9a87',
  },
  {
    productId: '9504', productCommunity: '99', x: 1627.2061767578125, y: 2865.40380859375, nodeSize: 21.87255859375, productName: 'Video games used with a television receiver', nodeColor: '#9c9a87',
  },
  {
    productId: '2905', productCommunity: '20', x: 2400.9227294921875, y: 1953.5950927734375, nodeSize: 19.879150390625, productName: 'Methyl alcohol', nodeColor: '#330000',
  },
  {
    productId: '2815', productCommunity: '4', x: 1830.9561767578125, y: 2190.748291015625, nodeSize: 15.781982421875, productName: 'Sodium hydroxide (caustic soda) solid', nodeColor: '#299fff',
  },
  {
    productId: '2811', productCommunity: '99', x: 1591.1016235351562, y: 2756.46142578125, nodeSize: 15.4246826171875, productName: 'Hydrogen fluoride (hydrofluoric acid)', nodeColor: '#9c9a87',
  },
  {
    productId: '4901', productCommunity: '99', x: 1576.9852294921875, y: 2698.286865234375, nodeSize: 17.80859375, productName: 'Brochures, leaflets and similar, in single sheets', nodeColor: '#9c9a87',
  },
  {
    productId: '7901', productCommunity: '20', x: 2189.50927734375, y: 1852.3684692382812, nodeSize: 16.42578125, productName: 'Zinc, not alloyed, unwrought, >99% pure', nodeColor: '#330000',
  },
  {
    productId: '2835', productCommunity: '9', x: 2157.1822509765625, y: 1825.6158447265625, nodeSize: 15.629150390625, productName: 'Phosphinates and phosphonates', nodeColor: '#6e451e',
  },
  {
    productId: '8112', productCommunity: '20', x: 1746.6590576171875, y: 2140.2562255859375, nodeSize: 15.124755859375, productName: 'Beryllium, unwrought, waste or scrap/powders', nodeColor: '#330000',
  },
  {
    productId: '2807', productCommunity: '20', x: 2183.234130859375, y: 1898.369140625, nodeSize: 15.16015625, productName: 'Sulphuric acid, oleum', nodeColor: '#330000',
  },
  {
    productId: '7101', productCommunity: '99', x: 2863.2247314453125, y: 2785.240234375, nodeSize: 15.080810546875, productName: 'Pearls natural, not permanently mounted or set', nodeColor: '#9c9a87',
  },
  {
    productId: '7102', productCommunity: '20', x: 2928.5103759765625, y: 2499.8944091796875, nodeSize: 30.241943359375, productName: 'Diamonds, unsorted', nodeColor: '#330000',
  },
  {
    productId: '7018', productCommunity: '99', x: 1139.4412841796875, y: 2479.09912109375, nodeSize: 15.13134765625, productName: 'Ornamental glass beads, pearls, stones, worked items', nodeColor: '#9c9a87',
  },
  {
    productId: '8513', productCommunity: '1', x: 1164.64404296875, y: 2469.330322265625, nodeSize: 15.17822265625, productName: 'Portable battery and magneto-electric lamps', nodeColor: '#99ffff',
  },
  {
    productId: '6911', productCommunity: '4', x: 2074.5958251953125, y: 2058.1090087890625, nodeSize: 15.419677734375, productName: 'Tableware and kitchenware of porcelain or china', nodeColor: '#299fff',
  },
  {
    productId: '7004', productCommunity: '2', x: 1408.30517578125, y: 2477.240234375, nodeSize: 15.182861328125, productName: 'Drawn glass sheet coloured, absorbing, reflect, opaqu', nodeColor: '#9c219c',
  },
  {
    productId: '6903', productCommunity: '4', x: 1438.6220703125, y: 2720.85986328125, nodeSize: 15.152099609375, productName: 'Refractory ceramic articles, >50% carbon', nodeColor: '#299fff',
  },
  {
    productId: '6907', productCommunity: '4', x: 1548.39697265625, y: 2766.63232421875, nodeSize: 15.417724609375, productName: 'Unglazed ceramic mosaic tiles etc, <7cm wide', nodeColor: '#299fff',
  },
  {
    productId: '7112', productCommunity: '20', x: 2287.92236328125, y: 2775.2056884765625, nodeSize: 17.669921875, productName: 'Waste or scrap containing gold as sole precious metal', nodeColor: '#330000',
  },
  {
    productId: '9023', productCommunity: '4', x: 1866.2698364257812, y: 2614.25341796875, nodeSize: 15.1905517578125, productName: 'Instruments, apparatus and models, for demonstration', nodeColor: '#299fff',
  },
  {
    productId: '2708', productCommunity: '4', x: 1980.8743896484375, y: 2140.6962890625, nodeSize: 15.025634765625, productName: 'Pitch', nodeColor: '#299fff',
  },
  {
    productId: '2709', productCommunity: '20', x: 2450.611083984375, y: 1815.694091796875, nodeSize: 67.94873046875, productName: 'Petroleum oils, oils from bituminous minerals, crude', nodeColor: '#330000',
  },
  {
    productId: '2814', productCommunity: '20', x: 2335.7252197265625, y: 1984.4228515625, nodeSize: 16.302978515625, productName: 'Anhydrous ammonia', nodeColor: '#330000',
  },
  {
    productId: '2710', productCommunity: '20', x: 2348.2554931640625, y: 1844.48388671875, nodeSize: 57.716064453125, productName: 'Oils petroleum, bituminous, distillates, except crude', nodeColor: '#330000',
  },
  {
    productId: '8713', productCommunity: '2', x: 1235.2347412109375, y: 1964.6544189453125, nodeSize: 15.027099609375, productName: 'Wheelchairs not mechanically propelled', nodeColor: '#9c219c',
  },
  {
    productId: '6909', productCommunity: '2', x: 1093.7362060546875, y: 2160.11767578125, nodeSize: 15.31494140625, productName: 'Porcelain ware for laboratory, chemical, technical us', nodeColor: '#9c219c',
  },
  {
    productId: '2707', productCommunity: '4', x: 2140.5897216796875, y: 2042.9612426757812, nodeSize: 17.375732421875, productName: 'Benzol', nodeColor: '#299fff',
  },
  {
    productId: '8702', productCommunity: '4', x: 2123.294921875, y: 2108.549072265625, nodeSize: 17.50244140625, productName: 'Diesel powered buses', nodeColor: '#299fff',
  },
  {
    productId: '3817', productCommunity: '2', x: 1420.2708740234375, y: 2001.6881103515625, nodeSize: 15.2734375, productName: 'Mixed alkylbenzenes, nes', nodeColor: '#9c219c',
  },
  {
    productId: '2902', productCommunity: '2', x: 1397.216064453125, y: 2086.2216796875, nodeSize: 21.302734375, productName: 'Cyclohexane', nodeColor: '#9c219c',
  },
  {
    productId: '2909', productCommunity: '2', x: 1285.4041748046875, y: 2046.4228515625, nodeSize: 16.74072265625, productName: 'Diethyl ether', nodeColor: '#9c219c',
  },
  {
    productId: '2906', productCommunity: '2', x: 1158.4176025390625, y: 2103.5550537109375, nodeSize: 15.107666015625, productName: 'Menthol', nodeColor: '#9c219c',
  },
  {
    productId: '7115', productCommunity: '4', x: 1861.654052734375, y: 2678.4052734375, nodeSize: 15.2265625, productName: 'Catalysts (form of wire cloth or grill) of platinum', nodeColor: '#299fff',
  },
  {
    productId: '2843', productCommunity: '4', x: 1854.2088623046875, y: 2750.573974609375, nodeSize: 15.69873046875, productName: 'Colloidal precious metals', nodeColor: '#299fff',
  },
  {
    productId: '2901', productCommunity: '20', x: 2488.66357421875, y: 1911.4864501953125, nodeSize: 18.6220703125, productName: 'Saturated acyclic hydrocarbons', nodeColor: '#330000',
  },
  {
    productId: '2849', productCommunity: '4', x: 1581.9129638671875, y: 2182.576904296875, nodeSize: 15.21484375, productName: 'Calcium carbide', nodeColor: '#299fff',
  },
  {
    productId: '8481', productCommunity: '4', x: 1745.544921875, y: 2311.586669921875, nodeSize: 25.8779296875, productName: 'Valves, pressure reducing', nodeColor: '#299fff',
  },
  {
    productId: '9607', productCommunity: '8', x: 2781.8897705078125, y: 2568.14306640625, nodeSize: 15.164794921875, productName: 'Slide fasteners with chain scoops of base metal', nodeColor: '#33cc00',
  },
  {
    productId: '9305', productCommunity: '4', x: 1464.870361328125, y: 2526.635986328125, nodeSize: 15.0634765625, productName: 'Parts and accessories of revolvers or pistols', nodeColor: '#299fff',
  },
  {
    productId: '9701', productCommunity: '99', x: 1304.3453979492188, y: 2912.75537109375, nodeSize: 16.7633056640625, productName: 'Paintings/drawings/pastels executed by hand', nodeColor: '#9c9a87',
  },
  {
    productId: '9018', productCommunity: '1', x: 1341.381591796875, y: 2517.8603515625, nodeSize: 27.093994140625, productName: 'Electro-cardiographs', nodeColor: '#99ffff',
  },
  {
    productId: '9013', productCommunity: '1', x: 1164.077880859375, y: 2501.51025390625, nodeSize: 26.2880859375, productName: 'Telescopes for arms/other equipment, periscopes', nodeColor: '#99ffff',
  },
  {
    productId: '9613', productCommunity: '3', x: 1444.6219482421875, y: 2870.06787109375, nodeSize: 15.0830078125, productName: 'Pocket lighters, gas-fuelled, non-refillable', nodeColor: '#0576a6',
  },
  {
    productId: '9101', productCommunity: '3', x: 1413.9317626953125, y: 2757.05810546875, nodeSize: 16.068359375, productName: 'Wrist-watch, precious metal, battery, with hands', nodeColor: '#0576a6',
  },
  {
    productId: '5501', productCommunity: '8', x: 2579.23486328125, y: 2565.1842041015625, nodeSize: 15.0537109375, productName: 'Filament tow of nylon, polyamides', nodeColor: '#33cc00',
  },
  {
    productId: '5408', productCommunity: '8', x: 2579.135009765625, y: 2515.90869140625, nodeSize: 15.06494140625, productName: 'Woven fabric of hi-ten filament yarns of viscose rayo', nodeColor: '#33cc00',
  },
  {
    productId: '9609', productCommunity: '99', x: 2632.3126220703125, y: 2675.271484375, nodeSize: 15.014892578125, productName: 'Pencils/crayons, with leads in rigid sheath, nes', nodeColor: '#9c9a87',
  },
  {
    productId: '5810', productCommunity: '8', x: 2648.157470703125, y: 2679.03369140625, nodeSize: 15.150390625, productName: 'Embroidery without visible ground', nodeColor: '#33cc00',
  },
  {
    productId: '8479', productCommunity: '4', x: 1433.5794677734375, y: 2251.2691650390625, nodeSize: 29.599609375, productName: 'Machines for public works, building etc, nes', nodeColor: '#299fff',
  },
  {
    productId: '9507', productCommunity: '8', x: 2752.40185546875, y: 2546.224853515625, nodeSize: 15.2158203125, productName: 'Fishing rods', nodeColor: '#33cc00',
  },
  {
    productId: '5804', productCommunity: '8', x: 2670.588623046875, y: 2524.47412109375, nodeSize: 15.0185546875, productName: 'Tulles, other nets (not woven, knit or crochet)', nodeColor: '#33cc00',
  },
  {
    productId: '5402', productCommunity: '1', x: 1333.5552978515625, y: 2724.28271484375, nodeSize: 17.387451171875, productName: 'Hi-ten yarn of nylon, polyamide, not sewing or retail', nodeColor: '#99ffff',
  },
  {
    productId: '8211', productCommunity: '99', x: 1111.7421875, y: 2698.169921875, nodeSize: 15.152587890625, productName: 'Sets of different knives, cutlery sets', nodeColor: '#9c9a87',
  },
  {
    productId: '8532', productCommunity: '1', x: 1317.430908203125, y: 2669.478759765625, nodeSize: 17.76953125, productName: 'Fixed power capacitors (50/60 herz circuits)', nodeColor: '#99ffff',
  },
  {
    productId: '5407', productCommunity: '8', x: 2647.838623046875, y: 2585.130859375, nodeSize: 17.58642578125, productName: 'Woven hi-ten filament, nylon, polyamide or polyester', nodeColor: '#33cc00',
  },
  {
    productId: '5210', productCommunity: '8', x: 2574.1993408203125, y: 2611.980712890625, nodeSize: 15.209716796875, productName: 'Plain weave cotton <85% +manmade fibre <200g unbleach', nodeColor: '#33cc00',
  },
  {
    productId: '6217', productCommunity: '8', x: 2640.4412841796875, y: 2436.919677734375, nodeSize: 15.215087890625, productName: 'Clothing accessories nes, textile material, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6117', productCommunity: '8', x: 2727.5777587890625, y: 2417.4913330078125, nodeSize: 15.169677734375, productName: 'Shawls, scarves, veils etc, textile material, knit', nodeColor: '#33cc00',
  },
  {
    productId: '5205', productCommunity: '8', x: 2813.557861328125, y: 2551.057861328125, nodeSize: 16.3037109375, productName: 'Cotton yarn >85% single uncombed >714 dtex,not retail', nodeColor: '#33cc00',
  },
  {
    productId: '5515', productCommunity: '8', x: 2647.9063720703125, y: 2496.696044921875, nodeSize: 15.411376953125, productName: 'Woven fabric polyester + viscose rayon, nes', nodeColor: '#33cc00',
  },
  {
    productId: '5209', productCommunity: '8', x: 2715.806884765625, y: 2548.7666015625, nodeSize: 16.208984375, productName: 'Plain weave cotton, >85% >200g/m2, unbleached', nodeColor: '#33cc00',
  },
  {
    productId: '6805', productCommunity: '20', x: 1847.411865234375, y: 2249.74658203125, nodeSize: 15.37255859375, productName: 'Abrasive powderor grain on woven textile support', nodeColor: '#330000',
  },
  {
    productId: '8474', productCommunity: '4', x: 2088.9705810546875, y: 2282.643310546875, nodeSize: 18.236083984375, productName: 'Machines to sort, screen, wash stone, ores & minerals', nodeColor: '#299fff',
  },
  {
    productId: '0801', productCommunity: '10', x: 2806.5050048828125, y: 2276.958984375, nodeSize: 15.406005859375, productName: 'Coconuts, fresh or dried', nodeColor: '#d1ff00',
  },
  {
    productId: '1801', productCommunity: '10', x: 2804.609619140625, y: 2239.589599609375, nodeSize: 15.96435546875, productName: 'Cocoa beans, whole or broken, raw or roasted', nodeColor: '#d1ff00',
  },
  {
    productId: '3301', productCommunity: '7', x: 2414.5084228515625, y: 2591.66650390625, nodeSize: 15.307861328125, productName: 'Essential oils of bergamot', nodeColor: '#bf8845',
  },
  {
    productId: '0604', productCommunity: '10', x: 2070.7698974609375, y: 2865.513671875, nodeSize: 15.041748046875, productName: 'Mosses and lichens for bouquets, ornamental purposes', nodeColor: '#d1ff00',
  },
  {
    productId: '2301', productCommunity: '10', x: 2222.940185546875, y: 2818.118896484375, nodeSize: 15.4892578125, productName: 'Flour or meal, pellet of meat or offal for animal fee', nodeColor: '#d1ff00',
  },
  {
    productId: '0504', productCommunity: '10', x: 2224.9866943359375, y: 2798.67724609375, nodeSize: 15.420166015625, productName: 'Guts, bladders and stomachs of animals except fish', nodeColor: '#d1ff00',
  },
  {
    productId: '0207', productCommunity: '10', x: 1662.4415283203125, y: 2725.367919921875, nodeSize: 17.99169921875, productName: 'Poultry, domestic, whole, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '0208', productCommunity: '10', x: 2131.25048828125, y: 2726.455322265625, nodeSize: 15.00146484375, productName: 'Rabbit or hare meat, offal, fresh, chilled or frozen', nodeColor: '#d1ff00',
  },
  {
    productId: '0301', productCommunity: '10', x: 2206.72509765625, y: 2893.301025390625, nodeSize: 15.12109375, productName: 'Ornamental fish, live', nodeColor: '#d1ff00',
  },
  {
    productId: '0210', productCommunity: '10', x: 1737.2982177734375, y: 2665.171142578125, nodeSize: 15.504150390625, productName: 'Hams and shoulders, swine, salted, dried or smoked', nodeColor: '#d1ff00',
  },
  {
    productId: '2004', productCommunity: '10', x: 1725.36083984375, y: 2716.8984375, nodeSize: 15.60498046875, productName: 'Potatoes, prepared, frozen', nodeColor: '#d1ff00',
  },
  {
    productId: '0204', productCommunity: '10', x: 2586.3431396484375, y: 2908.5791015625, nodeSize: 15.589111328125, productName: 'Lamb carcasses and half carcasses, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '2204', productCommunity: '10', x: 2585.4449462890625, y: 2857.615966796875, nodeSize: 19.345458984375, productName: 'Grape wines, sparkling', nodeColor: '#d1ff00',
  },
  {
    productId: '2002', productCommunity: '10', x: 2506.406005859375, y: 2799.340087890625, nodeSize: 15.42822265625, productName: 'Tomatoes, whole/pieces, prepared/preserved, no vinega', nodeColor: '#d1ff00',
  },
  {
    productId: '3501', productCommunity: '10', x: 2109.123291015625, y: 2707.1724853515625, nodeSize: 15.30078125, productName: 'Casein', nodeColor: '#d1ff00',
  },
  {
    productId: '0101', productCommunity: '10', x: 2116.6070556640625, y: 2753.174072265625, nodeSize: 15.217041015625, productName: 'Horses, live pure-bred breeding', nodeColor: '#d1ff00',
  },
  {
    productId: '2607', productCommunity: '20', x: 2519.220703125, y: 2856.666015625, nodeSize: 15.4306640625, productName: 'Lead ores and concentrates', nodeColor: '#330000',
  },
  {
    productId: '8542', productCommunity: '1', x: 1202.7215576171875, y: 2563.5869140625, nodeSize: 53.359619140625, productName: 'Monolithic integrated circuits, digital', nodeColor: '#99ffff',
  },
  {
    productId: '8528', productCommunity: '1', x: 1367.5172729492188, y: 2623.437255859375, nodeSize: 30.1444091796875, productName: 'Colour television receivers/monitors/projectors', nodeColor: '#99ffff',
  },
  {
    productId: '8518', productCommunity: '1', x: 1255.17822265625, y: 2780.123291015625, nodeSize: 18.448486328125, productName: 'Microphones and stands thereof', nodeColor: '#99ffff',
  },
  {
    productId: '8505', productCommunity: '1', x: 1284.56103515625, y: 2727.93115234375, nodeSize: 15.792724609375, productName: 'Metal permanent magnets, articles intended as magnets', nodeColor: '#99ffff',
  },
  {
    productId: '9012', productCommunity: '2', x: 1229.93017578125, y: 2292.243408203125, nodeSize: 15.07470703125, productName: 'Microscopes except optical, diffraction apparatus', nodeColor: '#9c219c',
  },
  {
    productId: '9029', productCommunity: '4', x: 1783.325439453125, y: 2253.443359375, nodeSize: 15.56689453125, productName: 'Revolution counters/taximeters/mileometers/pedometers', nodeColor: '#299fff',
  },
  {
    productId: '9030', productCommunity: '1', x: 1320.579833984375, y: 2491.794189453125, nodeSize: 17.694091796875, productName: 'Instruments to measure or detect ionising radiations', nodeColor: '#99ffff',
  },
  {
    productId: '8540', productCommunity: '1', x: 1247.0816650390625, y: 2519.408935546875, nodeSize: 15.5224609375, productName: 'Colour cathode-ray television picture tubes, monitors', nodeColor: '#99ffff',
  },
  {
    productId: '2939', productCommunity: '99', x: 1603.0889892578125, y: 2861.54638671875, nodeSize: 15.519287109375, productName: 'Opium alkaloids, their derivs, in bulk, salts thereof', nodeColor: '#9c9a87',
  },
  {
    productId: '0704', productCommunity: '10', x: 2634.1451416015625, y: 2789.60205078125, nodeSize: 15.144775390625, productName: 'Cauliflowers and headed broccoli, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '8805', productCommunity: '99', x: 1306.6634521484375, y: 2046.4566040039062, nodeSize: 15.093994140625, productName: 'Aircraft launching and deck-arrestor gear, parts', nodeColor: '#9c9a87',
  },
  {
    productId: '1901', productCommunity: '7', x: 2393.5849609375, y: 2543.5439453125, nodeSize: 16.62841796875, productName: 'Infant foods of cereals, flour, starch or milk, retai', nodeColor: '#bf8845',
  },
  {
    productId: '1806', productCommunity: '7', x: 2389.4202880859375, y: 2351.953369140625, nodeSize: 17.730224609375, productName: 'Cocoa powder, sweetened', nodeColor: '#bf8845',
  },
  {
    productId: '0406', productCommunity: '7', x: 2349.778076171875, y: 2486.7923583984375, nodeSize: 18.88427734375, productName: 'Fresh cheese, unfermented whey cheese, curd', nodeColor: '#bf8845',
  },
  {
    productId: '0702', productCommunity: '10', x: 2620.2813720703125, y: 2833.891357421875, nodeSize: 15.942626953125, productName: 'Tomatoes, fresh or chilled', nodeColor: '#d1ff00',
  },
  {
    productId: '8309', productCommunity: '6', x: 2164.7598876953125, y: 2437.30615234375, nodeSize: 15.653564453125, productName: 'Corks, crown, of base metal', nodeColor: '#ff0000',
  },
  {
    productId: '7325', productCommunity: '4', x: 2144.869873046875, y: 2310.713623046875, nodeSize: 16.00048828125, productName: 'Cast articles, of non-malleable cast iron nes', nodeColor: '#299fff',
  },
  {
    productId: '6810', productCommunity: '6', x: 2373.766357421875, y: 2455.08056640625, nodeSize: 15.63134765625, productName: 'Building blocks, bricks of cement, or artificial ston', nodeColor: '#ff0000',
  },
  {
    productId: '4415', productCommunity: '6', x: 2236.5001220703125, y: 2413.307861328125, nodeSize: 15.291748046875, productName: 'Wooden cases, boxes, crates, drums and containers', nodeColor: '#ff0000',
  },
  {
    productId: '9404', productCommunity: '8', x: 2553.7252197265625, y: 2253.69189453125, nodeSize: 16.517333984375, productName: 'Mattress supports', nodeColor: '#33cc00',
  },
  {
    productId: '6304', productCommunity: '8', x: 2582.92919921875, y: 2254.062744140625, nodeSize: 15.28662109375, productName: 'Bedspreads, textile material, nes, knit or crochet', nodeColor: '#33cc00',
  },
  {
    productId: '6307', productCommunity: '8', x: 2610.51123046875, y: 2193.156494140625, nodeSize: 16.16748046875, productName: 'Floor & dish cloths, dusters, etc, textile material', nodeColor: '#33cc00',
  },
  {
    productId: '8207', productCommunity: '4', x: 1692.3257446289062, y: 2354.494140625, nodeSize: 17.7340087890625, productName: 'Rock drilling, boring heads of sintered metal, carbid', nodeColor: '#299fff',
  },
  {
    productId: '8454', productCommunity: '4', x: 1629.408447265625, y: 2304.280029296875, nodeSize: 15.4130859375, productName: 'Converters used in metallurgy or metal foundries', nodeColor: '#299fff',
  },
  {
    productId: '8459', productCommunity: '4', x: 1680.1357421875, y: 2384.5498046875, nodeSize: 15.657470703125, productName: 'Way-type unit head machines, metal working', nodeColor: '#299fff',
  },
  {
    productId: '7007', productCommunity: '4', x: 1831.5554809570312, y: 2270.1943359375, nodeSize: 16.2435302734375, productName: 'Safety glass (tempered) for vehicles, aircraft, etc', nodeColor: '#299fff',
  },
  {
    productId: '8433', productCommunity: '4', x: 1703.986328125, y: 2498.526123046875, nodeSize: 17.781494140625, productName: 'Mowers, powered, lawn, with horizontal cutting device', nodeColor: '#299fff',
  },
  {
    productId: '8436', productCommunity: '4', x: 1807.2603759765625, y: 2513.0673828125, nodeSize: 15.6796875, productName: 'Machinery for preparing animal feeding stuffs', nodeColor: '#299fff',
  },
  {
    productId: '6815', productCommunity: '4', x: 1587.8546142578125, y: 2486.069580078125, nodeSize: 15.49658203125, productName: 'Non-electrical articles of graphite or other carbon', nodeColor: '#299fff',
  },
  {
    productId: '1202', productCommunity: '10', x: 2868.712646484375, y: 2651.60107421875, nodeSize: 15.10205078125, productName: 'Ground-nuts in shell not roasted or cooked', nodeColor: '#d1ff00',
  },
  {
    productId: '0902', productCommunity: '10', x: 2881.3125, y: 2689.9892578125, nodeSize: 15.72119140625, productName: 'Tea, green (unfermented) in packages < 3 kg', nodeColor: '#d1ff00',
  },
  {
    productId: '1003', productCommunity: '10', x: 2014.3157348632812, y: 2721.421142578125, nodeSize: 16.0528564453125, productName: 'Barley', nodeColor: '#d1ff00',
  },
  {
    productId: '1001', productCommunity: '10', x: 2011.5481567382812, y: 2762.05517578125, nodeSize: 22.7635498046875, productName: 'Durum wheat', nodeColor: '#d1ff00',
  },
  {
    productId: '1206', productCommunity: '10', x: 2302.0546875, y: 2590.7880859375, nodeSize: 15.20361328125, productName: 'Sunflower seeds', nodeColor: '#d1ff00',
  },
  {
    productId: '1005', productCommunity: '10', x: 2279.384033203125, y: 2668.867431640625, nodeSize: 19.13232421875, productName: 'Maize (corn) seed', nodeColor: '#d1ff00',
  },
  {
    productId: '3306', productCommunity: '4', x: 2071.039794921875, y: 2200.384033203125, nodeSize: 15.50048828125, productName: 'Dentifrices', nodeColor: '#299fff',
  },
  {
    productId: '9306', productCommunity: '4', x: 1695.0936279296875, y: 2767.96142578125, nodeSize: 15.59375, productName: 'Cartridges for rivet etc tools, humane killers, etc', nodeColor: '#299fff',
  },
  {
    productId: '4813', productCommunity: '2', x: 1371.1408081054688, y: 2070.10986328125, nodeSize: 15.1190185546875, productName: 'Paper, cigarette, in the form of booklets or tubes', nodeColor: '#9c219c',
  },
  {
    productId: '7215', productCommunity: '99', x: 2193.15576171875, y: 2604.266845703125, nodeSize: 15.46826171875, productName: 'Bar/rod, cold formed/finished free cutting steel', nodeColor: '#9c9a87',
  },
  {
    productId: '3406', productCommunity: '99', x: 2113.9189453125, y: 1994.4678344726562, nodeSize: 15.26806640625, productName: 'Candles, tapers and the like', nodeColor: '#9c9a87',
  },
  {
    productId: '3404', productCommunity: '2', x: 1346.115234375, y: 2016.1770629882812, nodeSize: 15.189697265625, productName: 'Artificial & prepared waxes, of modified lignite', nodeColor: '#9c219c',
  },
  {
    productId: '3503', productCommunity: '2', x: 1368.877197265625, y: 2430.83154296875, nodeSize: 15.0380859375, productName: 'Gelatin & derivatives, isinglass, glues (animal) nes', nodeColor: '#9c219c',
  },
  {
    productId: '4414', productCommunity: '99', x: 2106.076904296875, y: 2066.266357421875, nodeSize: 15.0048828125, productName: 'Wooden frames for paintings, photographs, mirrors etc', nodeColor: '#9c9a87',
  },
  {
    productId: '9209', productCommunity: '1', x: 1251.0845947265625, y: 2823.193359375, nodeSize: 15.0693359375, productName: 'Metronomes, tuning forks and pitch pipes', nodeColor: '#99ffff',
  },
  {
    productId: '3505', productCommunity: '1', x: 1254.461181640625, y: 2857.712890625, nodeSize: 15.36962890625, productName: 'Dextrins and other modified starches', nodeColor: '#99ffff',
  },
  {
    productId: '3212', productCommunity: '5', x: 1993.78271484375, y: 2630.140625, nodeSize: 15.195556640625, productName: 'Stamping foils', nodeColor: '#730049',
  },
  {
    productId: '3808', productCommunity: '2', x: 1372.2237548828125, y: 2407.7763671875, nodeSize: 18.639892578125, productName: 'Insecticides, packaged for retail sale', nodeColor: '#9c219c',
  },
  {
    productId: '3504', productCommunity: '2', x: 1369.1298828125, y: 2327.97021484375, nodeSize: 15.128173828125, productName: 'Peptones, proteins and derivatives, nes, hide powder', nodeColor: '#9c219c',
  },
  {
    productId: '2519', productCommunity: '3', x: 1377.600341796875, y: 2969.8824462890625, nodeSize: 15.140380859375, productName: 'Natural magnesium carbonate (magnesite)', nodeColor: '#0576a6',
  },
  {
    productId: '7227', productCommunity: '3', x: 1363.5999755859375, y: 2907.5623779296875, nodeSize: 15.537353515625, productName: 'Bar/rod, of high speed steel, irregular coils', nodeColor: '#0576a6',
  },
  {
    productId: '1504', productCommunity: '10', x: 2177.248291015625, y: 2943.758056640625, nodeSize: 15.08544921875, productName: 'Fish-liver oils, fractions, not chemically modified', nodeColor: '#d1ff00',
  },
  {
    productId: '1302', productCommunity: '5', x: 2177.7716064453125, y: 2595.88623046875, nodeSize: 15.535888671875, productName: 'Opium sap', nodeColor: '#730049',
  },
  {
    productId: '4809', productCommunity: '2', x: 1264.8963623046875, y: 2007.0305786132812, nodeSize: 15.033203125, productName: 'Paper, carbon or similar width >36 cm', nodeColor: '#9c219c',
  },
  {
    productId: '1214', productCommunity: '10', x: 1270.38037109375, y: 1951.0718994140625, nodeSize: 15.085693359375, productName: 'Lucerne (alfalfa) meal and pellets', nodeColor: '#d1ff00',
  },
  {
    productId: '1208', productCommunity: '10', x: 2729.2235107421875, y: 2815.61328125, nodeSize: 15.021240234375, productName: 'Soya bean flour or meal', nodeColor: '#d1ff00',
  },
  {
    productId: '1207', productCommunity: '10', x: 2441.5682373046875, y: 2161.522705078125, nodeSize: 15.332763671875, productName: 'Palm nuts and kernels', nodeColor: '#d1ff00',
  },
  {
    productId: '2507', productCommunity: '99', x: 1103.6075439453125, y: 1991.38037109375, nodeSize: 15.154052734375, productName: 'Kaolin and other kaolinic clays', nodeColor: '#9c9a87',
  },
  {
    productId: '2508', productCommunity: '9', x: 1952.836181640625, y: 2706.4873046875, nodeSize: 15.115966796875, productName: 'Bentonite', nodeColor: '#6e451e',
  },
  {
    productId: '2904', productCommunity: '9', x: 1949.0179443359375, y: 2742.784423828125, nodeSize: 15.03955078125, productName: 'Sulphonated hydrocarbons, salts and ethyl esters', nodeColor: '#6e451e',
  },
  {
    productId: '6813', productCommunity: '9', x: 1947.0064697265625, y: 2671.763671875, nodeSize: 15.032470703125, productName: 'Asbestos brake linings and pads', nodeColor: '#6e451e',
  },
  {
    productId: '2510', productCommunity: '9', x: 2125.8974609375, y: 1746.1142578125, nodeSize: 15.8623046875, productName: 'Natural calcium phosphates, unground', nodeColor: '#6e451e',
  },
  {
    productId: '2809', productCommunity: '9', x: 2137.3150634765625, y: 1779.1424560546875, nodeSize: 16.031005859375, productName: 'Diphosphorus pentaoxide', nodeColor: '#6e451e',
  },
  {
    productId: '2516', productCommunity: '20', x: 2090.233154296875, y: 2201.88427734375, nodeSize: 15.1435546875, productName: 'Granite, crude or roughly trimmed', nodeColor: '#330000',
  },
  {
    productId: '2517', productCommunity: '6', x: 2369.4498291015625, y: 2595.446533203125, nodeSize: 15.337158203125, productName: 'Pebbles, gravel, broken & crushed stone for aggregate', nodeColor: '#ff0000',
  },
  {
    productId: '2302', productCommunity: '10', x: 2461.7191162109375, y: 2096.2239990234375, nodeSize: 15.053466796875, productName: 'Maize bran, sharps, other residues', nodeColor: '#d1ff00',
  },
  {
    productId: '1006', productCommunity: '10', x: 2898.696044921875, y: 2655.186279296875, nodeSize: 18.2314453125, productName: 'Rice in the husk (paddy or rough)', nodeColor: '#d1ff00',
  },
  {
    productId: '6402', productCommunity: '8', x: 2747.21923828125, y: 2609.049072265625, nodeSize: 18.06201171875, productName: 'Ski-boots etc, outer soles, uppers of rubber, plastic', nodeColor: '#33cc00',
  },
  {
    productId: '3001', productCommunity: '2', x: 1371.43505859375, y: 2021.8536376953125, nodeSize: 15.174560546875, productName: 'Glands and other organs, dried, for therapeutic uses', nodeColor: '#9c219c',
  },
  {
    productId: '3909', productCommunity: '4', x: 1868.1131591796875, y: 2388.29443359375, nodeSize: 16.65869140625, productName: 'Urea resins, thiourea resins, in primary forms', nodeColor: '#299fff',
  },
  {
    productId: '2941', productCommunity: '2', x: 1190.7208251953125, y: 2397.78173828125, nodeSize: 16.75341796875, productName: 'Penicillins, derivatives, in bulk, salts', nodeColor: '#9c219c',
  },
  {
    productId: '0804', productCommunity: '7', x: 2480.261962890625, y: 2582.29052734375, nodeSize: 15.76513671875, productName: 'Dates, fresh or dried', nodeColor: '#bf8845',
  },
  {
    productId: '8451', productCommunity: '4', x: 1681.3702392578125, y: 2119.94384765625, nodeSize: 15.837890625, productName: 'Dry-cleaning machines', nodeColor: '#299fff',
  },
  {
    productId: '9608', productCommunity: '4', x: 1647.5137939453125, y: 2746.66943359375, nodeSize: 15.69482421875, productName: 'Ball point pens', nodeColor: '#299fff',
  },
  {
    productId: '5404', productCommunity: '5', x: 2000.0743408203125, y: 2660.162353515625, nodeSize: 15.03271484375, productName: 'Synthetic monofilament, >67 dtex, thickness < 1mm', nodeColor: '#730049',
  },
  {
    productId: '3302', productCommunity: '2', x: 1374.96826171875, y: 2111.7392578125, nodeSize: 17.30615234375, productName: 'Mixed odoriferous substances - food & drink industrie', nodeColor: '#9c219c',
  },
  {
    productId: '6116', productCommunity: '1', x: 1350.7249755859375, y: 2590.1201171875, nodeSize: 15.2470703125, productName: 'Gloves impregnated or coated with plastic,rubber, kni', nodeColor: '#99ffff',
  },
  {
    productId: '3005', productCommunity: '4', x: 1756.990234375, y: 2159.2894287109375, nodeSize: 15.7119140625, productName: 'Medical dressings etc. having an adhesive layer', nodeColor: '#299fff',
  },
  {
    productId: '3103', productCommunity: '2', x: 1087.527587890625, y: 2237.87353515625, nodeSize: 15.466796875, productName: 'Superphosphates, in packs >10 kg', nodeColor: '#9c219c',
  },
  {
    productId: '7508', productCommunity: '4', x: 1494.0322265625, y: 2192.110595703125, nodeSize: 15.01806640625, productName: 'Articles of nickel, nes', nodeColor: '#299fff',
  },
  {
    productId: '8420', productCommunity: '4', x: 1587.0958251953125, y: 2829.31884765625, nodeSize: 15.0400390625, productName: 'Calendering or rolling machines, not. for metals/glas', nodeColor: '#299fff',
  },
  {
    productId: '9017', productCommunity: '4', x: 1763.767578125, y: 2634.289306640625, nodeSize: 15.146728515625, productName: 'Drafting tables and machines', nodeColor: '#299fff',
  },
  {
    productId: '7113', productCommunity: '20', x: 2845.0723876953125, y: 2499.3619384765625, nodeSize: 21.661865234375, productName: 'Jewellery and parts, silver, including plated silver', nodeColor: '#330000',
  },
  {
    productId: '8464', productCommunity: '4', x: 1576.1449584960938, y: 2860.970458984375, nodeSize: 15.4039306640625, productName: 'Sawing machines for stone, ceramics and glass', nodeColor: '#299fff',
  },
  {
    productId: '3303', productCommunity: '9', x: 1711.65283203125, y: 2878.21142578125, nodeSize: 16.88232421875, productName: 'Perfumes and toilet waters', nodeColor: '#6e451e',
  },
  {
    productId: '7311', productCommunity: '8', x: 2795.7972412109375, y: 2409.4783935546875, nodeSize: 15.390380859375, productName: 'Containers for compressed/liquefied gas, iron or stee', nodeColor: '#33cc00',
  },
  {
    productId: '8447', productCommunity: '3', x: 1480.3368530273438, y: 2841.912841796875, nodeSize: 15.3612060546875, productName: 'Circular knitting machines, diameter < 165 mm', nodeColor: '#0576a6',
  },
  {
    productId: '8446', productCommunity: '4', x: 1675.175537109375, y: 2882.087890625, nodeSize: 15.128173828125, productName: 'Machines for weaving fabric, width < 30 cm', nodeColor: '#299fff',
  },
  {
    productId: '7224', productCommunity: '4', x: 1568.2637939453125, y: 2214.251708984375, nodeSize: 15.631103515625, productName: 'Ingots, primary forms of alloy steel, except stainles', nodeColor: '#299fff',
  },
  {
    productId: '4203', productCommunity: '9', x: 2062.93603515625, y: 1922.8924560546875, nodeSize: 16.16015625, productName: 'Articles of apparel of leather or composition leather', nodeColor: '#6e451e',
  },
  {
    productId: '2918', productCommunity: '2', x: 1266.4254150390625, y: 2354.597900390625, nodeSize: 15.8359375, productName: 'Lactic acid, its salts & esters', nodeColor: '#9c219c',
  },
  {
    productId: '2930', productCommunity: '2', x: 1246.4072265625, y: 2139.20849609375, nodeSize: 16.27685546875, productName: 'Dithiocarbonates (xanthates)', nodeColor: '#9c219c',
  },
  {
    productId: '1803', productCommunity: '10', x: 2799.149658203125, y: 2155.12939453125, nodeSize: 15.12060546875, productName: 'Cocoa paste not defatted', nodeColor: '#d1ff00',
  },
  {
    productId: '1805', productCommunity: '10', x: 2843.046142578125, y: 2177.836669921875, nodeSize: 15.0205078125, productName: 'Cocoa powder, unsweetened', nodeColor: '#d1ff00',
  },
  {
    productId: '6305', productCommunity: '8', x: 2552.2071533203125, y: 2403.892578125, nodeSize: 15.355224609375, productName: 'Sacks & bags, packing, of jute or other bast fibres', nodeColor: '#33cc00',
  },
  {
    productId: '7310', productCommunity: '6', x: 2352.1982421875, y: 2410.259521484375, nodeSize: 15.70068359375, productName: 'Tank, cask or container, iron/steel, capacity 50-300l', nodeColor: '#ff0000',
  },
  {
    productId: '3401', productCommunity: '6', x: 2464.429931640625, y: 2348.8509521484375, nodeSize: 15.76123046875, productName: 'Soaps, for toilet use, solid', nodeColor: '#ff0000',
  },
  {
    productId: '4819', productCommunity: '6', x: 2426.638916015625, y: 2408.416748046875, nodeSize: 17.64794921875, productName: 'Cartons, boxes & cases, of corrugated paper or board', nodeColor: '#ff0000',
  },
  {
    productId: '1704', productCommunity: '7', x: 2451.9852294921875, y: 2406.336669921875, nodeSize: 16.088134765625, productName: 'Chewing gum containing sugar, except medicinal', nodeColor: '#bf8845',
  },
  {
    productId: '2001', productCommunity: '7', x: 2442.1455078125, y: 2346.549072265625, nodeSize: 15.09423828125, productName: 'Cucumbers,gherkins, prepared or preserved by vinegar', nodeColor: '#bf8845',
  },
  {
    productId: '4818', productCommunity: '6', x: 2331.7562255859375, y: 2396.928955078125, nodeSize: 17.970458984375, productName: 'Toilet paper', nodeColor: '#ff0000',
  },
  {
    productId: '8418', productCommunity: '6', x: 2286.6507568359375, y: 2395.37744140625, nodeSize: 20.997314453125, productName: 'Combined refrigerator-freezers, two door', nodeColor: '#ff0000',
  },
  {
    productId: '4811', productCommunity: '4', x: 1835.9437255859375, y: 2361.204833984375, nodeSize: 17.619873046875, productName: 'Paper, tarred, bituminised or asphalted, nes', nodeColor: '#299fff',
  },
  {
    productId: '3912', productCommunity: '2', x: 1359.1842651367188, y: 2181.90869140625, nodeSize: 15.5733642578125, productName: 'Cellulose acetates, non-plasticised, in primary forms', nodeColor: '#9c219c',
  },
  {
    productId: '3403', productCommunity: '2', x: 1323.5775756835938, y: 2243.804931640625, nodeSize: 15.8436279296875, productName: 'Lubricant <70% petroleum oil, textile or leather use', nodeColor: '#9c219c',
  },
  {
    productId: '2914', productCommunity: '2', x: 1246.4838256835938, y: 2212.060302734375, nodeSize: 15.7808837890625, productName: 'Acetone', nodeColor: '#9c219c',
  },
  {
    productId: '8414', productCommunity: '4', x: 1762.558349609375, y: 2495.295654296875, nodeSize: 24.205078125, productName: 'Vacuum pumps', nodeColor: '#299fff',
  },
  {
    productId: '9003', productCommunity: '3', x: 1443.576904296875, y: 2838.433837890625, nodeSize: 15.51806640625, productName: 'Frames & mountings for spectacles etc, of plastic', nodeColor: '#0576a6',
  },
  {
    productId: '9004', productCommunity: '3', x: 1489.6572875976562, y: 2904.741943359375, nodeSize: 15.7530517578125, productName: 'Sunglasses', nodeColor: '#0576a6',
  },
  {
    productId: '8511', productCommunity: '4', x: 1802.4133911132812, y: 2482.388427734375, nodeSize: 17.2659912109375, productName: 'Spark plugs', nodeColor: '#299fff',
  },
  {
    productId: '8710', productCommunity: '4', x: 1731.7376708984375, y: 2786.37841796875, nodeSize: 15.29052734375, productName: 'Tanks and other armoured fighting vehicles', nodeColor: '#299fff',
  },
  {
    productId: '8802', productCommunity: '4', x: 1760.65869140625, y: 2880.84033203125, nodeSize: 34.047119140625, productName: 'Helicopters of an unladen weight < 2,000 kg', nodeColor: '#299fff',
  },
  {
    productId: '8803', productCommunity: '3', x: 1330.2973022460938, y: 2937.18359375, nodeSize: 25.6973876953125, productName: 'Aircraft propellers, rotors and parts thereof', nodeColor: '#0576a6',
  },
  {
    productId: '8907', productCommunity: '4', x: 1694.58349609375, y: 1979.3153076171875, nodeSize: 15.029296875, productName: 'Inflatable rafts', nodeColor: '#299fff',
  },
  {
    productId: '9114', productCommunity: '3', x: 1368.5391845703125, y: 2757.221435546875, nodeSize: 15.093017578125, productName: 'Clock or watch springs, including hair-springs', nodeColor: '#0576a6',
  },
  {
    productId: '8602', productCommunity: '4', x: 1872.0128173828125, y: 2694.4833984375, nodeSize: 15.236572265625, productName: 'Rail locomotives, diesel-electric', nodeColor: '#299fff',
  },
  {
    productId: '8906', productCommunity: '4', x: 1899.8084716796875, y: 2709.697998046875, nodeSize: 15.2763671875, productName: 'Warships, lifeboats, hospital ships, vessels nes', nodeColor: '#299fff',
  },
  {
    productId: '8709', productCommunity: '4', x: 1838.5874633789062, y: 2607.142578125, nodeSize: 15.0902099609375, productName: 'Work trucks, electrically powered', nodeColor: '#299fff',
  },
  {
    productId: '2804', productCommunity: '20', x: 1740.1400146484375, y: 2070.2269287109375, nodeSize: 17.395263671875, productName: 'Hydrogen', nodeColor: '#330000',
  },
  {
    productId: '4902', productCommunity: '6', x: 2181.2432861328125, y: 2511.597412109375, nodeSize: 15.955810546875, productName: 'Newspapers, journals and periodicals, > 3 issues/week', nodeColor: '#ff0000',
  },
  {
    productId: '7605', productCommunity: '99', x: 1544.101318359375, y: 2150.6884765625, nodeSize: 15.394775390625, productName: 'Wire, aluminium, not alloyed, t > 7mm', nodeColor: '#9c9a87',
  },
  {
    productId: '6804', productCommunity: '4', x: 1672.7596435546875, y: 2307.129638671875, nodeSize: 15.412109375, productName: 'Stones for milling, grinding or pulping', nodeColor: '#299fff',
  },
  {
    productId: '6212', productCommunity: '8', x: 2740.3447265625, y: 2356.3800048828125, nodeSize: 16.15869140625, productName: 'Brassieres and parts thereof', nodeColor: '#33cc00',
  },
  {
    productId: '6405', productCommunity: '8', x: 2565.3685302734375, y: 2336.989990234375, nodeSize: 15.248291015625, productName: 'Footwear, nes, uppers leather', nodeColor: '#33cc00',
  },
  {
    productId: '6210', productCommunity: '8', x: 2706.94580078125, y: 2356.308837890625, nodeSize: 15.94970703125, productName: 'Garments made up of textile felts and nonwoven fabric', nodeColor: '#33cc00',
  },
  {
    productId: '6211', productCommunity: '8', x: 2649.052734375, y: 2296.613525390625, nodeSize: 16.2353515625, productName: 'Mens, boys swimwear, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6206', productCommunity: '8', x: 2713.657958984375, y: 2324.5753173828125, nodeSize: 16.64208984375, productName: 'Womens, girls blouses & shirts, of silk, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6208', productCommunity: '8', x: 2573.0357666015625, y: 2386.66845703125, nodeSize: 15.240478515625, productName: 'Womens, girls slips etc, of manmade fibres, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6201', productCommunity: '8', x: 2608.5906982421875, y: 2283.200439453125, nodeSize: 16.300048828125, productName: 'Mens, boys overcoats of wool or hair, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6205', productCommunity: '8', x: 2700.8421630859375, y: 2420.220703125, nodeSize: 16.882568359375, productName: 'Mens, boys shirts, of wool or hair, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '8402', productCommunity: '4', x: 1999.0296630859375, y: 2205.923583984375, nodeSize: 15.919189453125, productName: 'Water tube boilers, steam production < 45T per hour', nodeColor: '#299fff',
  },
  {
    productId: '9102', productCommunity: '9', x: 2827.2899169921875, y: 2793.72900390625, nodeSize: 17.438720703125, productName: 'Wrist-watch, base-metal case, battery, with hands', nodeColor: '#6e451e',
  },
  {
    productId: '8306', productCommunity: '9', x: 2795.711181640625, y: 2777.660888671875, nodeSize: 15.150390625, productName: 'Bells, gongs and the like, of base metal', nodeColor: '#6e451e',
  },
  {
    productId: '9032', productCommunity: '4', x: 1634.691650390625, y: 2421.40380859375, nodeSize: 19.140625, productName: 'Thermostats', nodeColor: '#299fff',
  },
  {
    productId: '8439', productCommunity: '4', x: 1481.4229736328125, y: 2402.36572265625, nodeSize: 15.80615234375, productName: 'Machinery for pulping fibrous cellulosic material', nodeColor: '#299fff',
  },
  {
    productId: '8424', productCommunity: '4', x: 1596.6546630859375, y: 2418.3720703125, nodeSize: 17.359130859375, productName: 'Fire extinguishers, whether or not charged', nodeColor: '#299fff',
  },
  {
    productId: '6406', productCommunity: '8', x: 2667.5965576171875, y: 2272.576171875, nodeSize: 15.836669921875, productName: 'Footwear uppers and parts thereof, except stiffeners', nodeColor: '#33cc00',
  },
  {
    productId: '9401', productCommunity: '4', x: 2067.5927734375, y: 2351.282958984375, nodeSize: 23.50830078125, productName: 'Seats, aircraft', nodeColor: '#299fff',
  },
  {
    productId: '8546', productCommunity: '4', x: 2029.3814086914062, y: 2339.94482421875, nodeSize: 15.2147216796875, productName: 'Electrical insulators of glass', nodeColor: '#299fff',
  },
  {
    productId: '8431', productCommunity: '4', x: 1959.3739013671875, y: 2327.4033203125, nodeSize: 25.504638671875, productName: 'Parts of hoists and winches', nodeColor: '#299fff',
  },
  {
    productId: '4001', productCommunity: '10', x: 2841.31298828125, y: 2238.3165283203125, nodeSize: 17.75634765625, productName: 'Natural rubber latex, including prevulcanised', nodeColor: '#d1ff00',
  },
  {
    productId: '1513', productCommunity: '10', x: 2875.6650390625, y: 2208.30615234375, nodeSize: 15.68798828125, productName: 'Coconut (copra) oil crude', nodeColor: '#d1ff00',
  },
  {
    productId: '8536', productCommunity: '4', x: 1971.0999755859375, y: 2365.938232421875, nodeSize: 26.74951171875, productName: 'Electrical fuses, for < 1,000 volts', nodeColor: '#299fff',
  },
  {
    productId: '8468', productCommunity: '4', x: 1704.451904296875, y: 2297.7177734375, nodeSize: 15.07275390625, productName: 'Torches, hand-held, for soldering/brazing/welding', nodeColor: '#299fff',
  },
  {
    productId: '8302', productCommunity: '4', x: 1936.3009033203125, y: 2358.376708984375, nodeSize: 18.747802734375, productName: 'Hinges of base metal', nodeColor: '#299fff',
  },
  {
    productId: '8301', productCommunity: '4', x: 1929.064453125, y: 2295.482177734375, nodeSize: 16.421630859375, productName: 'Padlocks of base metal', nodeColor: '#299fff',
  },
  {
    productId: '4016', productCommunity: '4', x: 1859.6495361328125, y: 2324.9736328125, nodeSize: 17.93408203125, productName: 'Articles of cellular rubber', nodeColor: '#299fff',
  },
  {
    productId: '4008', productCommunity: '4', x: 1862.3887329101562, y: 2351.7255859375, nodeSize: 15.4229736328125, productName: 'Plate, sheet, strip of vulcanised cellular rubber', nodeColor: '#299fff',
  },
  {
    productId: '4005', productCommunity: '4', x: 1866.7648315429688, y: 2448.66943359375, nodeSize: 15.8497314453125, productName: 'Compounded (carbon black, silica) unvulcanised rubber', nodeColor: '#299fff',
  },
  {
    productId: '9405', productCommunity: '4', x: 1892.6507568359375, y: 2325.7314453125, nodeSize: 19.22607421875, productName: 'Chandeliers, other electric ceiling or wall lights', nodeColor: '#299fff',
  },
  {
    productId: '7307', productCommunity: '4', x: 1759.225341796875, y: 2338.48095703125, nodeSize: 17.914306640625, productName: 'Pipe fittings of non-malleable cast iron', nodeColor: '#299fff',
  },
  {
    productId: '7009', productCommunity: '4', x: 1722.2648315429688, y: 2523.227294921875, nodeSize: 15.4732666015625, productName: 'Rear-view mirrors for vehicles', nodeColor: '#299fff',
  },
  {
    productId: '6111', productCommunity: '8', x: 2692.9534912109375, y: 2396.059814453125, nodeSize: 15.755126953125, productName: 'Babies garments, accessories of wool or hair, knit', nodeColor: '#33cc00',
  },
  {
    productId: '8434', productCommunity: '4', x: 1941.103515625, y: 2470.043701171875, nodeSize: 15.164794921875, productName: 'Milking machines', nodeColor: '#299fff',
  },
  {
    productId: '4810', productCommunity: '4', x: 1472.3936767578125, y: 2344.115966796875, nodeSize: 20.182861328125, productName: 'Paper, fine, woodfree, <150 g/m2, clay coated', nodeColor: '#299fff',
  },
  {
    productId: '3821', productCommunity: '2', x: 1315.8085327148438, y: 2157.5823974609375, nodeSize: 15.0057373046875, productName: 'Prepared culture media for developing micro-organisms', nodeColor: '#9c219c',
  },
  {
    productId: '8438', productCommunity: '4', x: 1978.581787109375, y: 2390.8173828125, nodeSize: 16.612548828125, productName: 'Bakery and pasta making machinery', nodeColor: '#299fff',
  },
  {
    productId: '4009', productCommunity: '4', x: 1777.5906372070312, y: 2363.612060546875, nodeSize: 16.0736083984375, productName: 'Rubber tube, pipe or hose not reinforced, no fittings', nodeColor: '#299fff',
  },
  {
    productId: '3305', productCommunity: '5', x: 2083.7349853515625, y: 2444.965576171875, nodeSize: 16.375244140625, productName: 'Hair shampoos', nodeColor: '#730049',
  },
  {
    productId: '8903', productCommunity: '4', x: 2033.8617553710938, y: 2384.279296875, nodeSize: 17.3138427734375, productName: 'Inflatable pleasure craft', nodeColor: '#299fff',
  },
  {
    productId: '8701', productCommunity: '4', x: 1822.7393798828125, y: 2463.754638671875, nodeSize: 23.170166015625, productName: 'Pedestrian controlled tractors', nodeColor: '#299fff',
  },
  {
    productId: '9406', productCommunity: '6', x: 2243.2716064453125, y: 2364.570068359375, nodeSize: 16.149169921875, productName: 'Prefabricated buildings', nodeColor: '#ff0000',
  },
  {
    productId: '7411', productCommunity: '4', x: 1455.654052734375, y: 2412.1875, nodeSize: 16.11181640625, productName: 'Pipes or tubes, refined copper', nodeColor: '#299fff',
  },
  {
    productId: '7320', productCommunity: '4', x: 1990.6207275390625, y: 2312.301513671875, nodeSize: 15.737548828125, productName: 'Leaf springs/leaves thereof, iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '4010', productCommunity: '4', x: 1804.077392578125, y: 2337.20947265625, nodeSize: 15.693115234375, productName: 'Transmission belts etc, rubber, trapezoidal', nodeColor: '#299fff',
  },
  {
    productId: '5703', productCommunity: '8', x: 2767.204833984375, y: 2686.64794921875, nodeSize: 15.84228515625, productName: 'Carpets of wool or fine animal hair, tufted', nodeColor: '#33cc00',
  },
  {
    productId: '6204', productCommunity: '8', x: 2686.6240234375, y: 2340.790283203125, nodeSize: 22.95751953125, productName: 'Womens, girls suits, of wool or hair, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '6209', productCommunity: '8', x: 2739.2376708984375, y: 2393.783935546875, nodeSize: 15.253662109375, productName: 'Babies garments, accessories of wool or hair, not kni', nodeColor: '#33cc00',
  },
  {
    productId: '1101', productCommunity: '10', x: 2472.66162109375, y: 2234.08251953125, nodeSize: 15.58935546875, productName: 'Wheat or meslin flour', nodeColor: '#d1ff00',
  },
  {
    productId: '2523', productCommunity: '6', x: 2489.080078125, y: 2358.265869140625, nodeSize: 16.82958984375, productName: 'Cement clinkers', nodeColor: '#ff0000',
  },
  {
    productId: '1205', productCommunity: '10', x: 2018.63720703125, y: 2689.62646484375, nodeSize: 16.2216796875, productName: 'Rape or colza seeds', nodeColor: '#d1ff00',
  },
  {
    productId: '8403', productCommunity: '4', x: 1805.34912109375, y: 2534.47265625, nodeSize: 15.952392578125, productName: 'Central heating boilers nes', nodeColor: '#299fff',
  },
  {
    productId: '1211', productCommunity: '8', x: 2619.3359375, y: 2326.3642578125, nodeSize: 15.14501953125, productName: 'Liquorice roots', nodeColor: '#33cc00',
  },
  {
    productId: '6203', productCommunity: '8', x: 2589.8084716796875, y: 2313.7322998046875, nodeSize: 20.844482421875, productName: 'Mens, boys suits, of wool or hair, not knit', nodeColor: '#33cc00',
  },
  {
    productId: '1514', productCommunity: '10', x: 2033.3966064453125, y: 2658.560546875, nodeSize: 15.7783203125, productName: 'Canola, rape, colza or mustard oil, crude', nodeColor: '#d1ff00',
  },
  {
    productId: '3214', productCommunity: '5', x: 2005.08203125, y: 2435.0419921875, nodeSize: 15.883544921875, productName: 'Mastics, painters fillings', nodeColor: '#730049',
  },
  {
    productId: '2834', productCommunity: '99', x: 2022.4401245117188, y: 2832.603515625, nodeSize: 15.0723876953125, productName: 'Nitrites of metals', nodeColor: '#9c9a87',
  },
  {
    productId: '2833', productCommunity: '9', x: 1939.7711181640625, y: 2786.989990234375, nodeSize: 15.412109375, productName: 'Disodium sulphate', nodeColor: '#6e451e',
  },
  {
    productId: '4602', productCommunity: '8', x: 2796.8453369140625, y: 2313.2530517578125, nodeSize: 15.089111328125, productName: 'Basketwork, wickerwork products of vegetable material', nodeColor: '#33cc00',
  },
  {
    productId: '0802', productCommunity: '10', x: 2370.9547119140625, y: 2656.276123046875, nodeSize: 16.146728515625, productName: 'Almonds in shell fresh or dried', nodeColor: '#d1ff00',
  },
  {
    productId: '2520', productCommunity: '99', x: 2388.1588134765625, y: 2672.6798095703125, nodeSize: 15.029052734375, productName: 'Gypsum, anhydride', nodeColor: '#9c9a87',
  },
  {
    productId: '4102', productCommunity: '10', x: 2352.04052734375, y: 2621.5458984375, nodeSize: 15.0, productName: 'Sheep or lamb skins, raw, wool on, except Persian etc', nodeColor: '#d1ff00',
  },
  {
    productId: '0901', productCommunity: '10', x: 2065.4847412109375, y: 2917.8740234375, nodeSize: 18.141357421875, productName: 'Coffee, not roasted, not decaffeinated', nodeColor: '#d1ff00',
  },
  {
    productId: '4801', productCommunity: '99', x: 1434.4677734375, y: 2389.826904296875, nodeSize: 16.588623046875, productName: 'Newsprint', nodeColor: '#9c9a87',
  },
  {
    productId: '7110', productCommunity: '20', x: 1040.3050537109375, y: 2127.9300537109375, nodeSize: 20.118408203125, productName: 'Platinum unwrought or in powder form', nodeColor: '#330000',
  },
  {
    productId: '2822', productCommunity: '20', x: 997.9098205566406, y: 2125.124267578125, nodeSize: 15.01409912109375, productName: 'Cobalt oxides and hydroxides', nodeColor: '#330000',
  },
  {
    productId: '2841', productCommunity: '20', x: 1765.4542236328125, y: 2096.1671142578125, nodeSize: 15.11328125, productName: 'Metallic aluminates', nodeColor: '#330000',
  },
  {
    productId: '2825', productCommunity: '20', x: 1775.1072998046875, y: 2043.2745361328125, nodeSize: 15.597900390625, productName: 'Hydrazine and hydroxylamine, inorganic salts', nodeColor: '#330000',
  },
  {
    productId: '5403', productCommunity: '4', x: 1515.6409912109375, y: 2695.4248046875, nodeSize: 15.068603515625, productName: 'Hi-ten yarn not sewing, viscose rayon, not retail', nodeColor: '#299fff',
  },
  {
    productId: '2826', productCommunity: '4', x: 1504.0418701171875, y: 2737.715087890625, nodeSize: 15.006591796875, productName: 'Fluorides of ammonium or of sodium', nodeColor: '#299fff',
  },
  {
    productId: '2836', productCommunity: '2', x: 1113.8387451171875, y: 2044.60595703125, nodeSize: 15.763671875, productName: 'Ammonium carbonate (including commercial)', nodeColor: '#9c219c',
  },
  {
    productId: '2827', productCommunity: '2', x: 1144.2525634765625, y: 2080.22119140625, nodeSize: 15.1884765625, productName: 'Ammonium chloride', nodeColor: '#9c219c',
  },
  {
    productId: '7305', productCommunity: '4', x: 1599.6593017578125, y: 2188.8876953125, nodeSize: 17.199462890625, productName: 'Pipe-line submerged arc welded steel diameter >406mm', nodeColor: '#299fff',
  },
  {
    productId: '7201', productCommunity: '4', x: 1595.0040283203125, y: 2154.628173828125, nodeSize: 16.21923828125, productName: 'Pig iron, non-alloy, <0.5% phosphorus', nodeColor: '#299fff',
  },
  {
    productId: '7209', productCommunity: '20', x: 2196.7381591796875, y: 2009.401123046875, nodeSize: 18.392333984375, productName: 'Cold rolled iron or non-alloy steel, coil, width >600mm, t >3mm, 355 mp', nodeColor: '#330000',
  },
  {
    productId: '7202', productCommunity: '20', x: 2228.2681884765625, y: 1973.2870483398438, nodeSize: 21.199951171875, productName: 'Ferro-manganese, >2% carbon', nodeColor: '#330000',
  },
  {
    productId: '7207', productCommunity: '4', x: 1560.390869140625, y: 2127.793212890625, nodeSize: 22.220458984375, productName: 'Rectangular iron or non-alloy steel bars, <.25%C, width< twice thicknes', nodeColor: '#299fff',
  },
  {
    productId: '7205', productCommunity: '4', x: 1783.4306030273438, y: 2718.2705078125, nodeSize: 15.1763916015625, productName: 'Granules of pig iron or spiegeleisen', nodeColor: '#299fff',
  },
  {
    productId: '7301', productCommunity: '4', x: 1822.1431884765625, y: 2781.37158203125, nodeSize: 15.2421875, productName: 'Sheet piling of iron or steel', nodeColor: '#299fff',
  },
  {
    productId: '7210', productCommunity: '20', x: 2249.2357177734375, y: 2026.24658203125, nodeSize: 22.632568359375, productName: 'Flat rolled iron or non-alloy steel, coated with tin, w >600mm, t >0.5m', nodeColor: '#330000',
  },
  {
    productId: '7214', productCommunity: '4', x: 2206.5992431640625, y: 2198.289794921875, nodeSize: 19.868896484375, productName: 'Bar/rod, iron or non-alloy steel, forged', nodeColor: '#299fff',
  },
  {
    productId: '7213', productCommunity: '4', x: 2207.193115234375, y: 2160.165771484375, nodeSize: 17.4013671875, productName: 'Hot rolled bar/rod grooved iron or non-alloy steel in irregular coils', nodeColor: '#299fff',
  },
  {
    productId: '3405', productCommunity: '5', x: 2052.8319091796875, y: 2475.616943359375, nodeSize: 15.139404296875, productName: 'Polishes, creams etc. for footwear or leather', nodeColor: '#730049',
  },
  {
    productId: '4201', productCommunity: '9', x: 2016.8678588867188, y: 1938.8366088867188, nodeSize: 15.0123291015625, productName: 'Saddlery and harness, of any material', nodeColor: '#6e451e',
  },
  {
    productId: '2803', productCommunity: '20', x: 1544.5556030273438, y: 2201.7705078125, nodeSize: 15.4254150390625, productName: 'Carbon (carbon blacks and other forms of carbon, nes)', nodeColor: '#330000',
  },
  {
    productId: '6807', productCommunity: '4', x: 1929.0977783203125, y: 2666.99755859375, nodeSize: 15.197509765625, productName: 'Asphalt or similar material articles, in rolls', nodeColor: '#299fff',
  },
  {
    productId: '2715', productCommunity: '20', x: 1932.0692749023438, y: 2711.39111328125, nodeSize: 15.0347900390625, productName: 'Bituminous mix, mastic from asphalt, bitumen/tar/pitc', nodeColor: '#330000',
  },
  {
    productId: '2714', productCommunity: '20', x: 1929.0508422851562, y: 2757.8603515625, nodeSize: 15.0181884765625, productName: 'Bituminous or oil shale and tar sands', nodeColor: '#330000',
  },
  {
    productId: '7408', productCommunity: '20', x: 2193.757080078125, y: 1948.178955078125, nodeSize: 18.53857421875, productName: 'Wire of refined copper > 6mm wide', nodeColor: '#330000',
  },
  {
    productId: '3901', productCommunity: '99', x: 2101.0047607421875, y: 1870.976318359375, nodeSize: 24.498779296875, productName: 'Polyethylene - specific gravity <0.94 in primary form', nodeColor: '#9c9a87',
  },
  {
    productId: '2713', productCommunity: '20', x: 2154.2921142578125, y: 1926.3544921875, nodeSize: 17.673095703125, productName: 'Petroleum coke, not calcined', nodeColor: '#330000',
  },
  {
    productId: '6912', productCommunity: '4', x: 2082.274169921875, y: 2098.98193359375, nodeSize: 15.16943359375, productName: 'Ceramic housewares, except of porcelain or china', nodeColor: '#299fff',
  },
  {
    productId: '8905', productCommunity: '99', x: 2025.0899658203125, y: 2050.7566528320312, nodeSize: 18.29638671875, productName: 'Dredgers', nodeColor: '#9c9a87',
  },
  {
    productId: '4015', productCommunity: '1', x: 1277.1212158203125, y: 2805.4853515625, nodeSize: 15.57177734375, productName: 'Rubber surgical gloves', nodeColor: '#99ffff',
  },
  {
    productId: '4101', productCommunity: '10', x: 2342.4407958984375, y: 2577.6854248046875, nodeSize: 15.516845703125, productName: 'Bovine skins, whole, raw', nodeColor: '#d1ff00',
  },
  {
    productId: '4105', productCommunity: '10', x: 2344.4862060546875, y: 2653.6187744140625, nodeSize: 15.079345703125, productName: 'Sheep or lamb skin leather, vegetable pre-tanned', nodeColor: '#d1ff00',
  },
  {
    productId: '4104', productCommunity: '10', x: 2767.85546875, y: 2241.108642578125, nodeSize: 17.4658203125, productName: 'Bovine skin leather, whole', nodeColor: '#d1ff00',
  },
  {
    productId: '4107', productCommunity: '10', x: 2753.406494140625, y: 2281.5966796875, nodeSize: 15.021484375, productName: 'Swine leather', nodeColor: '#d1ff00',
  },
  {
    productId: '7108', productCommunity: '20', x: 2316.313720703125, y: 2718.5716552734375, nodeSize: 36.7177734375, productName: 'Gold powder non-monetary', nodeColor: '#330000',
  },
  {
    productId: '4705', productCommunity: '99', x: 1310.896728515625, y: 1970.144287109375, nodeSize: 15.10888671875, productName: 'Semi-chemical wood pulp', nodeColor: '#9c9a87',
  },
  {
    productId: '9402', productCommunity: '4', x: 1508.0673828125, y: 2267.46533203125, nodeSize: 15.3115234375, productName: 'Dentists, barbers or similar chairs and parts', nodeColor: '#299fff',
  },
  {
    productId: '6214', productCommunity: '9', x: 2008.9884643554688, y: 1891.512451171875, nodeSize: 15.2130126953125, productName: 'Shawls, scarves, etc, of silk etc, not knit', nodeColor: '#6e451e',
  },
  {
    productId: '5105', productCommunity: '9', x: 2042.1553344726562, y: 1838.6209106445312, nodeSize: 15.1156005859375, productName: 'Carded wool', nodeColor: '#6e451e',
  },
  {
    productId: '4302', productCommunity: '4', x: 2130.7073974609375, y: 2292.57568359375, nodeSize: 15.071044921875, productName: 'Tanned or dressed mink furskins, whole, unassembled', nodeColor: '#299fff',
  },
  {
    productId: '9113', productCommunity: '3', x: 1403.560791015625, y: 2786.246826171875, nodeSize: 15.02099609375, productName: 'Watch straps etc & parts, of/clad with precious metal', nodeColor: '#0576a6',
  },
  {
    productId: '4202', productCommunity: '3', x: 1416.61181640625, y: 2845.407958984375, nodeSize: 20.2587890625, productName: 'Trunks, suit-cases/etc, outer surface leather', nodeColor: '#0576a6',
  },
  {
    productId: '5510', productCommunity: '9', x: 2062.9537353515625, y: 1963.8173217773438, nodeSize: 15.045166015625, productName: 'Yarn >85% artificial staple fibres, single, not retai', nodeColor: '#6e451e',
  },
  {
    productId: '4303', productCommunity: '9', x: 2056.3994140625, y: 1873.6300659179688, nodeSize: 15.0693359375, productName: 'Articles of apparel & clothing accessories of furskin', nodeColor: '#6e451e',
  },
  {
    productId: '4412', productCommunity: '20', x: 2301.6556396484375, y: 2112.003662109375, nodeSize: 16.844970703125, productName: 'Plywood 1 or 2 outer ply tropical hardwood (ply <6 mm', nodeColor: '#330000',
  },
  {
    productId: '4407', productCommunity: '20', x: 2268.703857421875, y: 2155.086669921875, nodeSize: 19.67626953125, productName: 'Lumber, coniferous (softwood) thickness < 6 mm', nodeColor: '#330000',
  },
];
export default nodes;
