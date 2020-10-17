const nodes = [
  {
    productId: '6932', productCommunity: '999', x: 4551.899658203125, y: 2540.087158203125, nodeSize: 48.78076171875, leamerCategory: '8', productName: 'WIRE,TWISTED HOOP FOR FENCING OF IRON OR STEEL', nodeColor: '#9c9a87',
  },
  {
    productId: '7362', productCommunity: '10', x: 216.83509826660156, y: 5013.330810546875, nodeSize: 65.18072509765625, leamerCategory: '9', productName: 'METAL FORMING MACHINE TOOLS', nodeColor: '#4037ab',
  },
  {
    productId: '7911', productCommunity: '10', x: 538.9149017333984, y: 5650.589111328125, nodeSize: 53.997589111328125, leamerCategory: '9', productName: 'RAIL LOCOMOTIVES,ELECTRIC', nodeColor: '#4037ab',
  },
  {
    productId: '8946', productCommunity: '10', x: 696.3942565917969, y: 5316.89794921875, nodeSize: 57.69525146484375, leamerCategory: '7', productName: 'NON-MILITARY ARMS AND AMMUNITION THEREFOR', nodeColor: '#4037ab',
  },
  {
    productId: '7264', productCommunity: '10', x: 57.28406524658203, y: 5879.528076171875, nodeSize: 73.33326721191406, leamerCategory: '9', productName: 'PRINTING PRESSES', nodeColor: '#4037ab',
  },
  {
    productId: '2783', productCommunity: '219', x: 4662.250244140625, y: 2529.338134765625, nodeSize: 58.33447265625, leamerCategory: '2', productName: 'COMMON SALT;ROCK SAT,SEA SALT;PUR.SODIUM CHRLORIDE', nodeColor: '#ffc86c',
  },
  {
    productId: '7272', productCommunity: '10', x: 630.6573181152344, y: 3553.82763671875, nodeSize: 65.62896728515625, leamerCategory: '9', productName: 'OTHER FOOD PROCESSING MACHINERY AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '6851', productCommunity: '219', x: 4717.369873046875, y: 2602.583740234375, nodeSize: 58.21435546875, leamerCategory: '2', productName: 'LEAD AND LEAD ALLOYS,UNWROUGHT', nodeColor: '#ffc86c',
  },
  {
    productId: '7411', productCommunity: '10', x: -24.038360595703125, y: 5114.9736328125, nodeSize: 55.46746826171875, leamerCategory: '9', productName: 'PRODUCER GAS AND WATER GAS GENERATORS AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '8812', productCommunity: '10', x: -97.44848251342773, y: 5337.502685546875, nodeSize: 55.168190002441406, leamerCategory: '9', productName: 'CINEMATOGRAPHIC CAMERAS,PROJECTORS,SOUND-REC,PAR', nodeColor: '#4037ab',
  },
  {
    productId: '6421', productCommunity: '80', x: 3920.452392578125, y: 3728.563720703125, nodeSize: 82.1201171875, leamerCategory: '3', productName: 'BOXES,BAGS & OTH.PACKING CONTAINERS,OF PAPER/PAPBD', nodeColor: '#ff0062',
  },
  {
    productId: '6793', productCommunity: '10', x: 2111.119384765625, y: 5280.899169921875, nodeSize: 58.4931640625, leamerCategory: '8', productName: 'STEEL & IRON FORGINGS & STAMPINGS,IN ROUGH STATE', nodeColor: '#4037ab',
  },
  {
    productId: '6514', productCommunity: '160', x: 3836.8489990234375, y: 4794.1787109375, nodeSize: 99.473876953125, leamerCategory: '8', productName: 'YARN CONTAIN.85% BY WGT.OF SYNTH.FIBRES,NOT F.SALE', nodeColor: '#c4af78',
  },
  {
    productId: '0620', productCommunity: '80', x: 3993.89599609375, y: 3945.6693115234375, nodeSize: 61.291015625, leamerCategory: '4', productName: 'SUGAR CONFECTIONERY AND OTHER SUGAR PREPARATIONS', nodeColor: '#ff0062',
  },
  {
    productId: '0488', productCommunity: '229', x: 3239.2579345703125, y: 3501.486083984375, nodeSize: 60.940185546875, leamerCategory: '6', productName: 'MALT EXTRACT;PREP.OF FLOUR ETC,FOR INFANT FOOD', nodeColor: '#78b83d',
  },
  {
    productId: '7842', productCommunity: '10', x: 1701.95947265625, y: 4939.607177734375, nodeSize: 60.70166015625, leamerCategory: '9', productName: 'BODIES FOR THE MOTOR VEHICLES OF 722/781/782/783', nodeColor: '#4037ab',
  },
  {
    productId: '7861', productCommunity: '60', x: 3093.4766845703125, y: 3807.48779296875, nodeSize: 61.731689453125, leamerCategory: '9', productName: 'TRAILERS & SPECIALLY DESIGNED CONTAINERS', nodeColor: '#473b1c',
  },
  {
    productId: '0224', productCommunity: '231', x: 3276.744140625, y: 3900.6683349609375, nodeSize: 80.77685546875, leamerCategory: '5', productName: 'MILK & CREAM,PRESERVED,CONCENTRATED OR SWEETENED', nodeColor: '#223f59',
  },
  {
    productId: '7428', productCommunity: '10', x: 88.70946311950684, y: 4916.689208984375, nodeSize: 80.3497200012207, leamerCategory: '9', productName: 'OTHER PUMPS FOR LIQUIDS & LIQUID ELEVATORS', nodeColor: '#4037ab',
  },
  {
    productId: '6624', productCommunity: '60', x: 4239.05419921875, y: 4371.881591796875, nodeSize: 81.0673828125, leamerCategory: '7', productName: 'NON-REFRACT.CERAMIC BRICKS,TILES,PIPES & SIM.PROD.', nodeColor: '#473b1c',
  },
  {
    productId: '7649', productCommunity: '180', x: -1089.8089904785156, y: 2818.976806640625, nodeSize: 159.11859130859375, leamerCategory: '9', productName: 'PARTS OF APPARATUS OF DIVISION 76-', nodeColor: '#ff6bb0',
  },
  {
    productId: '7788', productCommunity: '180', x: -1003.8235473632812, y: 3072.441650390625, nodeSize: 146.3590087890625, leamerCategory: '9', productName: 'OTHER ELECT.MACHINERY AND EQUIPMENT', nodeColor: '#ff6bb0',
  },
  {
    productId: '7239', productCommunity: '10', x: 1805.5106201171875, y: 4179.5546875, nodeSize: 64.279541015625, leamerCategory: '9', productName: 'PARTS OF THE MACHINERY OF 723.41 TO 723.46', nodeColor: '#4037ab',
  },
  {
    productId: '7267', productCommunity: '10', x: 85.83207702636719, y: 4679.02783203125, nodeSize: 59.221038818359375, leamerCategory: '9', productName: 'OTHER PRINTING MACH.FOR USES ANCILLARY TO PRINTING', nodeColor: '#4037ab',
  },
  {
    productId: '7528', productCommunity: '180', x: -871.4865417480469, y: 3211.645263671875, nodeSize: 107.63360595703125, leamerCategory: '9', productName: 'OFF-LINE DATA PROCESSING EQUIPMENT.  N.E.S.', nodeColor: '#ff6bb0',
  },
  {
    productId: '0360', productCommunity: '240', x: 5449.73583984375, y: 2931.081787109375, nodeSize: 109.2177734375, leamerCategory: '5', productName: 'CRUSTACEANS AND MOLLUSCS,FRESH,CHILLED,FROZEN ETC', nodeColor: '#8c94d1',
  },
  {
    productId: '0350', productCommunity: '240', x: 5444.918212890625, y: 2746.34130859375, nodeSize: 60.41748046875, leamerCategory: '5', productName: 'FISH,DRIED,SALTED OR IN BRINE; SMOKED FISH', nodeColor: '#8c94d1',
  },
  {
    productId: '8459', productCommunity: '170', x: 5147.524658203125, y: 3541.83056640625, nodeSize: 112.29443359375, leamerCategory: '7', productName: 'OTHER OUTER GARMENTS & CLOTHING,KNITTED', nodeColor: '#ffc200',
  },
  {
    productId: '8452', productCommunity: '170', x: 4798.979248046875, y: 3657.6787109375, nodeSize: 60.19580078125, leamerCategory: '7', productName: 'DRESSES,SKIRTS,SUITS ETC,KNITTED OR CROCHETED', nodeColor: '#ffc200',
  },
  {
    productId: '8423', productCommunity: '170', x: 4515.062255859375, y: 3802.03955078125, nodeSize: 109.49853515625, leamerCategory: '7', productName: 'TROUSERS,BREECHES ETC.OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8463', productCommunity: '170', x: 4558.206787109375, y: 3645.955810546875, nodeSize: 64.30029296875, leamerCategory: '7', productName: 'UNDER GARMENTS,KNITTED,OF SYNTHETIC FIBRES', nodeColor: '#ffc200',
  },
  {
    productId: '8441', productCommunity: '170', x: 5124.1796875, y: 4068.8843994140625, nodeSize: 95.7119140625, leamerCategory: '7', productName: 'SHIRTS,MENS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8439', productCommunity: '170', x: 5047.66845703125, y: 3806.98876953125, nodeSize: 122.6884765625, leamerCategory: '7', productName: 'OTHER OUTER GARMENTS OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8451', productCommunity: '170', x: 4821.522705078125, y: 3844.582275390625, nodeSize: 129.03955078125, leamerCategory: '7', productName: 'JERSEYS,PULL-OVERS,TWINSETS,CARDIGANS,KNITTED', nodeColor: '#ffc200',
  },
  {
    productId: '8434', productCommunity: '170', x: 4882.651611328125, y: 4085.870361328125, nodeSize: 61.35498046875, leamerCategory: '7', productName: 'SKIRTS,WOMENS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8462', productCommunity: '170', x: 4940.780517578125, y: 3456.296630859375, nodeSize: 120.78173828125, leamerCategory: '7', productName: 'UNDER GARMENTS,KNITTED OF COTTON', nodeColor: '#ffc200',
  },
  {
    productId: '2686', productCommunity: '232', x: 4256.17333984375, y: 4824.074462890625, nodeSize: 50.359375, leamerCategory: '6', productName: 'WASTE OF SHEEPS/LAMBS WOOL OR OF OTHER ANIM.HAIR', nodeColor: '#5b6b82',
  },
  {
    productId: '2876', productCommunity: '219', x: 4556.433837890625, y: 5117.197509765625, nodeSize: 51.88916015625, leamerCategory: '2', productName: 'TIN ORES AND CONCENTRATES', nodeColor: '#ffc86c',
  },
  {
    productId: '2687', productCommunity: '232', x: 4375.504150390625, y: 4993.817626953125, nodeSize: 53.01611328125, leamerCategory: '6', productName: 'SHEEPS/LAMBS WOOL/OTHER AIMAL HAIR,CARDED/COMBED', nodeColor: '#5b6b82',
  },
  {
    productId: '2683', productCommunity: '232', x: 4437.095458984375, y: 5059.10546875, nodeSize: 55.51123046875, leamerCategory: '6', productName: 'FINE ANIMAL HAIR,NOT CARDED OR COMBED', nodeColor: '#5b6b82',
  },
  {
    productId: '6512', productCommunity: '232', x: 4087.44921875, y: 4650.539794921875, nodeSize: 61.0908203125, leamerCategory: '8', productName: 'YARN OF WOOL OR ANIMAL HAIR (INCLUDING WOOL TOPS)', nodeColor: '#5b6b82',
  },
  {
    productId: '2685', productCommunity: '232', x: 4485.13525390625, y: 4947.468017578125, nodeSize: 47.03515625, leamerCategory: '6', productName: 'HORSEHAIR & OTHER COARSE ANIMAL HAIR (EXCL.WOOL)', nodeColor: '#5b6b82',
  },
  {
    productId: '2682', productCommunity: '232', x: 4312.535400390625, y: 4752.42578125, nodeSize: 56.89501953125, leamerCategory: '6', productName: 'SHEEPS OR LAMBSWOOL,DEGREASED,IN THE MASS', nodeColor: '#5b6b82',
  },
  {
    productId: '2681', productCommunity: '232', x: 4463.11376953125, y: 4782.7060546875, nodeSize: 58.9150390625, leamerCategory: '6', productName: 'SEEPS OR LAMBSWOOL,GREASY OR FLEECE-WASHED', nodeColor: '#5b6b82',
  },
  {
    productId: '7711', productCommunity: '30', x: 4237.93994140625, y: 4559.40478515625, nodeSize: 78.236328125, leamerCategory: '9', productName: 'TRANSFORMERS,ELECTRICAL', nodeColor: '#299fff',
  },
  {
    productId: '2672', productCommunity: '999', x: 4555.677734375, y: 4690.419189453125, nodeSize: 51.7744140625, leamerCategory: '6', productName: 'WASTE OF MAN-MADE FIBRES,NOT CARDED,COMBED', nodeColor: '#9c9a87',
  },
  {
    productId: '6123', productCommunity: '170', x: 4677.2734375, y: 4208.81640625, nodeSize: 63.21484375, leamerCategory: '8', productName: 'PARTS OF FOOTWEAR', nodeColor: '#ffc200',
  },
  {
    productId: '8465', productCommunity: '170', x: 4792.416748046875, y: 3475.558349609375, nodeSize: 65.70458984375, leamerCategory: '7', productName: 'CORSETS,BRASSIERES,SUSPENDRES AND THE LIKE', nodeColor: '#ffc200',
  },
  {
    productId: '7599', productCommunity: '180', x: -885.6519775390625, y: 3474.15966796875, nodeSize: 179.1282958984375, leamerCategory: '9', productName: 'PARTS OF AND ACCESSORIES SUITABLE FOR 751.2-,752-', nodeColor: '#ff6bb0',
  },
  {
    productId: '6210', productCommunity: '140', x: 1911.7740478515625, y: 4101.1357421875, nodeSize: 77.404541015625, leamerCategory: '8', productName: 'MATERIALS OF RUBBER(E.G.,PASTES.PLATES,SHEETS,ETC)', nodeColor: '#a66195',
  },
  {
    productId: '7492', productCommunity: '10', x: 1200.3807373046875, y: 4490.071044921875, nodeSize: 120.279052734375, leamerCategory: '9', productName: 'TAPS,COCKS,VALVES ETC.FOR PIPES,TANKS,VATS ETC', nodeColor: '#4037ab',
  },
  {
    productId: '8743', productCommunity: '10', x: 981.8460998535156, y: 4524.692626953125, nodeSize: 107.57440185546875, leamerCategory: '9', productName: 'INSTR.NON ELECTRICAL,FOR MEASURING,CHECKING FLOW', nodeColor: '#4037ab',
  },
  {
    productId: '7722', productCommunity: '180', x: -1392.6970825195312, y: 3120.025390625, nodeSize: 102.7716064453125, leamerCategory: '9', productName: 'PRINTED CIRCUITS AND PARTS THEREOF', nodeColor: '#ff6bb0',
  },
  {
    productId: '7764', productCommunity: '180', x: -1194.7658081054688, y: 3648.38623046875, nodeSize: 194.5164794921875, leamerCategory: '9', productName: 'ELECTRONIC MICROCIRCUITS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7732', productCommunity: '10', x: 947.5718383789062, y: 4742.56640625, nodeSize: 61.09423828125, leamerCategory: '9', productName: 'ELECTRIC INSULATING EQUIPMENT', nodeColor: '#4037ab',
  },
  {
    productId: '2654', productCommunity: '222', x: 5085.265625, y: 6212.177978515625, nodeSize: 47.8828125, leamerCategory: '6', productName: 'SISAL & OTHER FIBRES OF AGAVE FAMILY,RAW OR PROCE.', nodeColor: '#3aa67b',
  },
  {
    productId: '1121', productCommunity: '80', x: 4861.739501953125, y: 2063.9234008789062, nodeSize: 86.88916015625, leamerCategory: '4', productName: 'WINE OF FRESH GRAPES (INCLUDING GRAPE MUST)', nodeColor: '#ff0062',
  },
  {
    productId: '2711', productCommunity: '80', x: 4135.21435546875, y: 3429.073486328125, nodeSize: 50.912109375, leamerCategory: '2', productName: 'GUANO & OTHER NATURAL ANIMAL/VEGETABLE FERTILIZERS', nodeColor: '#ff0062',
  },
  {
    productId: '4312', productCommunity: '80', x: 3735.168701171875, y: 3064.377197265625, nodeSize: 58.27880859375, leamerCategory: '5', productName: 'ANIM./VEGET.OILS & FATS,WHOLLY/PARTLY HYDROGENATED', nodeColor: '#ff0062',
  },
  {
    productId: '2789', productCommunity: '219', x: 3621.05126953125, y: 2948.520263671875, nodeSize: 59.794921875, leamerCategory: '2', productName: 'MINERALS,CRUDE, N.E.S.', nodeColor: '#ffc86c',
  },
  {
    productId: '1123', productCommunity: '90', x: 3366.2623291015625, y: 3228.156494140625, nodeSize: 64.592041015625, leamerCategory: '4', productName: 'BEER MADE FROM MALT (INCLUDALE,STOUT AND PORTER)', nodeColor: '#6e451e',
  },
  {
    productId: '1124', productCommunity: '90', x: 3324.097900390625, y: 2970.4669189453125, nodeSize: 86.20361328125, leamerCategory: '4', productName: 'SPIRITS;LIQUEURS, OTHER SPIRITUOUS BEVERAGES,N.E.S', nodeColor: '#6e451e',
  },
  {
    productId: '1122', productCommunity: '90', x: 3270.4273681640625, y: 2728.775146484375, nodeSize: 53.590087890625, leamerCategory: '4', productName: 'OTHER FERMENTED BEVERAGES N.E.S (CIDER,PERRY MEAD)', nodeColor: '#6e451e',
  },
  {
    productId: '2881', productCommunity: '219', x: 4827.289794921875, y: 1866.5701904296875, nodeSize: 58.86962890625, leamerCategory: '2', productName: 'ASH & RESIDUES,CONTAIN.METALS/METALLIC COMPOUNDS', nodeColor: '#ffc86c',
  },
  {
    productId: '1221', productCommunity: '90', x: 2494.0667724609375, y: 2934.58349609375, nodeSize: 56.382568359375, leamerCategory: '6', productName: 'CIGARS AND CHEROOTS; CIGARILLOS', nodeColor: '#6e451e',
  },
  {
    productId: '1213', productCommunity: '223', x: 5866.292724609375, y: 3710.099365234375, nodeSize: 52.50439453125, leamerCategory: '6', productName: 'TOBACCO REFUSE', nodeColor: '#bfbb11',
  },
  {
    productId: '7868', productCommunity: '10', x: 2630.39697265625, y: 4813.725830078125, nodeSize: 61.392578125, leamerCategory: '9', productName: 'OTHER VEHICLES,NOT MECHANICALLY PROPELLED,PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '6641', productCommunity: '100', x: -800.5932312011719, y: 4994.31689453125, nodeSize: 57.41351318359375, leamerCategory: '7', productName: 'GLASS IN THE MASS,IN BALLS,RODS/TUBES;WASTE GLASS', nodeColor: '#9c219c',
  },
  {
    productId: '7451', productCommunity: '10', x: 753.2438354492188, y: 4947.345703125, nodeSize: 60.81005859375, leamerCategory: '9', productName: 'TOOLS FOR WORKING IN THE HAND,PNEUMATIC,PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7449', productCommunity: '10', x: 992.1641540527344, y: 4054.2181396484375, nodeSize: 102.07061767578125, leamerCategory: '9', productName: 'PARTS OF THE MACHINERY OF 744.2-', nodeColor: '#4037ab',
  },
  {
    productId: '8939', productCommunity: '120', x: 2579.718505859375, y: 4379.93408203125, nodeSize: 141.82373046875, leamerCategory: '7', productName: 'MISCELLANEOUS ART.OF MATERIALS OF DIV.58', nodeColor: '#730049',
  },
  {
    productId: '2742', productCommunity: '219', x: 964.3790283203125, y: 5933.90576171875, nodeSize: 47.3280029296875, leamerCategory: '2', productName: 'IRON PYRITES,UNROASTED', nodeColor: '#ffc86c',
  },
  {
    productId: '0342', productCommunity: '240', x: 5318.5048828125, y: 2871.20263671875, nodeSize: 86.388671875, leamerCategory: '5', productName: 'FISH,FROZEN (EXCLUDIND FILLETS)', nodeColor: '#8c94d1',
  },
  {
    productId: '0371', productCommunity: '240', x: 5305.707763671875, y: 2704.013427734375, nodeSize: 72.74462890625, leamerCategory: '5', productName: 'FISH,PREPARED OR PRESERVED,N.E.S. INCLUDING CAVIAR', nodeColor: '#8c94d1',
  },
  {
    productId: '5162', productCommunity: '100', x: -775.4902038574219, y: 4515.7587890625, nodeSize: 60.97821044921875, leamerCategory: '10', productName: 'ALDEHYDE-,KETONE-,& QUINONE-FUNCTION COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '2784', productCommunity: '213', x: -276.86659240722656, y: 2472.938232421875, nodeSize: 54.255706787109375, leamerCategory: '2', productName: 'ASBESTOS', nodeColor: '#c93c00',
  },
  {
    productId: '5722', productCommunity: '10', x: 3462.4261474609375, y: 2715.064453125, nodeSize: 54.591064453125, leamerCategory: '10', productName: 'SAFETY FUSES,DETONATING FUS.;PERCUSSION & DET.CAPS', nodeColor: '#4037ab',
  },
  {
    productId: '5721', productCommunity: '130', x: 3493.7255859375, y: 3042.13720703125, nodeSize: 54.51513671875, leamerCategory: '10', productName: 'PROPELLENT POWDERS AND OTHER PREPARED EXPLOSIVES', nodeColor: '#b54e61',
  },
  {
    productId: '5530', productCommunity: '120', x: 1765.6539306640625, y: 3368.523681640625, nodeSize: 106.245849609375, leamerCategory: '10', productName: 'PERFUMERY,COSMETICS AND TOILET PREPARATIONS', nodeColor: '#730049',
  },
  {
    productId: '5414', productCommunity: '120', x: 608.4609680175781, y: 3662.72705078125, nodeSize: 57.96539306640625, leamerCategory: '10', productName: 'VEGETAB.ALKALOIDS,NATURAL/REPRODUCED BY SYNTHESIS', nodeColor: '#730049',
  },
  {
    productId: '5837', productCommunity: '120', x: 2619.501220703125, y: 3243.70068359375, nodeSize: 56.41259765625, leamerCategory: '10', productName: 'POLYVINYL ACETATE', nodeColor: '#730049',
  },
  {
    productId: '6812', productCommunity: '219', x: -266.48719787597656, y: 4995.072021484375, nodeSize: 95.83517456054688, leamerCategory: '2', productName: 'PLATINUM AND OTHER METALS OF THE PLATINUM GROUP', nodeColor: '#ffc86c',
  },
  {
    productId: '7931', productCommunity: '40', x: 522.591064453125, y: 3368.03076171875, nodeSize: 58.44873046875, leamerCategory: '9', productName: 'WARSHIPS OF ALL KINDS', nodeColor: '#38f2f1',
  },
  {
    productId: '8921', productCommunity: '120', x: 1679.5367431640625, y: 3037.671630859375, nodeSize: 94.31201171875, leamerCategory: '7', productName: 'BOOKS,PAMPHLETS,MAPS AND GLOBES,PRINTED', nodeColor: '#730049',
  },
  {
    productId: '5514', productCommunity: '100', x: -1027.8499145507812, y: 4049.455322265625, nodeSize: 62.0648193359375, leamerCategory: '10', productName: 'MIXTURES OF TWO OR MORE ODORIFEROUS SUBSTANCES', nodeColor: '#9c219c',
  },
  {
    productId: '5852', productCommunity: '40', x: 574.8239135742188, y: 3272.968505859375, nodeSize: 56.1163330078125, leamerCategory: '10', productName: 'OTHER ARTIFICIAL PLASTIC MATERIALS,N.E.S.', nodeColor: '#38f2f1',
  },
  {
    productId: '6672', productCommunity: '210', x: -2334.359130859375, y: 2654.3134765625, nodeSize: 132.0732421875, leamerCategory: '7', productName: 'DIAMONDS,UNWORK.CUT/OTHERWISE WORK.NOT MOUNTED/S', nodeColor: '#7c1803',
  },
  {
    productId: '3415', productCommunity: '219', x: -2670.0946044921875, y: 2669.0673828125, nodeSize: 39.773193359375, leamerCategory: '2', productName: 'COAL GAS, WATER GAS,PRODUCER GAS & SIMILAR GASES', nodeColor: '#ffc86c',
  },
  {
    productId: '7712', productCommunity: '180', x: -995.9566345214844, y: 2663.329833984375, nodeSize: 125.04180908203125, leamerCategory: '9', productName: 'OTHER ELECTRIC POWER MACHINERY,PARTS OF 771-', nodeColor: '#ff6bb0',
  },
  {
    productId: '8811', productCommunity: '180', x: -1170.625244140625, y: 2358.441162109375, nodeSize: 85.474853515625, leamerCategory: '9', productName: 'PHOTOGRAPHIC,CAMERAS,PARTS & ACCESSORIES', nodeColor: '#ff6bb0',
  },
  {
    productId: '2512', productCommunity: '150', x: -376.05523681640625, y: 3497.1119384765625, nodeSize: 55.41375732421875, leamerCategory: '3', productName: 'MECHANICAL WOOD PULP', nodeColor: '#bf8845',
  },
  {
    productId: '7754', productCommunity: '180', x: -2603.591064453125, y: 3296.087890625, nodeSize: 59.1005859375, leamerCategory: '9', productName: 'SHAVERS & HAIR CLIPPERS WITH MOTOR AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7757', productCommunity: '180', x: -2501.400634765625, y: 3410.896728515625, nodeSize: 80.8525390625, leamerCategory: '9', productName: 'ELEC.-MECH.,DOMESTIC APPLIANCES AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '0014', productCommunity: '239', x: 2110.95947265625, y: 3879.6915283203125, nodeSize: 56.779296875, leamerCategory: '5', productName: 'POULTRY, LIVE (I.E., FOWLS, DUCKS, GEESE, ETC.)', nodeColor: '#9fb3bf',
  },
  {
    productId: '8999', productCommunity: '999', x: -2574.2176513671875, y: 2295.449462890625, nodeSize: 61.177490234375, leamerCategory: '7', productName: 'MANUFACTURED GOODS,N.E.S.', nodeColor: '#9c9a87',
  },
  {
    productId: '6594', productCommunity: '170', x: 5798.092041015625, y: 4282.274658203125, nodeSize: 56.73388671875, leamerCategory: '8', productName: 'CARPETS,CARPETING,RUGS,MATS & MATTING,OF WOOL ETC.', nodeColor: '#ffc200',
  },
  {
    productId: '6593', productCommunity: '160', x: 5354.725830078125, y: 5631.481201171875, nodeSize: 50.81201171875, leamerCategory: '8', productName: 'KELEM,SCHUMACKS AND KARAMANIE RUGS AND THE LIKE', nodeColor: '#c4af78',
  },
  {
    productId: '6592', productCommunity: '160', x: 5205.053466796875, y: 5560.066650390625, nodeSize: 59.26025390625, leamerCategory: '8', productName: 'CARPETS,CARPETING AND RUGS,KNOTTED', nodeColor: '#c4af78',
  },
  {
    productId: '6596', productCommunity: '170', x: 5536.45849609375, y: 4252.951904296875, nodeSize: 57.7705078125, leamerCategory: '8', productName: 'CARPETS,RUGS ETC.OF OTHER TEXTILE MATERIALS N.E.S.', nodeColor: '#ffc200',
  },
  {
    productId: '0571', productCommunity: '224', x: 4711.7568359375, y: 2122.381103515625, nodeSize: 61.4541015625, leamerCategory: '4', productName: 'ORANGES,MANDARINS,CLEMENTINES AND OTHER CITRUS', nodeColor: '#c6eb8a',
  },
  {
    productId: '0572', productCommunity: '224', x: 4748.040771484375, y: 2246.35546875, nodeSize: 58.85595703125, leamerCategory: '4', productName: 'OTHER CITRUS FRUIT,FRESH OR DRIED', nodeColor: '#c6eb8a',
  },
  {
    productId: '8852', productCommunity: '180', x: -1608.4534301757812, y: 2773.987060546875, nodeSize: 61.2774658203125, leamerCategory: '9', productName: 'CLOCKS,CLOCK MOVEMENTS AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7781', productCommunity: '180', x: -1271.2586059570312, y: 2747.21240234375, nodeSize: 105.8221435546875, leamerCategory: '9', productName: 'BATTERIES AND ACCUMULATORS AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7841', productCommunity: '10', x: 769.9757080078125, y: 5243.9833984375, nodeSize: 60.1275634765625, leamerCategory: '9', productName: 'CHASSIS FITTED WITH ENGINES FOR MOTOR VEHICLES', nodeColor: '#4037ab',
  },
  {
    productId: '0575', productCommunity: '224', x: 4946.296875, y: 2320.357177734375, nodeSize: 61.2705078125, leamerCategory: '4', productName: 'GRAPES,FRESH OR DRIED', nodeColor: '#c6eb8a',
  },
  {
    productId: '7753', productCommunity: '180', x: -578.1622924804688, y: 3161.88037109375, nodeSize: 58.593017578125, leamerCategory: '9', productName: 'DISH WASHING MACHINES OF HOUSEHOLD TYPE', nodeColor: '#ff6bb0',
  },
  {
    productId: '0573', productCommunity: '220', x: 5355.626953125, y: 2385.2587890625, nodeSize: 74.0322265625, leamerCategory: '4', productName: 'BANANAS,FRESH OR DRIED', nodeColor: '#005a4f',
  },
  {
    productId: '6664', productCommunity: '70', x: 2254.7747802734375, y: 3535.654296875, nodeSize: 59.415771484375, leamerCategory: '7', productName: 'TABLEWARE & OTHER ARTICLES OF PORCELAIN OR CHINA', nodeColor: '#ff707a',
  },
  {
    productId: '6658', productCommunity: '999', x: 684.3506469726562, y: 5648.4013671875, nodeSize: 59.627197265625, leamerCategory: '7', productName: 'ARTICLES MADE OF GLASS,N.E.S', nodeColor: '#9c9a87',
  },
  {
    productId: '2481', productCommunity: '60', x: 3420.9141845703125, y: 3045.662109375, nodeSize: 51.732177734375, leamerCategory: '3', productName: 'RAILWAY OR TRAMWAY SLEEPERS (TIES)OF WOOD', nodeColor: '#473b1c',
  },
  {
    productId: '7921', productCommunity: '40', x: 3389.8741455078125, y: 2745.8046875, nodeSize: 59.482177734375, leamerCategory: '9', productName: 'HELICOPTERS', nodeColor: '#38f2f1',
  },
  {
    productId: '8748', productCommunity: '100', x: -76.2220630645752, y: 4713.864501953125, nodeSize: 113.80270004272461, leamerCategory: '9', productName: 'ELECTRICAL MEASURING,CHECKING,ANALYSING INSTRUM.', nodeColor: '#9c219c',
  },
  {
    productId: '3413', productCommunity: '212', x: 2030.1913452148438, y: 2654.72802734375, nodeSize: 126.2716064453125, leamerCategory: '2', productName: 'PETROLEUM GASES AND OTHER GASEOUS HYDROCARBONS', nodeColor: '#ad2b2b',
  },
  {
    productId: '5241', productCommunity: '213', x: -458.01902770996094, y: 2348.116455078125, nodeSize: 67.72988891601562, leamerCategory: '10', productName: 'FISSILE CHEMICAL ELEMENTS AND ISOTOPES', nodeColor: '#c93c00',
  },
  {
    productId: '3330', productCommunity: '212', x: 4198.265380859375, y: 6539.5107421875, nodeSize: 209.04736328125, leamerCategory: '1', productName: 'PETROL.OILS & CRUDE OILS OBT.FROM BITUMIN.MINERALS', nodeColor: '#ad2b2b',
  },
  {
    productId: '3351', productCommunity: '120', x: 2446.3505859375, y: 3333.32470703125, nodeSize: 58.03857421875, leamerCategory: '1', productName: 'PETROLEUM JELLY AND MINERAL WAXES', nodeColor: '#730049',
  },
  {
    productId: '5629', productCommunity: '130', x: 5710.999267578125, y: 2486.625, nodeSize: 74.06396484375, leamerCategory: '10', productName: 'FERTILIZERS,N.E.S.', nodeColor: '#b54e61',
  },
  {
    productId: '5982', productCommunity: '100', x: -1093.345947265625, y: 5560.4228515625, nodeSize: 61.02978515625, leamerCategory: '10', productName: 'ANTI-KNOCK PREPARATIONS,OXIDATION INHIBITORS ETC.', nodeColor: '#9c219c',
  },
  {
    productId: '6832', productCommunity: '10', x: 159.73184204101562, y: 4261.6689453125, nodeSize: 58.85015869140625, leamerCategory: '2', productName: 'NICKEL AND NICKEL ALLOYS.WORKED', nodeColor: '#4037ab',
  },
  {
    productId: '7161', productCommunity: '10', x: 477.8216552734375, y: 4855.81982421875, nodeSize: 68.0286865234375, leamerCategory: '9', productName: 'MOTORS & GENERATORS,DIRECT CURRENT', nodeColor: '#4037ab',
  },
  {
    productId: '6115', productCommunity: '230', x: 4400.115234375, y: 2568.2197265625, nodeSize: 57.890625, leamerCategory: '8', productName: 'SHEEP AND LAMB SKIN LEATHER', nodeColor: '#21366b',
  },
  {
    productId: '7149', productCommunity: '20', x: -1543.3704223632812, y: 4257.219482421875, nodeSize: 120.3905029296875, leamerCategory: '9', productName: 'PARTS OF THE ENGINES & MOTORS OF 714-AND 718.8-', nodeColor: '#0576a6',
  },
  {
    productId: '7421', productCommunity: '180', x: -346.28309631347656, y: 3955.885009765625, nodeSize: 58.323028564453125, leamerCategory: '9', productName: 'RECIPROCATING PUMPS,OTHER THAN 742.81', nodeColor: '#ff6bb0',
  },
  {
    productId: '7523', productCommunity: '180', x: -1367.627685546875, y: 3581.84375, nodeSize: 141.53515625, leamerCategory: '9', productName: 'COMPLETE DIGITAL CENTRAL PROCESSING UNITS', nodeColor: '#ff6bb0',
  },
  {
    productId: '5541', productCommunity: '110', x: 3932.74169921875, y: 2978.75390625, nodeSize: 59.34228515625, leamerCategory: '10', productName: 'SOAP;ORGANIC SURFACE-ACTIVE PRODUCTS & PREPARATNS', nodeColor: '#4b0046',
  },
  {
    productId: '0619', productCommunity: '90', x: 610.09423828125, y: 3464.53515625, nodeSize: 58.40625, leamerCategory: '4', productName: 'OTHER SUGARS;SUGAR SYRUPS;ARTIFICIAL HONEY;CARAMEL', nodeColor: '#6e451e',
  },
  {
    productId: '0751', productCommunity: '229', x: 5391.998779296875, y: 2493.152099609375, nodeSize: 58.33056640625, leamerCategory: '4', productName: 'PEPPER; PIMENTO', nodeColor: '#78b83d',
  },
  {
    productId: '0711', productCommunity: '229', x: 5253.64990234375, y: 2518.306396484375, nodeSize: 96.3994140625, leamerCategory: '4', productName: 'COFFEE,WHETHER OR NOT ROASTED OR FREED OF CAFFEINE', nodeColor: '#78b83d',
  },
  {
    productId: '2483', productCommunity: '60', x: 3629.023193359375, y: 3516.671630859375, nodeSize: 84.5390625, leamerCategory: '3', productName: 'WOOD OF NON-CONIFEROUS SPECIES,SAWN,PLANED,TONGUE', nodeColor: '#473b1c',
  },
  {
    productId: '2479', productCommunity: '60', x: 3624.555419921875, y: 3214.160888671875, nodeSize: 13.63623046875, leamerCategory: '3', productName: 'PITPROPS,POLES,PILING,POSTS & OTHER WOOD IN ROUGH', nodeColor: '#473b1c',
  },
  {
    productId: '5543', productCommunity: '120', x: 2563.517822265625, y: 3556.494384765625, nodeSize: 56.6015625, leamerCategory: '10', productName: 'POLISHES & CREAMS,FOR FOOTWEAR,FURNITURE OR FLOOR', nodeColor: '#730049',
  },
  {
    productId: '0114', productCommunity: '239', x: 1526.1824951171875, y: 5687.95849609375, nodeSize: 74.1640625, leamerCategory: '5', productName: 'POULTRY,DEAD & EDIBLE OFFALS EX.LIVER,FRESH/FROZEN', nodeColor: '#9fb3bf',
  },
  {
    productId: '6342', productCommunity: '60', x: 3571.5931396484375, y: 5494.896484375, nodeSize: 79.901123046875, leamerCategory: '3', productName: 'PLYWOOD CONSISTING OF SHEETS OF WOOD', nodeColor: '#473b1c',
  },
  {
    productId: '6841', productCommunity: '219', x: 3678.7587890625, y: 5833.330322265625, nodeSize: 120.345703125, leamerCategory: '2', productName: 'ALUMINIUM AND ALUMINIUM ALLOYS,UNWROUGHT', nodeColor: '#ffc86c',
  },
  {
    productId: '2331', productCommunity: '100', x: -1093.7577514648438, y: 4862.8271484375, nodeSize: 72.7740478515625, leamerCategory: '4', productName: 'SYNTH.RUBB.LAT.;SYNTH.RUBB.FACTICE DERIV.FROM OILS', nodeColor: '#9c219c',
  },
  {
    productId: '0344', productCommunity: '240', x: 5472.295654296875, y: 2590.328369140625, nodeSize: 71.23291015625, leamerCategory: '5', productName: 'FISH FILLETS,FROZEN', nodeColor: '#8c94d1',
  },
  {
    productId: '5163', productCommunity: '100', x: -400.90550231933594, y: 4873.3232421875, nodeSize: 57.132049560546875, leamerCategory: '10', productName: 'INORGANIC ESTERS,THEIR SALTS,& THEIR DERIVATIVES', nodeColor: '#9c219c',
  },
  {
    productId: '5335', productCommunity: '120', x: 2716.245361328125, y: 3976.2021484375, nodeSize: 61.6796875, leamerCategory: '10', productName: 'COLOUR.PREPTNS OF A KIND USED IN CERAMIC,ENAMELLI.', nodeColor: '#730049',
  },
  {
    productId: '0430', productCommunity: '221', x: 2788.86083984375, y: 5550.220703125, nodeSize: 59.7080078125, leamerCategory: '6', productName: 'BARLEY,UNMILLED', nodeColor: '#6c8806',
  },
  {
    productId: '0579', productCommunity: '80', x: 4484.3583984375, y: 3548.565673828125, nodeSize: 87.6376953125, leamerCategory: '4', productName: 'FRUIT,FRESH OR DRIED, N.E.S.', nodeColor: '#ff0062',
  },
  {
    productId: '6551', productCommunity: '160', x: 5233.452880859375, y: 6028.007568359375, nodeSize: 13.63623046875, leamerCategory: '8', productName: 'KNITTED/CROCH.FAB.NOT ELAST.NOR RUBBERIZ.OF SYNT.F', nodeColor: '#c4af78',
  },
  {
    productId: '5839', productCommunity: '100', x: -1084.5592651367188, y: 4542.904296875, nodeSize: 114.9718017578125, leamerCategory: '10', productName: 'OTHER POLYMERIZATION AND COPOLIMERIZATION PRODUCTS', nodeColor: '#9c219c',
  },
  {
    productId: '5122', productCommunity: '100', x: -640.9000854492188, y: 4631.3974609375, nodeSize: 56.083251953125, leamerCategory: '10', productName: 'CYCLIC.ALCOHOLS & THEIR HALOGENATED DERIVATIVES', nodeColor: '#9c219c',
  },
  {
    productId: '2671', productCommunity: '100', x: -1291.1126098632812, y: 4819.4326171875, nodeSize: 59.3812255859375, leamerCategory: '6', productName: 'REGENERATED FIBRES SUITABLE FOR SPINNING', nodeColor: '#9c219c',
  },
  {
    productId: '0251', productCommunity: '239', x: 3557.029541015625, y: 3775.410400390625, nodeSize: 57.1806640625, leamerCategory: '5', productName: 'EGGS IN SHELL', nodeColor: '#9fb3bf',
  },
  {
    productId: '6417', productCommunity: '60', x: 3812.8643798828125, y: 4230.9501953125, nodeSize: 59.571044921875, leamerCategory: '3', productName: 'PAPER& PAPERBOARD,CORRUGATED,CREPEDCRINKLED ETC', nodeColor: '#473b1c',
  },
  {
    productId: '5156', productCommunity: '100', x: -977.9459838867188, y: 4394.390380859375, nodeSize: 116.6292724609375, leamerCategory: '10', productName: 'HETEROCYCLIC COMPOUNDS;NUCLEIC ACIDS', nodeColor: '#9c219c',
  },
  {
    productId: '6571', productCommunity: '120', x: 2083.7154541015625, y: 5169.992919921875, nodeSize: 55.987060546875, leamerCategory: '8', productName: 'FELT & ARTICL.OF FELT,NES,WHETHER/NOT IMPREGNATED', nodeColor: '#730049',
  },
  {
    productId: '6785', productCommunity: '10', x: 1219.37158203125, y: 4125.5823974609375, nodeSize: 67.759765625, leamerCategory: '8', productName: 'TUBE & PIPE FITTINGS(JOINTS,ELBOWS)OF IRON/STEEL', nodeColor: '#4037ab',
  },
  {
    productId: '6116', productCommunity: '230', x: 4336.910888671875, y: 2454.069580078125, nodeSize: 57.91259765625, leamerCategory: '8', productName: 'LEATHER OF OTHER HIDES OR SKINS', nodeColor: '#21366b',
  },
  {
    productId: '0730', productCommunity: '80', x: 3727.9903564453125, y: 4112.2486572265625, nodeSize: 68.801513671875, leamerCategory: '4', productName: 'CHOCOLATE & OTHER FOOD PREPTNS.  CONTAINING COCOA', nodeColor: '#ff0062',
  },
  {
    productId: '6532', productCommunity: '160', x: 4827.642578125, y: 5531.508544921875, nodeSize: 59.765625, leamerCategory: '8', productName: 'FABRICS,WOVEN CONTAIN.85% OF DISCONTIN.SYNTH.FIBR.', nodeColor: '#c4af78',
  },
  {
    productId: '0240', productCommunity: '231', x: 3417.373046875, y: 3990.4530029296875, nodeSize: 83.966796875, leamerCategory: '5', productName: 'CHEESE AND CURD', nodeColor: '#223f59',
  },
  {
    productId: '7162', productCommunity: '10', x: 2137.4017333984375, y: 4821.372802734375, nodeSize: 112.289306640625, leamerCategory: '9', productName: 'ELECT.MOTORS & GENERATORS,GENERATING SETS', nodeColor: '#4037ab',
  },
  {
    productId: '6998', productCommunity: '219', x: 2516.2696533203125, y: 4519.379150390625, nodeSize: 82.757080078125, leamerCategory: '8', productName: 'ART.,NES.OF COPPER,NICKEL,ALUMINIUM,LEAD,ZINC,TIN', nodeColor: '#ffc86c',
  },
  {
    productId: '7416', productCommunity: '10', x: 595.6969604492188, y: 4677.671875, nodeSize: 102.185546875, leamerCategory: '9', productName: 'MACH.PLANT & SIM.LAB.EQUIP.INVOLV.A TEMP.CHANGE', nodeColor: '#4037ab',
  },
  {
    productId: '6940', productCommunity: '10', x: 297.1780548095703, y: 4467.130615234375, nodeSize: 94.84750366210938, leamerCategory: '8', productName: 'NAILS,SCREWS,NUTS,BOLTS ETC.OF IRON.STEEL,COPPER', nodeColor: '#4037ab',
  },
  {
    productId: '7129', productCommunity: '10', x: 941.0824890136719, y: 4273.447265625, nodeSize: 59.53680419921875, leamerCategory: '9', productName: 'PARTS OF THE POWER UNITS OF 712.6-', nodeColor: '#4037ab',
  },
  {
    productId: '7431', productCommunity: '10', x: 1647.390869140625, y: 5046.755126953125, nodeSize: 99.04150390625, leamerCategory: '9', productName: 'AIR PUMPS,VACUUM PUMPS & COMPRESSORS', nodeColor: '#4037ab',
  },
  {
    productId: '7810', productCommunity: '10', x: 1722.179931640625, y: 4563.2958984375, nodeSize: 209.120361328125, leamerCategory: '9', productName: 'PASSENGER MOTOR CARS,FOR TRANSPORT OF PASS.& GOOD', nodeColor: '#4037ab',
  },
  {
    productId: '8443', productCommunity: '170', x: 4850.05078125, y: 4416.2509765625, nodeSize: 58.1728515625, leamerCategory: '7', productName: 'UNDER GARMENTS,WOMEN,S,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '5832', productCommunity: '140', x: 2082.7720947265625, y: 3322.424560546875, nodeSize: 82.409912109375, leamerCategory: '10', productName: 'POLYPROPYLENE', nodeColor: '#a66195',
  },
  {
    productId: '6911', productCommunity: '60', x: 3382.7135009765625, y: 4468.536376953125, nodeSize: 88.150146484375, leamerCategory: '8', productName: 'STRUCTURES & PARTS OF STRUC.:IRON/STEEL;PLATES', nodeColor: '#473b1c',
  },
  {
    productId: '7373', productCommunity: '10', x: 525.6239318847656, y: 4428.983642578125, nodeSize: 65.87078857421875, leamerCategory: '9', productName: 'WELDING,BRAZING,CUTTING,SOLDERING MACHINES & PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '5831', productCommunity: '140', x: 2157.4307861328125, y: 3177.7647705078125, nodeSize: 108.427978515625, leamerCategory: '10', productName: 'POLYETHYLENE', nodeColor: '#a66195',
  },
  {
    productId: '2871', productCommunity: '215', x: 5363.247802734375, y: 2203.34716796875, nodeSize: 71.27978515625, leamerCategory: '2', productName: 'COPPER ORES & CONCENTRATES;COPPER MATTE', nodeColor: '#e88801',
  },
  {
    productId: '2877', productCommunity: '214', x: 1128.4793701171875, y: 2618.523193359375, nodeSize: 56.080810546875, leamerCategory: '2', productName: 'MANGANESE ORES AND CONCENTRATES', nodeColor: '#d66011',
  },
  {
    productId: '2860', productCommunity: '214', x: 1134.60205078125, y: 2467.4736328125, nodeSize: 53.95654296875, leamerCategory: '2', productName: 'ORES AND CONCENTRATES OF URANIUM AND THORIUM', nodeColor: '#d66011',
  },
  {
    productId: '0121', productCommunity: '80', x: -1828.4630126953125, y: 4537.50146484375, nodeSize: 58.163818359375, leamerCategory: '5', productName: 'BACON,HAM & OTHER DRIED,SALTED,SMOKED MEAT OF SWI.', nodeColor: '#ff0062',
  },
  {
    productId: '2875', productCommunity: '219', x: 4989.44873046875, y: 2155.766845703125, nodeSize: 59.66796875, leamerCategory: '2', productName: 'ZINC ORES AND CONCENTRATES', nodeColor: '#ffc86c',
  },
  {
    productId: '2874', productCommunity: '219', x: 5051.03271484375, y: 2038.9154663085938, nodeSize: 55.771484375, leamerCategory: '2', productName: 'LEAD ORES AND CONCENTRATES', nodeColor: '#ffc86c',
  },
  {
    productId: '2872', productCommunity: '213', x: -523.5900268554688, y: 2422.410400390625, nodeSize: 59.7196044921875, leamerCategory: '2', productName: 'NICKEL ORES AND CONCENTRATES;NICKEL MATTES ETC.', nodeColor: '#c93c00',
  },
  {
    productId: '6821', productCommunity: '215', x: 5256.372802734375, y: 2269.880126953125, nodeSize: 101.31591796875, leamerCategory: '2', productName: 'COPPER AND COPPER ALLOYS,REFINED OR NOT,UNWROUGHT', nodeColor: '#e88801',
  },
  {
    productId: '5111', productCommunity: '100', x: -1677.7552490234375, y: 3841.52099609375, nodeSize: 65.94189453125, leamerCategory: '10', productName: 'ACYCLIC HYDROCARBONS', nodeColor: '#9c219c',
  },
  {
    productId: '2879', productCommunity: '215', x: 5102.663818359375, y: 2398.3687744140625, nodeSize: 60.42822265625, leamerCategory: '2', productName: 'ORES & CONCENTRAT.OF OTHER NON-FERROUS BASE METAL', nodeColor: '#e88801',
  },
  {
    productId: '0129', productCommunity: '239', x: 3315.5140380859375, y: 3363.7138671875, nodeSize: 47.852294921875, leamerCategory: '5', productName: 'MEAT& EDIB.OFFALS,N.E.S.SALT.IN BRINE DRIED/SMOK.', nodeColor: '#9fb3bf',
  },
  {
    productId: '5138', productCommunity: '100', x: -1433.0023193359375, y: 3924.8389892578125, nodeSize: 67.991455078125, leamerCategory: '10', productName: 'POLYCARBOXYLIC ACIDS & THEIR ANHYDRIDES,ETC.', nodeColor: '#9c219c',
  },
  {
    productId: '8122', productCommunity: '60', x: 4052.1363525390625, y: 4462.76513671875, nodeSize: 58.768798828125, leamerCategory: '8', productName: 'SINKS,WASH BASINS,BIDETS,WATER CLOSET PANS,ETC', nodeColor: '#473b1c',
  },
  {
    productId: '5825', productCommunity: '999', x: 1444.2449951171875, y: 5658.27294921875, nodeSize: 59.252685546875, leamerCategory: '10', productName: 'POLYURETHANES', nodeColor: '#9c9a87',
  },
  {
    productId: '5823', productCommunity: '999', x: -1562.0038452148438, y: 2512.22607421875, nodeSize: 101.3101806640625, leamerCategory: '10', productName: 'ALKYDS AND OTHER POLYESTERS', nodeColor: '#9c9a87',
  },
  {
    productId: '5723', productCommunity: '999', x: -1809.0258178710938, y: 2884.0625, nodeSize: 55.4422607421875, leamerCategory: '10', productName: 'PYROTECHNIC ARTICLES:(FIREWORK,RAILWAY FOG ETC.)', nodeColor: '#9c9a87',
  },
  {
    productId: '8933', productCommunity: '70', x: -1627.8932495117188, y: 3079.24560546875, nodeSize: 49.2281494140625, leamerCategory: '7', productName: 'ORNAMENTAL ART.AND OBJECTS OF MAT.OF DIV.58', nodeColor: '#ff707a',
  },
  {
    productId: '7762', productCommunity: '180', x: -838.8497619628906, y: 4054.8753662109375, nodeSize: 74.42010498046875, leamerCategory: '9', productName: 'OTHER ELECTR.VALVES AND TUBES', nodeColor: '#ff6bb0',
  },
  {
    productId: '9310', productCommunity: '999', x: 2291.0716552734375, y: 2977.51611328125, nodeSize: 168.367431640625, leamerCategory: '7', productName: 'SPECIAL TRANSACTIONS & COMMOD.,NOT CLASS.TO KIND', nodeColor: '#9c9a87',
  },
  {
    productId: '5833', productCommunity: '999', x: -1426.339599609375, y: 2760.044189453125, nodeSize: 86.49365234375, leamerCategory: '10', productName: 'POLYSTYRENE AND ITS COPOLYMERS', nodeColor: '#9c9a87',
  },
  {
    productId: '5826', productCommunity: '100', x: -1249.77490234375, y: 3860.975341796875, nodeSize: 59.81298828125, leamerCategory: '10', productName: 'EPOXIDE RESINS', nodeColor: '#9c219c',
  },
  {
    productId: '6783', productCommunity: '50', x: 500.50794982910156, y: 2947.27197265625, nodeSize: 88.06088256835938, leamerCategory: '8', productName: 'OTHER TUBES AND PIPES,OF IRON OR STEEL', nodeColor: '#a33bff',
  },
  {
    productId: '6822', productCommunity: '50', x: 994.4617004394531, y: 3280.64599609375, nodeSize: 102.38714599609375, leamerCategory: '2', productName: 'COPPER AND COPPER ALLOYS,WORKED', nodeColor: '#a33bff',
  },
  {
    productId: '5834', productCommunity: '140', x: 2022.982421875, y: 3512.1566162109375, nodeSize: 87.6201171875, leamerCategory: '10', productName: 'POLYVINYL CHLORIDE', nodeColor: '#a66195',
  },
  {
    productId: '7741', productCommunity: '100', x: -1767.5531616210938, y: 4906.097900390625, nodeSize: 75.2386474609375, leamerCategory: '9', productName: 'ELECTRO-MEDICAL APPARATUS', nodeColor: '#9c219c',
  },
  {
    productId: '0015', productCommunity: '239', x: 3793.857421875, y: 5445.92919921875, nodeSize: 58.5556640625, leamerCategory: '5', productName: 'HORSES, ASSES, MULES AND HINNIES, LIVE', nodeColor: '#9fb3bf',
  },
  {
    productId: '0460', productCommunity: '229', x: 4008.81787109375, y: 2816.827880859375, nodeSize: 58.185546875, leamerCategory: '6', productName: 'MEAL AND FLOUR OF WHEAT AND FLOUR OF MESLIN', nodeColor: '#78b83d',
  },
  {
    productId: '6992', productCommunity: '10', x: 1169.4166259765625, y: 5482.510986328125, nodeSize: 58.951171875, leamerCategory: '8', productName: 'CHAIN AND PARTS THEREOF,OF IRON OR STEEL', nodeColor: '#4037ab',
  },
  {
    productId: '6760', productCommunity: '10', x: 1162.6964721679688, y: 5659.38818359375, nodeSize: 57.9210205078125, leamerCategory: '8', productName: 'RAILS AND RAILWAY TRACK CONSTRUCTION MATERIAL', nodeColor: '#4037ab',
  },
  {
    productId: '5413', productCommunity: '120', x: 1651.8695068359375, y: 3385.313720703125, nodeSize: 77.34716796875, leamerCategory: '10', productName: 'ANTIBIOTICS N.E.S.,NOT INCL.  IN 541.7', nodeColor: '#730049',
  },
  {
    productId: '6130', productCommunity: '239', x: 3715.9705810546875, y: 5624.5234375, nodeSize: 57.603759765625, leamerCategory: '8', productName: 'FURSKINS,TANNED/DRESSED,PIECES/CUTTINGS OF FURSKIN', nodeColor: '#9fb3bf',
  },
  {
    productId: '5137', productCommunity: '100', x: -991.2763977050781, y: 4744.77734375, nodeSize: 81.00311279296875, leamerCategory: '10', productName: 'MONOCARBOXYLIC ACIDS & THEIR ANHYDRIDES,HALIDES,', nodeColor: '#9c219c',
  },
  {
    productId: '0752', productCommunity: '229', x: 4885.4853515625, y: 3326.36376953125, nodeSize: 57.974609375, leamerCategory: '4', productName: 'SPICES (EXCEPT PEPPER AND PIMENTO)', nodeColor: '#78b83d',
  },
  {
    productId: '5419', productCommunity: '120', x: 712.7309875488281, y: 3828.321533203125, nodeSize: 67.45501708984375, leamerCategory: '10', productName: 'PHARMACEUTICAL GOODS,OTHER THAN MEDICAMENTS', nodeColor: '#730049',
  },
  {
    productId: '7263', productCommunity: '10', x: -55.97165393829346, y: 4489.193115234375, nodeSize: 58.070852279663086, leamerCategory: '9', productName: 'MACH.,APPAR.,ACCESS.FOR TYPE FOUNDING OR SETTING', nodeColor: '#4037ab',
  },
  {
    productId: '7413', productCommunity: '10', x: 434.0897216796875, y: 4129.51416015625, nodeSize: 61.89666748046875, leamerCategory: '9', productName: 'IND.& LAB.FURNACES AND OVENS AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '6975', productCommunity: '10', x: 2538.98193359375, y: 5169.246826171875, nodeSize: 57.88623046875, leamerCategory: '8', productName: 'SANITARY WARE FOR INDOOR USE, AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7368', productCommunity: '10', x: 402.0518493652344, y: 4770.73046875, nodeSize: 59.08245849609375, leamerCategory: '9', productName: 'WORK HOLDERS,SELF-OPENING DIEHEADS & TOOL HOLDERS', nodeColor: '#4037ab',
  },
  {
    productId: '7372', productCommunity: '10', x: 858.4998168945312, y: 4798.312744140625, nodeSize: 60.6212158203125, leamerCategory: '9', productName: 'ROLLING MILLS,ROLLS THEREFOR AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7251', productCommunity: '10', x: 73.84569931030273, y: 3904.5762939453125, nodeSize: 58.56604766845703, leamerCategory: '9', productName: 'MACH.  FOR MAK./FINIS. CELLUL.  PULP,PAPER,PAPERBO.', nodeColor: '#4037ab',
  },
  {
    productId: '7169', productCommunity: '10', x: 2067.603271484375, y: 4391.27099609375, nodeSize: 70.935546875, leamerCategory: '9', productName: 'PARTS OF ROTATING ELECTRIC PLANT', nodeColor: '#4037ab',
  },
  {
    productId: '7784', productCommunity: '10', x: 620.0614624023438, y: 5404.773193359375, nodeSize: 68.8050537109375, leamerCategory: '9', productName: 'TOOLS FOR WORKING IN THE HAND WITH ELECT.MOTOR', nodeColor: '#4037ab',
  },
  {
    productId: '7822', productCommunity: '10', x: 425.32000732421875, y: 3745.04345703125, nodeSize: 60.937744140625, leamerCategory: '9', productName: 'SPECIAL PURPOSE MOTOR LORRIES AND VANS', nodeColor: '#4037ab',
  },
  {
    productId: '9510', productCommunity: '10', x: 1516.7178955078125, y: 5451.789794921875, nodeSize: 59.9697265625, leamerCategory: '9', productName: 'ARMOURED FIGHTING VEHICLES,ARMS OF WAR & AMMUNIT.', nodeColor: '#4037ab',
  },
  {
    productId: '7434', productCommunity: '10', x: 1025.7626037597656, y: 5658.38232421875, nodeSize: 61.12933349609375, leamerCategory: '9', productName: 'FANS,BLOWERS AND THE LIKE,AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7435', productCommunity: '10', x: 103.02322387695312, y: 5191.659912109375, nodeSize: 56.9454345703125, leamerCategory: '9', productName: 'CENTRIFUGES', nodeColor: '#4037ab',
  },
  {
    productId: '8741', productCommunity: '10', x: 101.89896774291992, y: 3612.92578125, nodeSize: 62.37097930908203, leamerCategory: '9', productName: 'SURVEYING,HYDROGRAPHIC,COMPASSES ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '0548', productCommunity: '229', x: 5603.18408203125, y: 3823.832763671875, nodeSize: 57.515625, leamerCategory: '4', productName: 'VEGETABLE PRODUCTS,ROOTS & TUBERS,FOR HUMAN FOOD', nodeColor: '#78b83d',
  },
  {
    productId: '7415', productCommunity: '180', x: -714.9245910644531, y: 3322.803955078125, nodeSize: 97.94610595703125, leamerCategory: '9', productName: 'AIR CONDITIONING MACH.SELF-CONTAINED AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '5334', productCommunity: '120', x: 2698.3857421875, y: 3803.649658203125, nodeSize: 82.22265625, leamerCategory: '10', productName: 'VARNISHES AND LACOUERS;DISTEMPERS,WATER PIGMENTS', nodeColor: '#730049',
  },
  {
    productId: '6359', productCommunity: '60', x: 3558.388427734375, y: 4577.64453125, nodeSize: 60.87646484375, leamerCategory: '3', productName: 'MANUFACTURED ARTICLES OF WOOD,N.E.S.', nodeColor: '#473b1c',
  },
  {
    productId: '7511', productCommunity: '180', x: -863.4515686035156, y: 2631.94482421875, nodeSize: 52.69769287109375, leamerCategory: '9', productName: 'TYPEWRITTERS;CHEQUE-WRITTING MACHINES', nodeColor: '#ff6bb0',
  },
  {
    productId: '8989', productCommunity: '10', x: 465.0670623779297, y: 3548.736083984375, nodeSize: 56.430755615234375, leamerCategory: '7', productName: 'PARTS OF AND ACCESSORIES FOR MUSICAL INSTRUMENTS', nodeColor: '#4037ab',
  },
  {
    productId: '2925', productCommunity: '220', x: -2069.7914428710938, y: 1861.360595703125, nodeSize: 60.0455322265625, leamerCategory: '5', productName: 'SEEDS,FRUIT & SPORES,NES,OF A KIND USED FOR SOWING', nodeColor: '#005a4f',
  },
  {
    productId: '5835', productCommunity: '100', x: -921.1574096679688, y: 4937.97900390625, nodeSize: 51.5782470703125, leamerCategory: '10', productName: 'COPOLYMERS OF VINYL CHLORIDE AND VINYL ACETATE', nodeColor: '#9c219c',
  },
  {
    productId: '6631', productCommunity: '10', x: 355.54443359375, y: 4547.666748046875, nodeSize: 58.7125244140625, leamerCategory: '7', productName: 'HAND POLISHING STONES,WHETSTONES,OILSTONES,HONES', nodeColor: '#4037ab',
  },
  {
    productId: '6863', productCommunity: '50', x: 1066.8858642578125, y: 3196.822998046875, nodeSize: 55.947265625, leamerCategory: '2', productName: 'ZINC AND ZINC ALLOYS,WORKED', nodeColor: '#a33bff',
  },
  {
    productId: '2873', productCommunity: '214', x: 1122.266845703125, y: 2772.405029296875, nodeSize: 83.662841796875, leamerCategory: '2', productName: 'ALUMINIUM ORES AND CONCENTRATES (INCLUD.ALUMINA)', nodeColor: '#d66011',
  },
  {
    productId: '6713', productCommunity: '50', x: 1232.494384765625, y: 3337.8143310546875, nodeSize: 58.213623046875, leamerCategory: '8', productName: 'IRON OR STEEL POWDERS,SHOT OR SPONGE', nodeColor: '#a33bff',
  },
  {
    productId: '5239', productCommunity: '130', x: 1432.281982421875, y: 3331.143798828125, nodeSize: 59.0517578125, leamerCategory: '10', productName: 'INORGANIC CHEMICAL PRODUCTS,N.E.S', nodeColor: '#b54e61',
  },
  {
    productId: '2786', productCommunity: '219', x: 4203.367919921875, y: 6352.62939453125, nodeSize: 55.40380859375, leamerCategory: '2', productName: 'SLAG,DROSS,SCALINGS AND SIMILAR WASTE,N.E.S.', nodeColor: '#ffc86c',
  },
  {
    productId: '2782', productCommunity: '219', x: 1483.374755859375, y: 3217.8017578125, nodeSize: 61.435791015625, leamerCategory: '2', productName: 'CLAY AND OTHER REFRACTORY MINERALS, N.E.S.', nodeColor: '#ffc86c',
  },
  {
    productId: '2785', productCommunity: '219', x: 1447.8603515625, y: 3101.951171875, nodeSize: 56.373291015625, leamerCategory: '2', productName: 'QUARTZ,MICA,FELSPAR,FLUORSPAR,CRYOLITE & CHIOLITE', nodeColor: '#ffc86c',
  },
  {
    productId: '2815', productCommunity: '214', x: 1123.1422119140625, y: 2933.52880859375, nodeSize: 88.401611328125, leamerCategory: '2', productName: 'IRON ORE AND CONCENTRATES,NOT AGGLOMERATED', nodeColor: '#d66011',
  },
  {
    productId: '2816', productCommunity: '214', x: 1241.7174072265625, y: 3144.170166015625, nodeSize: 61.26953125, leamerCategory: '2', productName: 'IRON ORE AGGLOMERATES (SINTERS,PELLETS,BRIQUETTES)', nodeColor: '#d66011',
  },
  {
    productId: '2814', productCommunity: '50', x: 1246.9232177734375, y: 2746.223876953125, nodeSize: 47.094970703125, leamerCategory: '2', productName: 'ROASTED IRON PYRITES,WHETHER OR NOT AGGLOMERATED', nodeColor: '#a33bff',
  },
  {
    productId: '6712', productCommunity: '50', x: 1251.9005126953125, y: 2931.496826171875, nodeSize: 59.526123046875, leamerCategory: '8', productName: 'PIG IRON,CAST IRON AND SPIEGELEISEN,IN PIGS,BLOCKS', nodeColor: '#a33bff',
  },
  {
    productId: '8433', productCommunity: '170', x: 5262.782470703125, y: 3636.4287109375, nodeSize: 61.64111328125, leamerCategory: '7', productName: 'DRESSES,WOMENS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8435', productCommunity: '170', x: 4746.2451171875, y: 4021.6478271484375, nodeSize: 79.912109375, leamerCategory: '7', productName: 'BLOUSES OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8432', productCommunity: '170', x: 4978.09130859375, y: 4003.916748046875, nodeSize: 58.0078125, leamerCategory: '7', productName: 'SUITS & COSTUMES,WOMENS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8424', productCommunity: '170', x: 4588.030517578125, y: 4117.8885498046875, nodeSize: 60.54736328125, leamerCategory: '7', productName: 'JACKETS,BLAZERS OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8429', productCommunity: '170', x: 4961.303466796875, y: 4218.768798828125, nodeSize: 82.88720703125, leamerCategory: '7', productName: 'OTHER OUTER GARMENTS OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8421', productCommunity: '170', x: 4653.185302734375, y: 3551.6865234375, nodeSize: 58.68115234375, leamerCategory: '7', productName: 'OVERCOATS AND OTHER COATS, MEN,S', nodeColor: '#ffc200',
  },
  {
    productId: '8431', productCommunity: '170', x: 4517.690185546875, y: 4016.5567626953125, nodeSize: 75.61376953125, leamerCategory: '7', productName: 'COATS AND JACKETS OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8422', productCommunity: '170', x: 4875.277099609375, y: 3547.07177734375, nodeSize: 60.39306640625, leamerCategory: '7', productName: 'SUITS,MENS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '8464', productCommunity: '170', x: 4991.972412109375, y: 4034.564697265625, nodeSize: 13.63623046875, leamerCategory: '7', productName: 'UNDER GARMENTS,KNITTED OF OTHER FIBRES', nodeColor: '#ffc200',
  },
  {
    productId: '8442', productCommunity: '170', x: 5339.969970703125, y: 3828.22705078125, nodeSize: 58.18505859375, leamerCategory: '7', productName: 'UNDER GARMENTS,EXCL.SHIRTS,OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '4313', productCommunity: '80', x: 1055.2967529296875, y: 3029.89501953125, nodeSize: 58.228759765625, leamerCategory: '5', productName: 'FATTY ACIDS,ACID OILS,AND RESIDUES', nodeColor: '#ff0062',
  },
  {
    productId: '6411', productCommunity: '150', x: -196.36103057861328, y: 3558.587158203125, nodeSize: 92.27964782714844, leamerCategory: '3', productName: 'NEWSPRINT', nodeColor: '#bf8845',
  },
  {
    productId: '6531', productCommunity: '160', x: 4661.437255859375, y: 5350.051513671875, nodeSize: 95.47509765625, leamerCategory: '8', productName: 'FABRICS,WOVEN OF CONTINUOUS SYNTH.TEXTIL.MATERIALS', nodeColor: '#c4af78',
  },
  {
    productId: '6535', productCommunity: '160', x: 4886.77978515625, y: 5393.249267578125, nodeSize: 59.5478515625, leamerCategory: '8', productName: 'FABRICS WOVEN OF CONTIN.REGENERAT.TEXTIL.MATERIALS', nodeColor: '#c4af78',
  },
  {
    productId: '7913', productCommunity: '10', x: 233.15589904785156, y: 5259.056396484375, nodeSize: 55.944671630859375, leamerCategory: '9', productName: 'RAILWAY & TRAMWAY COACHES,VANS,TRUCKS ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '6579', productCommunity: '120', x: 2313.39990234375, y: 4707.07861328125, nodeSize: 52.98779296875, leamerCategory: '8', productName: 'SPECIAL PRODUCTS OF TEXTILE MATERIALS', nodeColor: '#730049',
  },
  {
    productId: '6880', productCommunity: '100', x: -703.8310241699219, y: 5016.64892578125, nodeSize: 49.17877197265625, leamerCategory: '2', productName: 'URANIUM DEPLETED IN U235 & THORIUM,& THEIR ALLOYS', nodeColor: '#9c219c',
  },
  {
    productId: '7252', productCommunity: '10', x: 194.73507690429688, y: 4017.0296630859375, nodeSize: 59.53515625, leamerCategory: '9', productName: 'PAPER & PAPERBOARD CUTTING MACH.OF ALL KINDS', nodeColor: '#4037ab',
  },
  {
    productId: '2631', productCommunity: '222', x: 4623.56591796875, y: 6222.12939453125, nodeSize: 76.529296875, leamerCategory: '6', productName: 'COTTON (OTHER THAN LINTERS),NOT CARDED OR COMBED', nodeColor: '#3aa67b',
  },
  {
    productId: '4232', productCommunity: '221', x: 3003.0479736328125, y: 6523.568115234375, nodeSize: 61.177490234375, leamerCategory: '6', productName: 'SOYA BEAN OIL', nodeColor: '#6c8806',
  },
  {
    productId: '2120', productCommunity: '231', x: 2036.7822265625, y: 6069.220703125, nodeSize: 57.6376953125, leamerCategory: '5', productName: 'FURSKINS, RAW (INCLUD.ASTRAKHAN,CARACUL, ETC.)', nodeColor: '#223f59',
  },
  {
    productId: '3224', productCommunity: '999', x: 2098.56396484375, y: 5689.948486328125, nodeSize: 55.82470703125, leamerCategory: '2', productName: 'PEAT,WHETHER/NOT COMPRES.INTO BALES NOT AGGLOMERA', nodeColor: '#9c9a87',
  },
  {
    productId: '2117', productCommunity: '230', x: 4295.044677734375, y: 2760.87109375, nodeSize: 54.10205078125, leamerCategory: '5', productName: 'SHEEP & LAMB SKINS WITHOUT THE WOOL,RAW(FRESH ETC)', nodeColor: '#21366b',
  },
  {
    productId: '6852', productCommunity: '219', x: 4379.709228515625, y: 2833.2021484375, nodeSize: 51.29443359375, leamerCategory: '2', productName: 'LEAD AND LEAD ALLOYS,WORKED', nodeColor: '#ffc86c',
  },
  {
    productId: '2111', productCommunity: '230', x: 4153.84326171875, y: 2545.19140625, nodeSize: 61.0205078125, leamerCategory: '5', productName: 'BOVINE & EQUINE HIDES (OTHER THAN CALF),RAW', nodeColor: '#21366b',
  },
  {
    productId: '2114', productCommunity: '230', x: 4537.459228515625, y: 2258.71923828125, nodeSize: 45.93505859375, leamerCategory: '5', productName: 'GOAT & KID SKINS,RAW (FRESH,SALTED,DRIED,PICKLED)', nodeColor: '#21366b',
  },
  {
    productId: '2511', productCommunity: '999', x: 2558.504638671875, y: 3215.0302734375, nodeSize: 60.3935546875, leamerCategory: '3', productName: 'WASTE PAPER,PAPERBOARD;ONLY FOR USE PAPER-MAKING', nodeColor: '#9c9a87',
  },
  {
    productId: '1222', productCommunity: '223', x: 3396.8961181640625, y: 5138.03466796875, nodeSize: 95.086181640625, leamerCategory: '6', productName: 'CIGARETTES', nodeColor: '#bfbb11',
  },
  {
    productId: '5155', productCommunity: '100', x: -1196.6588745117188, y: 5459.633544921875, nodeSize: 60.4552001953125, leamerCategory: '10', productName: 'OTHER ORGANO-INORGANIC COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '6642', productCommunity: '100', x: -1815.6831665039062, y: 4291.221923828125, nodeSize: 59.8280029296875, leamerCategory: '7', productName: 'OPTICAL GLASS AND ELEMENTS OF OPTICAL GLASS', nodeColor: '#9c219c',
  },
  {
    productId: '5148', productCommunity: '100', x: -1569.2628173828125, y: 4382.5595703125, nodeSize: 121.144287109375, leamerCategory: '10', productName: 'OTHER NITROGEN-FUNCTION COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '7929', productCommunity: '20', x: -1289.2691040039062, y: 4639.319580078125, nodeSize: 139.0155029296875, leamerCategory: '9', productName: 'PARTS OF HEADING 792--,EXCL.TYRES,ENGINES', nodeColor: '#0576a6',
  },
  {
    productId: '6871', productCommunity: '100', x: -1499.8689575195312, y: 4043.916259765625, nodeSize: 58.5010986328125, leamerCategory: '2', productName: 'TIN AND TIN ALLOYS,UNWROUGHT', nodeColor: '#9c219c',
  },
  {
    productId: '5147', productCommunity: '100', x: -317.0022888183594, y: 5305.46240234375, nodeSize: 61.5369873046875, leamerCategory: '10', productName: 'CARBOXYAMIDE-FUNCTION COMPOUNDS;& OTHER COMPOUN', nodeColor: '#9c219c',
  },
  {
    productId: '7233', productCommunity: '10', x: -634.2419128417969, y: 4060.202392578125, nodeSize: 56.43536376953125, leamerCategory: '9', productName: 'ROAD ROLLERS,MECHANICALLY PROPELLED', nodeColor: '#4037ab',
  },
  {
    productId: '5157', productCommunity: '100', x: -1395.4857177734375, y: 4171.158447265625, nodeSize: 59.041259765625, leamerCategory: '10', productName: 'SULPHONAMIDES,SULTONES AND SULTAMS', nodeColor: '#9c219c',
  },
  {
    productId: '5822', productCommunity: '40', x: 1441.6485595703125, y: 5228.493408203125, nodeSize: 57.78857421875, leamerCategory: '10', productName: 'AMINOPLASTS', nodeColor: '#38f2f1',
  },
  {
    productId: '7269', productCommunity: '10', x: 139.18421936035156, y: 4501.561279296875, nodeSize: 59.983917236328125, leamerCategory: '9', productName: 'PARTS OF THE MACHINES OF 726.31,726.4-,726.7-', nodeColor: '#4037ab',
  },
  {
    productId: '7452', productCommunity: '10', x: 15.762805938720703, y: 4391.703857421875, nodeSize: 112.8740463256836, leamerCategory: '9', productName: 'OTHER NON-ELECTRICAL MACH.AMP PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7259', productCommunity: '10', x: 136.6809310913086, y: 4118.7899169921875, nodeSize: 60.38597106933594, leamerCategory: '9', productName: 'PARTS OF THE MACH.  OF 725--', nodeColor: '#4037ab',
  },
  {
    productId: '6343', productCommunity: '60', x: 3357.824462890625, y: 4647.0810546875, nodeSize: 61.5380859375, leamerCategory: '3', productName: 'IMPROVED WOOD AND RECONSTITUTED WOOD', nodeColor: '#473b1c',
  },
  {
    productId: '7188', productCommunity: '10', x: 1559.9365234375, y: 3976.6728515625, nodeSize: 61.001708984375, leamerCategory: '9', productName: 'ENGINES & MOTORS,N.E.S.SUCH AS WATER TURBINES ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '5323', productCommunity: '100', x: -1270.7608032226562, y: 4479.380859375, nodeSize: 54.6737060546875, leamerCategory: '10', productName: 'SYNTH.ORG.TANNING SUBSTANCES,& INORG.TANNING SUBST', nodeColor: '#9c219c',
  },
  {
    productId: '5311', productCommunity: '100', x: -426.10792541503906, y: 5236.7998046875, nodeSize: 78.61233520507812, leamerCategory: '10', productName: 'SYNTHETIC ORGANIC DYESTUFFS', nodeColor: '#9c219c',
  },
  {
    productId: '7518', productCommunity: '180', x: -1210.515625, y: 3119.061767578125, nodeSize: 92.436279296875, leamerCategory: '9', productName: 'OFFICE MACHINES, N.E.S.', nodeColor: '#ff6bb0',
  },
  {
    productId: '7723', productCommunity: '180', x: -1164.982666015625, y: 3031.043701171875, nodeSize: 68.837890625, leamerCategory: '9', productName: 'RESISTORS,FIXED OR VARIABLE AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '0586', productCommunity: '80', x: 4198.315673828125, y: 3501.18603515625, nodeSize: 58.36767578125, leamerCategory: '4', productName: 'FRUIT,TEMPORARILY PRESERVED', nodeColor: '#ff0062',
  },
  {
    productId: '6546', productCommunity: '120', x: 2180.8685302734375, y: 4183.6357421875, nodeSize: 56.569091796875, leamerCategory: '8', productName: 'FABRICS OF GLASS FIBRE,PILE FAB.TULLE,LACE,KNITTED', nodeColor: '#730049',
  },
  {
    productId: '2472', productCommunity: '60', x: 3526.4364013671875, y: 3485.587646484375, nodeSize: 61.503173828125, leamerCategory: '3', productName: 'SAWLOGS AND VENEER LOGS,OF NON CONIFEROUS SPECIES', nodeColor: '#473b1c',
  },
  {
    productId: '7247', productCommunity: '10', x: 2317.069580078125, y: 5167.80126953125, nodeSize: 60.99365234375, leamerCategory: '9', productName: 'MACH.FOR WASHING,CLEANING,DRYING,BLEACHING TEXT.', nodeColor: '#4037ab',
  },
  {
    productId: '8219', productCommunity: '60', x: 3006.64111328125, y: 4708.39794921875, nodeSize: 130.30712890625, leamerCategory: '7', productName: 'OTHER FURNITURE AND PARTS', nodeColor: '#473b1c',
  },
  {
    productId: '6412', productCommunity: '150', x: -209.0910415649414, y: 3910.7841796875, nodeSize: 112.60484313964844, leamerCategory: '3', productName: 'PRINTING PAPER & WRITING PAPER,IN ROLLS OR SHEETS', nodeColor: '#bf8845',
  },
  {
    productId: '6282', productCommunity: '10', x: 1350.5045166015625, y: 4312.05810546875, nodeSize: 59.482177734375, leamerCategory: '8', productName: 'TRANSMISSION,CONVEYOR/ELEVATOR BELTS OF RUBBER', nodeColor: '#4037ab',
  },
  {
    productId: '8461', productCommunity: '170', x: 4730.770751953125, y: 4106.16845703125, nodeSize: 13.63623046875, leamerCategory: '7', productName: 'UNDER GARMENTS,KNITTED OR CROCHETED OF WOOL', nodeColor: '#ffc200',
  },
  {
    productId: '3221', productCommunity: '211', x: 479.6826934814453, y: 6189.388916015625, nodeSize: 56.686431884765625, leamerCategory: '2', productName: 'ANTHRACITE,WHETHER/NOT PULVERIZED,NOT AGGLOMERATE', nodeColor: '#5e1f05',
  },
  {
    productId: '7849', productCommunity: '10', x: 1450.7977905273438, y: 4411.371337890625, nodeSize: 180.9407958984375, leamerCategory: '9', productName: 'OTHER PARTS & ACCESSORIES OF MOTOR VEHICLES', nodeColor: '#4037ab',
  },
  {
    productId: '8998', productCommunity: '70', x: 5132.396240234375, y: 5045.04150390625, nodeSize: 60.93505859375, leamerCategory: '7', productName: 'SMALL-WARES AND TOILET ART.,FEATHER DUSTERS ETC.', nodeColor: '#ff707a',
  },
  {
    productId: '6575', productCommunity: '170', x: 5541.46630859375, y: 3387.88330078125, nodeSize: 58.3837890625, leamerCategory: '8', productName: 'TWINE,CORDAGE,ROPES & CABLES.& MANUFACTUR.THEREOF', nodeColor: '#ffc200',
  },
  {
    productId: '6993', productCommunity: '70', x: 2049.8516845703125, y: 5354.75634765625, nodeSize: 57.862060546875, leamerCategory: '8', productName: 'PINS & NEEDLES,FITTINGS,BASE METAL BEADS,ETC.', nodeColor: '#ff707a',
  },
  {
    productId: '7932', productCommunity: '40', x: 445.80535888671875, y: 3244.3671875, nodeSize: 127.7752685546875, leamerCategory: '9', productName: 'SHIPS,BOATS AND OTHER VESSELS', nodeColor: '#38f2f1',
  },
  {
    productId: '0421', productCommunity: '222', x: 5206.4619140625, y: 6497.23828125, nodeSize: 58.35546875, leamerCategory: '6', productName: 'RICE IN THE HUSK OR HUSKED,BUT NOT FURTHER PREPAR.', nodeColor: '#3aa67b',
  },
  {
    productId: '0422', productCommunity: '222', x: 4996.1259765625, y: 6464.52734375, nodeSize: 71.93359375, leamerCategory: '6', productName: 'RICE SEMI-MILLED OR WHOLLY MILLED, BROKEN RICE', nodeColor: '#3aa67b',
  },
  {
    productId: '6576', productCommunity: '70', x: 5477.12255859375, y: 5806.357177734375, nodeSize: 48.322265625, leamerCategory: '8', productName: 'HAT SHAPES,HAT-FORMS,HAT BODIES AND HOODS', nodeColor: '#ff707a',
  },
  {
    productId: '6978', productCommunity: '70', x: 5259.766845703125, y: 5735.875244140625, nodeSize: 58.37158203125, leamerCategory: '8', productName: 'HOUSEHOLD APPUANCES,DECORATIVE ART.,MIRRORS ETC.', nodeColor: '#ff707a',
  },
  {
    productId: '0576', productCommunity: '229', x: 5057.346435546875, y: 2286.95556640625, nodeSize: 51.41650390625, leamerCategory: '4', productName: 'FIGS,FRESH OR DRIED', nodeColor: '#78b83d',
  },
  {
    productId: '0574', productCommunity: '224', x: 4895.534912109375, y: 2201.322998046875, nodeSize: 60.11962890625, leamerCategory: '4', productName: 'APPLES,FRESH', nodeColor: '#c6eb8a',
  },
  {
    productId: '8941', productCommunity: '70', x: -2574.07958984375, y: 3534.7275390625, nodeSize: 56.546875, leamerCategory: '7', productName: 'BABY CARRIAGES,AND PARTS', nodeColor: '#ff707a',
  },
  {
    productId: '8994', productCommunity: '70', x: -2710.466064453125, y: 3194.60791015625, nodeSize: 58.82958984375, leamerCategory: '7', productName: 'UMBRELLAS,PARASOLS,WALKING STICKS,PARTS', nodeColor: '#ff707a',
  },
  {
    productId: '7928', productCommunity: '20', x: -1646.2838745117188, y: 4648.56298828125, nodeSize: 57.5989990234375, leamerCategory: '9', productName: 'AIRCRAFT,N.E.S.BALLOONS,GLIDERS ETC AND EQUIPMENT', nodeColor: '#0576a6',
  },
  {
    productId: '7923', productCommunity: '20', x: -1960.3414306640625, y: 4660.4482421875, nodeSize: 87.071044921875, leamerCategory: '9', productName: 'AIRCRAFT NOT EXCEEDING AN UNLADEN WEIGHT OF 15000 KG', nodeColor: '#0576a6',
  },
  {
    productId: '0577', productCommunity: '222', x: 5492.356689453125, y: 3638.4853515625, nodeSize: 63.15966796875, leamerCategory: '4', productName: 'EDIBLE NUTS(EXCL.NUTS USED FOR THE EXTRACT.OF OIL)', nodeColor: '#3aa67b',
  },
  {
    productId: '7914', productCommunity: '10', x: 204.3105239868164, y: 5554.552001953125, nodeSize: 54.33406066894531, leamerCategory: '9', productName: 'RAILWAY & TRAMWAY PASSENGER COACHES & LUGGAGE VAN', nodeColor: '#4037ab',
  },
  {
    productId: '2929', productCommunity: '229', x: 5484.277099609375, y: 3081.811279296875, nodeSize: 60.50048828125, leamerCategory: '5', productName: 'OTHER MATERIALS OF VEGETABLE ORIGIN, N.E.S.', nodeColor: '#78b83d',
  },
  {
    productId: '5145', productCommunity: '100', x: -462.65061950683594, y: 4287.3076171875, nodeSize: 61.453643798828125, leamerCategory: '10', productName: 'AMINE-FUNCTION COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '7922', productCommunity: '20', x: 3502.4459228515625, y: 6140.447998046875, nodeSize: 54.718017578125, leamerCategory: '9', productName: 'AIRCRAFT NOT EXCEEDING AN UNLADEN WEIGHT 2000 KG', nodeColor: '#0576a6',
  },
  {
    productId: '7912', productCommunity: '999', x: 3757.706787109375, y: 6095.41796875, nodeSize: 58.16748046875, leamerCategory: '9', productName: 'OTHER RAIL LOCOMOTIVES; TENDERS', nodeColor: '#9c9a87',
  },
  {
    productId: '6637', productCommunity: '180', x: -464.6072540283203, y: 4008.702392578125, nodeSize: 57.034576416015625, leamerCategory: '7', productName: 'REFRACTORY GOODS(EG.,RETORTS,CRUJCIBLES ETC) N.E.S', nodeColor: '#ff6bb0',
  },
  {
    productId: '0252', productCommunity: '239', x: 789.1532592773438, y: 3502.531982421875, nodeSize: 52.7132568359375, leamerCategory: '5', productName: 'EGGS NOT IN SHELL', nodeColor: '#9fb3bf',
  },
  {
    productId: '5169', productCommunity: '100', x: -58.65522766113281, y: 4235.061279296875, nodeSize: 60.190277099609375, leamerCategory: '10', productName: 'ORGANIC CHEMICALS,N.E.S', nodeColor: '#9c219c',
  },
  {
    productId: '8928', productCommunity: '999', x: 2662.0341796875, y: 4217.3466796875, nodeSize: 85.63232421875, leamerCategory: '7', productName: 'PRINTED MATTER,N.E.S.', nodeColor: '#9c9a87',
  },
  {
    productId: '6623', productCommunity: '30', x: 2090.6103515625, y: 5064.6328125, nodeSize: 60.30517578125, leamerCategory: '7', productName: 'REFRACTORY BRICKS & OTHER REFRACT.CONSTRUCT.MATER', nodeColor: '#299fff',
  },
  {
    productId: '6415', productCommunity: '150', x: 2305.164306640625, y: 4140.526123046875, nodeSize: 109.66650390625, leamerCategory: '3', productName: 'PAPER AND PAPERBOARD,IN ROLLS OR SHEETS,N.E.S.', nodeColor: '#bf8845',
  },
  {
    productId: '2460', productCommunity: '60', x: 3161.3173828125, y: 4882.099609375, nodeSize: 60.44775390625, leamerCategory: '3', productName: 'PULPWOOD (INCLUDING CHIPS AND WOOD WASTE)', nodeColor: '#473b1c',
  },
  {
    productId: '5914', productCommunity: '110', x: 2749.4281005859375, y: 3257.54052734375, nodeSize: 57.104736328125, leamerCategory: '10', productName: 'DISINFECT.,ANTI-SPROUTING PROD.ETC.PACKED FOR SALE', nodeColor: '#4b0046',
  },
  {
    productId: '8720', productCommunity: '100', x: -643.6988220214844, y: 4398.021728515625, nodeSize: 120.08538818359375, leamerCategory: '9', productName: 'MEDICAL INSTRUMENTS AND APPLIANCES', nodeColor: '#9c219c',
  },
  {
    productId: '6577', productCommunity: '10', x: 2362.854736328125, y: 4290.002197265625, nodeSize: 60.501953125, leamerCategory: '8', productName: 'WADDING.TEXTIL.FABRICS FOR USE IN MACHINERY/PLANT', nodeColor: '#4037ab',
  },
  {
    productId: '5621', productCommunity: '110', x: 3112.931884765625, y: 5353.215087890625, nodeSize: 64.587890625, leamerCategory: '10', productName: 'MINERAL OR CHEMICAL FERTILIZERS,NITROGENOUS', nodeColor: '#4b0046',
  },
  {
    productId: '2332', productCommunity: '140', x: 3051.0360107421875, y: 5111.317626953125, nodeSize: 50.912353515625, leamerCategory: '4', productName: 'RECLAIMED RUBBER;WASTE & SCRAP OF UNHARDENED RUBB.', nodeColor: '#a66195',
  },
  {
    productId: '0113', productCommunity: '239', x: 1620.82275390625, y: 5240.939697265625, nodeSize: 87.042724609375, leamerCategory: '5', productName: 'MEAT OF SWINE, FRESH, CHILLED OR FROZEN', nodeColor: '#9fb3bf',
  },
  {
    productId: '7933', productCommunity: '40', x: 324.30809020996094, y: 3052.742431640625, nodeSize: 52.650543212890625, leamerCategory: '9', productName: 'SHIPS,BOATS AND OTHER VESSELS FOR BREAKING UP', nodeColor: '#38f2f1',
  },
  {
    productId: '2119', productCommunity: '230', x: 4227.821533203125, y: 2467.411865234375, nodeSize: 53.75439453125, leamerCategory: '5', productName: 'HIDES AND SKINS,N.E.S WASTE AND USED LEATHER', nodeColor: '#21366b',
  },
  {
    productId: '8749', productCommunity: '10', x: 61.68340301513672, y: 4804.033447265625, nodeSize: 83.63388061523438, leamerCategory: '9', productName: 'PARTS,N.E.S.ACCESSORIES FOR 873-,8743-,87454,8748', nodeColor: '#4037ab',
  },
  {
    productId: '8471', productCommunity: '170', x: 4892.69873046875, y: 4698.91845703125, nodeSize: 61.689453125, leamerCategory: '7', productName: 'CLOTHING ACCESSORIES OF TEXTILE FABRICS', nodeColor: '#ffc200',
  },
  {
    productId: '7491', productCommunity: '10', x: 703.2437438964844, y: 4315.702880859375, nodeSize: 96.85467529296875, leamerCategory: '9', productName: 'BALL,ROLLER OR NEEDLE ROLLER BEARINGS', nodeColor: '#4037ab',
  },
  {
    productId: '5113', productCommunity: '100', x: -606.5596008300781, y: 4948.9697265625, nodeSize: 61.69708251953125, leamerCategory: '10', productName: 'HALOGENATED DERIVATIVES OF HYDROCARBONS', nodeColor: '#9c219c',
  },
  {
    productId: '7219', productCommunity: '10', x: 801.1462707519531, y: 3621.40771484375, nodeSize: 59.21649169921875, leamerCategory: '9', productName: 'AGRIC.MACH.& APPLIANCES,N.E.S.AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7371', productCommunity: '10', x: 290.65281677246094, y: 4895.5419921875, nodeSize: 58.499908447265625, leamerCategory: '9', productName: 'CONVERTERS,LADLES,INGOT MOULDS AND CASTING MACH.', nodeColor: '#4037ab',
  },
  {
    productId: '7752', productCommunity: '60', x: 2971.0350341796875, y: 4228.83251953125, nodeSize: 73.972412109375, leamerCategory: '9', productName: 'REFRIG HH,FD FRZ,E/O', nodeColor: '#473b1c',
  },
  {
    productId: '7436', productCommunity: '10', x: 1523.1502075195312, y: 5073.3349609375, nodeSize: 93.1241455078125, leamerCategory: '9', productName: 'FILTERING & PURIFYING MACH.FOR LIQUIDS & GASES', nodeColor: '#4037ab',
  },
  {
    productId: '0545', productCommunity: '80', x: 4528.514404296875, y: 3232.193603515625, nodeSize: 89.85888671875, leamerCategory: '4', productName: 'OTHER FRESH OR CHILLED VEGETABLES', nodeColor: '#ff0062',
  },
  {
    productId: '0230', productCommunity: '231', x: 3495.8890380859375, y: 5066.033447265625, nodeSize: 60.437744140625, leamerCategory: '5', productName: 'BUTTER', nodeColor: '#223f59',
  },
  {
    productId: '6996', productCommunity: '60', x: 2785.614990234375, y: 4195.509765625, nodeSize: 61.39453125, leamerCategory: '8', productName: 'MISCELLANEOUS ARTICLES OF BASE METAL', nodeColor: '#473b1c',
  },
  {
    productId: '2712', productCommunity: '110', x: 3784.455810546875, y: 6616.67041015625, nodeSize: 49.10302734375, leamerCategory: '2', productName: 'SODIUM NITRATE,NATURAL.CONTAIN.<16.3% OF NITROGEN', nodeColor: '#4b0046',
  },
  {
    productId: '2652', productCommunity: '120', x: 2332.1363525390625, y: 5660.61474609375, nodeSize: 40.921630859375, leamerCategory: '6', productName: 'TRUE HEMP,RAW OR PROCESSED,NOT SPUN;TOW AND WASTE', nodeColor: '#730049',
  },
  {
    productId: '2614', productCommunity: '160', x: 5643.1171875, y: 6124.638916015625, nodeSize: 50.0205078125, leamerCategory: '6', productName: 'SILK WORM COCOONS SUITABL.FOR REELING & SILK WASTE', nodeColor: '#c4af78',
  },
  {
    productId: '2632', productCommunity: '222', x: 4830.317626953125, y: 6338.060302734375, nodeSize: 50.75341796875, leamerCategory: '6', productName: 'COTTON LINTERS', nodeColor: '#3aa67b',
  },
  {
    productId: '2634', productCommunity: '222', x: 4590.394775390625, y: 6049.91015625, nodeSize: 50.27392578125, leamerCategory: '6', productName: 'COTTON,CARDED OR COMBED', nodeColor: '#3aa67b',
  },
  {
    productId: '4233', productCommunity: '222', x: 4570.016845703125, y: 6429.126953125, nodeSize: 50.96826171875, leamerCategory: '6', productName: 'COTTON SEED OIL', nodeColor: '#3aa67b',
  },
  {
    productId: '6513', productCommunity: '160', x: 4532.833251953125, y: 5754.11181640625, nodeSize: 78.98388671875, leamerCategory: '8', productName: 'COTTON YARN', nodeColor: '#c4af78',
  },
  {
    productId: '6582', productCommunity: '60', x: 3274.6322021484375, y: 5597.228515625, nodeSize: 57.385498046875, leamerCategory: '8', productName: 'TARPAULINS,SAILS,AWNINGS,SUNBLINDS,TENTS ETC.', nodeColor: '#473b1c',
  },
  {
    productId: '6545', productCommunity: '222', x: 4972.657470703125, y: 6181.101318359375, nodeSize: 51.78564453125, leamerCategory: '8', productName: 'FABRICS,WOVEN,OF JUTE OR OF OTHER TEXTILE BAST FIB', nodeColor: '#3aa67b',
  },
  {
    productId: '2651', productCommunity: '160', x: 4059.5972900390625, y: 6744.699951171875, nodeSize: 49.660888671875, leamerCategory: '6', productName: 'FLAX & RAMIE,FLAX TOW,RAMIE NOILS,& WASTE OF FLAX', nodeColor: '#c4af78',
  },
  {
    productId: '7432', productCommunity: '10', x: 799.6046752929688, y: 4481.6689453125, nodeSize: 13.6363525390625, leamerCategory: '9', productName: 'PARTS OF THE PUMPS & COMPRESSORS OF 743.1-', nodeColor: '#4037ab',
  },
  {
    productId: '8212', productCommunity: '60', x: 3161.8154296875, y: 5149.482177734375, nodeSize: 65.517578125, leamerCategory: '7', productName: 'FURNITURE FOR MEDICAL,SURGICAL.DENTAL ETC.PRACTICE', nodeColor: '#473b1c',
  },
  {
    productId: '7369', productCommunity: '10', x: 730.4408874511719, y: 4530.086181640625, nodeSize: 66.07952880859375, leamerCategory: '9', productName: 'PARTS OF THE MACHINE-TOOLS OF 736-', nodeColor: '#4037ab',
  },
  {
    productId: '6289', productCommunity: '10', x: 1836.38330078125, y: 4323.795654296875, nodeSize: 85.01708984375, leamerCategory: '8', productName: 'OTHER ARTICLES OF RUBBER,N.E.S.', nodeColor: '#4037ab',
  },
  {
    productId: '5827', productCommunity: '100', x: -774.6904296875, y: 4857.59765625, nodeSize: 59.91455078125, leamerCategory: '10', productName: 'SILICONES', nodeColor: '#9c219c',
  },
  {
    productId: '7742', productCommunity: '100', x: -506.3202209472656, y: 4684.303955078125, nodeSize: 77.78900146484375, leamerCategory: '9', productName: 'APP.BASED ON THE USE OF X-RAYS OR OF RADIATIONS', nodeColor: '#9c219c',
  },
  {
    productId: '0913', productCommunity: '239', x: 1836.4766845703125, y: 4897.252197265625, nodeSize: 51.81689453125, leamerCategory: '6', productName: 'LARD,OTHER PIG FAT& POULTRY,RENDERED/SOLVENT-EXT.', nodeColor: '#9fb3bf',
  },
  {
    productId: '8121', productCommunity: '10', x: 1944.8047485351562, y: 4702.113037109375, nodeSize: 61.1768798828125, leamerCategory: '8', productName: 'BOILERS & RADIATORS FOR CENTRAL HEATING', nodeColor: '#4037ab',
  },
  {
    productId: '5989', productCommunity: '100', x: -493.66845703125, y: 4831.475341796875, nodeSize: 132.8848876953125, leamerCategory: '10', productName: 'CHEMICAL PRODUCTS AND PREPARATIONS,N.E.S.', nodeColor: '#9c219c',
  },
  {
    productId: '7429', productCommunity: '10', x: 337.07427978515625, y: 4662.23583984375, nodeSize: 68.826904296875, leamerCategory: '9', productName: 'PARTS OF THE PUMPS & LIQ.ELEVATORS OF 742-', nodeColor: '#4037ab',
  },
  {
    productId: '5851', productCommunity: '150', x: 113.8791275024414, y: 3280.911376953125, nodeSize: 13.636367797851562, leamerCategory: '10', productName: 'NATURAL RESINS MODIFIED BY FUSION;ARTIFIC.RESINS', nodeColor: '#bf8845',
  },
  {
    productId: '2518', productCommunity: '150', x: -28.274044051766396, y: 3311.38330078125, nodeSize: 57.22644802927971, leamerCategory: '3', productName: 'CHEMICAL WOOD PULP,SULPHITE', nodeColor: '#bf8845',
  },
  {
    productId: '6413', productCommunity: '150', x: 79.3415584564209, y: 3038.932861328125, nodeSize: 81.65752029418945, leamerCategory: '3', productName: 'KRAFT PAPER AND PAPERBOARD,IN ROLLS OR SHEETS', nodeColor: '#bf8845',
  },
  {
    productId: '5981', productCommunity: '150', x: 159.90382385253906, y: 3135.624267578125, nodeSize: 57.67413330078125, leamerCategory: '10', productName: 'WOOD- AND RESIN-BASED CHEMICAL PRODUCTS', nodeColor: '#bf8845',
  },
  {
    productId: '2517', productCommunity: '150', x: -231.7383041381836, y: 3283.256591796875, nodeSize: 107.69392395019531, leamerCategory: '3', productName: 'CHEMICAL WOOD PULP,SODA OR SULPHATE', nodeColor: '#bf8845',
  },
  {
    productId: '2516', productCommunity: '150', x: -247.63086700439453, y: 2889.585693359375, nodeSize: 57.81028747558594, leamerCategory: '3', productName: 'CHEMICAL WOOD PULP,DISSOLVING GRADES', nodeColor: '#bf8845',
  },
  {
    productId: '2519', productCommunity: '150', x: -355.70591735839844, y: 2998.524658203125, nodeSize: 57.398651123046875, leamerCategory: '3', productName: 'OTHER CELLULOSIC PULPS', nodeColor: '#bf8845',
  },
  {
    productId: '6831', productCommunity: '213', x: -313.01141357421875, y: 2602.842041015625, nodeSize: 66.7950439453125, leamerCategory: '2', productName: 'NICKEL & NICKEL ALLOYS,UNWROUGHT (INGOTS,PIGS,ETC)', nodeColor: '#c93c00',
  },
  {
    productId: '3353', productCommunity: '211', x: 1370.7723388671875, y: 3522.361572265625, nodeSize: 54.279052734375, leamerCategory: '1', productName: 'PITCH & PITCH COKE OBTAIN.FROM COAL TAR/MINER.TARS', nodeColor: '#5e1f05',
  },
  {
    productId: '3354', productCommunity: '212', x: 2059.8558349609375, y: 2958.35302734375, nodeSize: 61.443603515625, leamerCategory: '1', productName: 'PETROLEUM BITUMEN,PETROL.COKE & BITUMIN.MIXTUR.NES', nodeColor: '#ad2b2b',
  },
  {
    productId: '3352', productCommunity: '110', x: 1743.3101806640625, y: 5953.50146484375, nodeSize: 60.114013671875, leamerCategory: '1', productName: 'MINERAL TARS AND PRODUCTS OF THEIR DISTILLATION', nodeColor: '#4b0046',
  },
  {
    productId: '6638', productCommunity: '999', x: 1729.7349853515625, y: 5760.73974609375, nodeSize: 56.669677734375, leamerCategory: '7', productName: 'MANUFACTURES OF ASBESTOS: FRICTION MATERIALS', nodeColor: '#9c9a87',
  },
  {
    productId: '6511', productCommunity: '160', x: 5476.8193359375, y: 6009.148193359375, nodeSize: 53.7705078125, leamerCategory: '8', productName: 'SILK YARN & YARN SPUN FROM NOIL/OTHER SILK WASTE', nodeColor: '#c4af78',
  },
  {
    productId: '2613', productCommunity: '160', x: 5590.5302734375, y: 6179.197021484375, nodeSize: 54.0380859375, leamerCategory: '6', productName: 'RAW SILK (NOT THROWN)', nodeColor: '#c4af78',
  },
  {
    productId: '3231', productCommunity: '211', x: 421.8949432373047, y: 5735.16748046875, nodeSize: 49.660736083984375, leamerCategory: '2', productName: 'BRIOUET.OVOIDS & SIM.SOLID FUELS,OF COAL PEAT LIG.', nodeColor: '#5e1f05',
  },
  {
    productId: '6646', productCommunity: '30', x: 420.034423828125, y: 5539.24560546875, nodeSize: 13.6363525390625, leamerCategory: '7', productName: 'BRICKS,TILES,SLABS & OTH.ART.OF PRESSED/MOUL.GLASS', nodeColor: '#299fff',
  },
  {
    productId: '7283', productCommunity: '10', x: 2479.5361328125, y: 5447.475341796875, nodeSize: 67.669921875, leamerCategory: '9', productName: 'MACH.FOR SORTING,SCREENING,SEPARATING,WASHING ORE', nodeColor: '#4037ab',
  },
  {
    productId: '6733', productCommunity: '50', x: 3739.2930908203125, y: 2688.728759765625, nodeSize: 71.675537109375, leamerCategory: '8', productName: 'ANGLES,SHAPES & SECTIONS & SHEET PILING,OF I RON/ST', nodeColor: '#a33bff',
  },
  {
    productId: '6861', productCommunity: '214', x: 1094.91015625, y: 3305.783203125, nodeSize: 61.8232421875, leamerCategory: '2', productName: 'ZINC AND ZINC ALLOYS,UNWROUGHT', nodeColor: '#d66011',
  },
  {
    productId: '6731', productCommunity: '10', x: 2544.77880859375, y: 5814.966064453125, nodeSize: 61.90771484375, leamerCategory: '8', productName: 'WIRE ROD OF IRON OR STEEL', nodeColor: '#4037ab',
  },
  {
    productId: '6724', productCommunity: '50', x: 835.0897521972656, y: 3359.521484375, nodeSize: 54.83221435546875, leamerCategory: '8', productName: 'PUDDLED BARS AND PILINGS;INGOTS,BLOCKS,LUMPS ETC.', nodeColor: '#a33bff',
  },
  {
    productId: '6725', productCommunity: '50', x: 744.9906311035156, y: 2918.497314453125, nodeSize: 92.00445556640625, leamerCategory: '8', productName: 'BLOOMS,BILLETS,SLABS & SHEET BARS OF IRON OR STEEL', nodeColor: '#a33bff',
  },
  {
    productId: '0452', productCommunity: '229', x: 1909.66943359375, y: 6056.6162109375, nodeSize: 53.73779296875, leamerCategory: '6', productName: 'OATS,UNMILLED', nodeColor: '#78b83d',
  },
  {
    productId: '6716', productCommunity: '50', x: 929.9297485351562, y: 3635.0555419921875, nodeSize: 81.25341796875, leamerCategory: '8', productName: 'FERRO-ALLOYS', nodeColor: '#a33bff',
  },
  {
    productId: '6973', productCommunity: '60', x: 2922.8912353515625, y: 4289.757568359375, nodeSize: 60.487548828125, leamerCategory: '8', productName: 'DOM ESTIC-TYPE,NON-ELECTRIC HEATING,COOKING APPAR.', nodeColor: '#473b1c',
  },
  {
    productId: '8211', productCommunity: '60', x: 3879.28857421875, y: 4513.0869140625, nodeSize: 121.015625, leamerCategory: '7', productName: 'CHAIRS AND OTHER SEATS AND PARTS', nodeColor: '#473b1c',
  },
  {
    productId: '0459', productCommunity: '222', x: 4719.56103515625, y: 6662.49755859375, nodeSize: 57.66796875, leamerCategory: '6', productName: 'BUCKWHEAT,MILLET,CANARY SEED,GRAIN SORGHUM ETC', nodeColor: '#3aa67b',
  },
  {
    productId: '0811', productCommunity: '222', x: 4672.275146484375, y: 6841.782470703125, nodeSize: 58.29248046875, leamerCategory: '6', productName: 'HAY AND FODDER,GREEN OR DRY', nodeColor: '#3aa67b',
  },
  {
    productId: '5829', productCommunity: '100', x: -1206.9054565429688, y: 4030.5919189453125, nodeSize: 61.5626220703125, leamerCategory: '10', productName: 'OTHER CONDENSATION,POLYCONDENSATION/POLYADD.PROD', nodeColor: '#9c219c',
  },
  {
    productId: '5331', productCommunity: '100', x: -1392.1807861328125, y: 5565.62060546875, nodeSize: 68.239990234375, leamerCategory: '10', productName: 'OTHER COLOURING MATTER', nodeColor: '#9c219c',
  },
  {
    productId: '6281', productCommunity: '100', x: -1473.160888671875, y: 5494.792236328125, nodeSize: 55.161376953125, leamerCategory: '8', productName: 'HYGIENIC AND PHARMACEUTICAL ARTICLES OF RUBBER', nodeColor: '#9c219c',
  },
  {
    productId: '5139', productCommunity: '120', x: 1560.1398315429688, y: 3051.4736328125, nodeSize: 61.6497802734375, leamerCategory: '10', productName: 'CARBOXYLIC ACIDS WITH ALCOHOL,PHENOL ETC.FUNCTION', nodeColor: '#730049',
  },
  {
    productId: '0372', productCommunity: '240', x: 6023.5859375, y: 2558.71435546875, nodeSize: 61.1025390625, leamerCategory: '5', productName: 'CRUSTACEANS AND MOLLUSCS,PREPARED OR PRESERVED', nodeColor: '#8c94d1',
  },
  {
    productId: '7441', productCommunity: '10', x: 2165.2757568359375, y: 6130.507080078125, nodeSize: 78.392822265625, leamerCategory: '9', productName: 'WORK TRUCKS,MECHANICALLY PROPELLED,FOR SHORT DIST.', nodeColor: '#4037ab',
  },
  {
    productId: '6872', productCommunity: '219', x: -1855.57958984375, y: 5268.34375, nodeSize: 52.189208984375, leamerCategory: '2', productName: 'TIN AND TIN ALLOYS,WORKED', nodeColor: '#ffc86c',
  },
  {
    productId: '5114', productCommunity: '110', x: 1720.089599609375, y: 5556.226806640625, nodeSize: 55.171630859375, leamerCategory: '10', productName: 'SULPHON.NITRATJNITROSAT.DERIVATIV.OF HYDROCARBONS', nodeColor: '#4b0046',
  },
  {
    productId: '5842', productCommunity: '100', x: -1686.1170654296875, y: 4969.0517578125, nodeSize: 51.67822265625, leamerCategory: '10', productName: 'CELLULOSE NITRATES', nodeColor: '#9c219c',
  },
  {
    productId: '5841', productCommunity: '100', x: 12.269344329833984, y: 5256.854248046875, nodeSize: 54.10741424560547, leamerCategory: '10', productName: 'REGENERATED CELLULOSE', nodeColor: '#9c219c',
  },
  {
    productId: '0343', productCommunity: '240', x: 5828.817626953125, y: 2602.8271484375, nodeSize: 58.49560546875, leamerCategory: '5', productName: 'FISH FILLETS,FRESH OR CHILLED', nodeColor: '#8c94d1',
  },
  {
    productId: '5843', productCommunity: '100', x: -1019.663330078125, y: 5611.15380859375, nodeSize: 54.553466796875, leamerCategory: '10', productName: 'CELLULOSE ACETATES', nodeColor: '#9c219c',
  },
  {
    productId: '0013', productCommunity: '239', x: 1644.18017578125, y: 5684.486572265625, nodeSize: 58.152099609375, leamerCategory: '5', productName: 'SWINE, LIVE', nodeColor: '#9fb3bf',
  },
  {
    productId: '8959', productCommunity: '70', x: -1516.6016235351562, y: 4778.448486328125, nodeSize: 61.0843505859375, leamerCategory: '7', productName: 'OTHER OFFICE AND STATIONERY SUPPLIES', nodeColor: '#ff707a',
  },
  {
    productId: '6112', productCommunity: '999', x: -1665.7894287109375, y: 4497.6337890625, nodeSize: 51.858154296875, leamerCategory: '8', productName: 'COMPOSITION LEATHER FIBRE,IN SLABS ETC.,SHEETS,ETC', nodeColor: '#9c9a87',
  },
  {
    productId: '5838', productCommunity: '10', x: 202.6240005493164, y: 3565.127197265625, nodeSize: 54.99757385253906, leamerCategory: '10', productName: 'ION EXCHANGERS OF POLYMERIZATION/COPOLYMERIZ.TYPE', nodeColor: '#4037ab',
  },
  {
    productId: '0481', productCommunity: '229', x: 3180.80322265625, y: 3058.2845458984375, nodeSize: 59.12109375, leamerCategory: '6', productName: 'CEREAL GRAINS,WORKED/PREPARED,(BREAKFAST FOODS)', nodeColor: '#78b83d',
  },
  {
    productId: '7731', productCommunity: '60', x: 4043.1990966796875, y: 4240.7138671875, nodeSize: 134.352783203125, leamerCategory: '9', productName: 'INSULATED,ELECT.WIRE,CABLE,BARS,STRIP AND THE LIKE', nodeColor: '#473b1c',
  },
  {
    productId: '7721', productCommunity: '10', x: 1326.29541015625, y: 5120.0166015625, nodeSize: 153.0634765625, leamerCategory: '9', productName: 'ELECT.APP.SUCH AS SWITCHES,RELAYS,FUSES,PWGS ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '2924', productCommunity: '229', x: 4761.227294921875, y: 3397.868408203125, nodeSize: 57.89990234375, leamerCategory: '5', productName: 'PLANTS,SEEDS,FRUIT USED IN PERFUMERY,PHARMACY', nodeColor: '#78b83d',
  },
  {
    productId: '0470', productCommunity: '229', x: 3844.1959228515625, y: 2808.99169921875, nodeSize: 54.175048828125, leamerCategory: '6', productName: 'OTHER CEREAL MEALS AND FLOURS', nodeColor: '#78b83d',
  },
  {
    productId: '5332', productCommunity: '100', x: -207.4856719970703, y: 4812.5458984375, nodeSize: 60.789031982421875, leamerCategory: '10', productName: 'PRINTING INK', nodeColor: '#9c219c',
  },
  {
    productId: '6581', productCommunity: '170', x: 5002.7177734375, y: 3305.4677734375, nodeSize: 57.6494140625, leamerCategory: '8', productName: 'SACKS AND BAGS,OF TEXTILE MATERIALS', nodeColor: '#ffc200',
  },
  {
    productId: '6746', productCommunity: '50', x: 1084.9554443359375, y: 3731.0625, nodeSize: 104.2216796875, leamerCategory: '8', productName: 'SHEETS & PLATES,ROLLED;THICKNESS OF LESS THAN 3MM.', nodeColor: '#a33bff',
  },
  {
    productId: '6744', productCommunity: '50', x: 1421.9383544921875, y: 3806.9599609375, nodeSize: 90.385009765625, leamerCategory: '8', productName: 'SHEETS & PLATES,ROLLED >4.75MM OF IRON/STEEL', nodeColor: '#a33bff',
  },
  {
    productId: '0484', productCommunity: '80', x: 3828.4637451171875, y: 3953.5565185546875, nodeSize: 76.086181640625, leamerCategory: '6', productName: 'BAKERY PRODUCTS (E.G.,BREAD,BISCUITS,CAKES) ETC.', nodeColor: '#ff0062',
  },
  {
    productId: '6251', productCommunity: '10', x: 2455.39208984375, y: 4778.563720703125, nodeSize: 93.779296875, leamerCategory: '8', productName: 'TYRES,PNEUMATIC,NEW,OF A KIND USED ON MOTOR CARS', nodeColor: '#4037ab',
  },
  {
    productId: '7521', productCommunity: '180', x: -784.0037231445312, y: 2781.63037109375, nodeSize: 58.83056640625, leamerCategory: '9', productName: 'ANALOGUE & HYBRID DATA PROCESSING MACHINES', nodeColor: '#ff6bb0',
  },
  {
    productId: '7522', productCommunity: '180', x: -1766.7805786132812, y: 3713.0517578125, nodeSize: 105.3973388671875, leamerCategory: '9', productName: 'COMPLETE DIGITAL DATA PROCESSING MACHINES', nodeColor: '#ff6bb0',
  },
  {
    productId: '7512', productCommunity: '180', x: -699.8338012695312, y: 2993.177001953125, nodeSize: 61.2620849609375, leamerCategory: '9', productName: 'CALCULATING MACHINES,CASH REGISTERS.TICKET & SIM.', nodeColor: '#ff6bb0',
  },
  {
    productId: '0564', productCommunity: '80', x: 4290.492431640625, y: 3243.55029296875, nodeSize: 54.62451171875, leamerCategory: '4', productName: 'FLOURS,MEALS & FLAKES OF POTATOES.FRUITS & VEGETA.', nodeColor: '#ff0062',
  },
  {
    productId: '7751', productCommunity: '180', x: -636.8472900390625, y: 3635.2725830078125, nodeSize: 62.971435546875, leamerCategory: '9', productName: 'HOUSEHOLD TYPE LAUNDRY EQUIPMENT', nodeColor: '#ff6bb0',
  },
  {
    productId: '7612', productCommunity: '180', x: -1553.2720947265625, y: 3039.012939453125, nodeSize: 54.836181640625, leamerCategory: '9', productName: 'TELEVISION RECEIVERS,MONOCHROME', nodeColor: '#ff6bb0',
  },
  {
    productId: '7591', productCommunity: '180', x: -923.3427734375, y: 2845.2410888671875, nodeSize: 88.0374755859375, leamerCategory: '9', productName: 'PARTS OF AND ACCESSORIES SUITABLE FOR 751.1-,751.8', nodeColor: '#ff6bb0',
  },
  {
    productId: '8983', productCommunity: '180', x: -735.0314636230469, y: 3151.947509765625, nodeSize: 128.33953857421875, leamerCategory: '7', productName: 'GRAMOPHONE RECORDS AND SIM.SOUND RECORDINGS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7622', productCommunity: '180', x: -1852.1602783203125, y: 3134.9488525390625, nodeSize: 65.8115234375, leamerCategory: '9', productName: 'RADIO-BROADCAST RECEIVERS PORTABLE,INCL.SOUND REC.', nodeColor: '#ff6bb0',
  },
  {
    productId: '7628', productCommunity: '180', x: -2052.1404418945312, y: 3121.7960205078125, nodeSize: 84.5252685546875, leamerCategory: '9', productName: 'OTHER RADIO-BROADCAST RECEIVERS', nodeColor: '#ff6bb0',
  },
  {
    productId: '6749', productCommunity: '50', x: 702.2485046386719, y: 3293.33349609375, nodeSize: 102.79547119140625, leamerCategory: '8', productName: 'OTHER SHEETS AND PLATES,OF IRON OR STEEL,WORKED', nodeColor: '#a33bff',
  },
  {
    productId: '8935', productCommunity: '10', x: 1929.7338256835938, y: 4434.69775390625, nodeSize: 52.5782470703125, leamerCategory: '7', productName: 'ART.OF ELECTRIC LIGHTING OF MATERIALS OF DIV.58', nodeColor: '#4037ab',
  },
  {
    productId: '6747', productCommunity: '50', x: 924.454345703125, y: 3359.341796875, nodeSize: 60.5831298828125, leamerCategory: '8', productName: 'TINNED SHEETS AND PLATES,OF STEEL', nodeColor: '#a33bff',
  },
  {
    productId: '6647', productCommunity: '10', x: 2401.52685546875, y: 4403.10791015625, nodeSize: 61.091796875, leamerCategory: '7', productName: 'SAFETY GLASS CONSISTING OF TOUGHENED/LAMINAT.GLASS', nodeColor: '#4037ab',
  },
  {
    productId: '5417', productCommunity: '120', x: 1770.446533203125, y: 3621.2373046875, nodeSize: 154.154296875, leamerCategory: '10', productName: 'MEDICAMENTS(INCLUDING VETERINARY MEDICAMENTS)', nodeColor: '#730049',
  },
  {
    productId: '6954', productCommunity: '10', x: 537.6474761962891, y: 4308.408935546875, nodeSize: 95.19601440429688, leamerCategory: '8', productName: 'INTERCHANGEABLE TOOLS FOR HAND & MACHINE TOOLS', nodeColor: '#4037ab',
  },
  {
    productId: '5416', productCommunity: '100', x: -254.70987701416016, y: 4388.240966796875, nodeSize: 85.06797790527344, leamerCategory: '10', productName: 'GLYCOSIDES;GLANDS OR OTHER ORGANS & THEIR EXTRACTS', nodeColor: '#9c219c',
  },
  {
    productId: '5123', productCommunity: '100', x: -815.2696228027344, y: 4405.951171875, nodeSize: 60.48468017578125, leamerCategory: '10', productName: 'PHENOLS & PHEN.-ALCO.& THEIR HALOGENAT.DERIVATIVES', nodeColor: '#9c219c',
  },
  {
    productId: '6573', productCommunity: '120', x: 1907.156494140625, y: 5234.7890625, nodeSize: 74.4013671875, leamerCategory: '8', productName: 'COATED/IMPREGNATED TEXTILE FABRICS & PRODUCTS NES.', nodeColor: '#730049',
  },
  {
    productId: '6745', productCommunity: '50', x: 1313.846435546875, y: 3890.789306640625, nodeSize: 61.763427734375, leamerCategory: '8', productName: 'SHEETS & PLATES,RLD.THICKNS.3MM TO 4,75MM IRN/STL.', nodeColor: '#a33bff',
  },
  {
    productId: '7422', productCommunity: '10', x: 371.42572021484375, y: 3919.7305908203125, nodeSize: 60.5953369140625, leamerCategory: '9', productName: 'CENTRIFUGAL PUMPS,OTHER THAN 742.81', nodeColor: '#4037ab',
  },
  {
    productId: '8841', productCommunity: '180', x: -1459.5662841796875, y: 3444.56591796875, nodeSize: 62.3447265625, leamerCategory: '9', productName: 'LENSES,PRISMS,MIRRORS,OTHER OPTICAL ELEMENTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '6997', productCommunity: '60', x: 2133.6158447265625, y: 4560.4501953125, nodeSize: 100.579833984375, leamerCategory: '8', productName: 'ARTICLES OF IRON OR STEEL, N.E.S.', nodeColor: '#473b1c',
  },
  {
    productId: '5836', productCommunity: '100', x: -1095.7189331054688, y: 4718.551513671875, nodeSize: 65.1927490234375, leamerCategory: '10', productName: 'ACRYLIC POLYMERS,METHACRYLIC POLYMERS, ETC.', nodeColor: '#9c219c',
  },
  {
    productId: '7423', productCommunity: '10', x: 1149.273193359375, y: 4992.995849609375, nodeSize: 59.2822265625, leamerCategory: '9', productName: 'ROTARY PUMPS,OTHER THAN 742.81', nodeColor: '#4037ab',
  },
  {
    productId: '6424', productCommunity: '120', x: 2902.1888427734375, y: 3895.8441162109375, nodeSize: 60.464111328125, leamerCategory: '3', productName: 'PAPER AND PAPERBOARD,CUT TO SIZE OR SHAPE,N.E.S.', nodeColor: '#730049',
  },
  {
    productId: '8822', productCommunity: '100', x: -695.2543029785156, y: 4734.696044921875, nodeSize: 99.41522216796875, leamerCategory: '9', productName: 'PHOTOGRAPHIC FILM,PLATES,PAPER', nodeColor: '#9c219c',
  },
  {
    productId: '7525', productCommunity: '180', x: -1222.9309692382812, y: 3407.01318359375, nodeSize: 148.2635498046875, leamerCategory: '9', productName: 'PERIPHERAL UNITS,INCL.CONTROL & ADAPTING UNITS', nodeColor: '#ff6bb0',
  },
  {
    productId: '6253', productCommunity: '20', x: -1523.703857421875, y: 5252.20947265625, nodeSize: 51.5556640625, leamerCategory: '8', productName: 'TYRES,PNEUMATIC,NEW,OF A KIND USED ON AIRCRAFT', nodeColor: '#0576a6',
  },
  {
    productId: '8974', productCommunity: '219', x: -1449.329833984375, y: 5326.964599609375, nodeSize: 56.594970703125, leamerCategory: '7', productName: 'OTHER ARTICLES OF PRECIOUS METAL', nodeColor: '#ffc86c',
  },
  {
    productId: '0116', productCommunity: '239', x: 4379.765625, y: 5928.59326171875, nodeSize: 59.259765625, leamerCategory: '5', productName: 'EDIBLE OFFALS OF ANIMALS IN HEADINGS 001.1 -001.5', nodeColor: '#9fb3bf',
  },
  {
    productId: '2320', productCommunity: '220', x: -1928.1533203125, y: 2557.453857421875, nodeSize: 62.63134765625, leamerCategory: '4', productName: 'NATURAL RUBBER LATEX; NAT.RUBBER & SIM.NAT.GUMS', nodeColor: '#005a4f',
  },
  {
    productId: '8482', productCommunity: '180', x: -1817.0089111328125, y: 2692.386962890625, nodeSize: 61.317626953125, leamerCategory: '7', productName: 'ART.OF APPAREL & CLOTHING ACCESSORIES,OF PLASTIC', nodeColor: '#ff6bb0',
  },
  {
    productId: '5112', productCommunity: '100', x: -1490.8370971679688, y: 5131.216796875, nodeSize: 90.1693115234375, leamerCategory: '10', productName: 'CYCLIC HYDROCARBONS', nodeColor: '#9c219c',
  },
  {
    productId: '2234', productCommunity: '221', x: -736.11181640625, y: 2103.6466064453125, nodeSize: 53.0577392578125, leamerCategory: '6', productName: 'LINSEED', nodeColor: '#6c8806',
  },
  {
    productId: '3414', productCommunity: '212', x: -558.0292816162109, y: 2207.0037841796875, nodeSize: 134.38442993164062, leamerCategory: '2', productName: 'PETROLEUM GASES AND OTHER GASEOUS HYDROCARBONS N', nodeColor: '#ad2b2b',
  },
  {
    productId: '2235', productCommunity: '222', x: 5148.68212890625, y: 6322.09814453125, nodeSize: 44.0751953125, leamerCategory: '6', productName: 'CASTOR OIL SEEDS', nodeColor: '#3aa67b',
  },
  {
    productId: '2640', productCommunity: '222', x: 5038.109375, y: 6344.552001953125, nodeSize: 49.4404296875, leamerCategory: '6', productName: 'JUTE & OTHER TEXTILE BAST FIBRES,NES,RAW/PROCESSED', nodeColor: '#3aa67b',
  },
  {
    productId: '4244', productCommunity: '220', x: -2032.499267578125, y: 2453.6175537109375, nodeSize: 56.36865234375, leamerCategory: '6', productName: 'PALM KERNEL OIL', nodeColor: '#005a4f',
  },
  {
    productId: '2232', productCommunity: '220', x: -2403.9501953125, y: 2402.482421875, nodeSize: 46.111328125, leamerCategory: '6', productName: 'PALM NUTS AND PALM KERNELS', nodeColor: '#005a4f',
  },
  {
    productId: '5913', productCommunity: '110', x: 2725.232177734375, y: 3080.39697265625, nodeSize: 60.9462890625, leamerCategory: '10', productName: 'WEED KILLERS (HERBICIDES)PACKED FOR SALE ETC.', nodeColor: '#4b0046',
  },
  {
    productId: '3510', productCommunity: '60', x: 3584.9180908203125, y: 4838.87890625, nodeSize: 70.455322265625, leamerCategory: '2', productName: 'ELECTRIC CURRENT', nodeColor: '#473b1c',
  },
  {
    productId: '4239', productCommunity: '221', x: 2722.4588623046875, y: 5101.916259765625, nodeSize: 58.671142578125, leamerCategory: '6', productName: 'OTHER SOFT FIXED VEGETABLE OILS', nodeColor: '#6c8806',
  },
  {
    productId: '6635', productCommunity: '999', x: 2299.352294921875, y: 4627.180419921875, nodeSize: 58.1298828125, leamerCategory: '7', productName: 'SLAG WOOL.ROCK WOOL AND SIMILAR MINERAL WOOLS', nodeColor: '#9c9a87',
  },
  {
    productId: '4113', productCommunity: '239', x: 4166.826416015625, y: 5902.53515625, nodeSize: 57.96142578125, leamerCategory: '6', productName: 'ANIMAL OILS,FATS AND GREASES,N.E.S', nodeColor: '#9fb3bf',
  },
  {
    productId: '5146', productCommunity: '100', x: -1211.2680053710938, y: 4158.169921875, nodeSize: 68.9178466796875, leamerCategory: '10', productName: 'SINGLE OR COMPLEX OXYGEN-FUNCTION AMINO-COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '2224', productCommunity: '221', x: 2866.736572265625, y: 5810.066650390625, nodeSize: 57.603515625, leamerCategory: '6', productName: 'SUNFLOWER SEEDS', nodeColor: '#6c8806',
  },
  {
    productId: '2223', productCommunity: '222', x: 4832.4130859375, y: 6435.583251953125, nodeSize: 52.7744140625, leamerCategory: '6', productName: 'COTTON SEEDS', nodeColor: '#3aa67b',
  },
  {
    productId: '2225', productCommunity: '222', x: 4462.833984375, y: 6398.91015625, nodeSize: 55.0517578125, leamerCategory: '6', productName: 'SESAME (SESAMUM)SEEDS', nodeColor: '#3aa67b',
  },
  {
    productId: '4236', productCommunity: '221', x: 2755.344970703125, y: 5969.396240234375, nodeSize: 59.560546875, leamerCategory: '6', productName: 'SUNFLOWER SEED OIL', nodeColor: '#6c8806',
  },
  {
    productId: '7915', productCommunity: '40', x: 2954.984619140625, y: 5539.5224609375, nodeSize: 58.37744140625, leamerCategory: '9', productName: 'RAIL&TRAMWAY FREIGHT AND MAINTENANCE CARS', nodeColor: '#38f2f1',
  },
  {
    productId: '2922', productCommunity: '222', x: 4388.934814453125, y: 6654.796142578125, nodeSize: 53.03662109375, leamerCategory: '5', productName: 'SHELLAC,SEED LAC,STICK LAC,RESINS,GUM-RESINS,ETC.', nodeColor: '#3aa67b',
  },
  {
    productId: '2659', productCommunity: '220', x: -2318.6484375, y: 2256.391357421875, nodeSize: 47.77001953125, leamerCategory: '6', productName: 'VEGETABLE TEXTILE FIBRES,N.E.S. AND WASTE', nodeColor: '#005a4f',
  },
  {
    productId: '2231', productCommunity: '220', x: -2426.1810302734375, y: 2119.494873046875, nodeSize: 49.825927734375, leamerCategory: '6', productName: 'COPRA', nodeColor: '#005a4f',
  },
  {
    productId: '5983', productCommunity: '100', x: -654.7085266113281, y: 5283.1669921875, nodeSize: 59.20465087890625, leamerCategory: '10', productName: 'ORGANIC CHEMICAL PRODUCTS,N.E.S.', nodeColor: '#9c219c',
  },
  {
    productId: '5411', productCommunity: '100', x: -657.0446166992188, y: 5126.82666015625, nodeSize: 60.343505859375, leamerCategory: '10', productName: 'PROVITAMINS & VITAMINS,NARURAUREPROD.BY SYNTHESIS', nodeColor: '#9c219c',
  },
  {
    productId: '8813', productCommunity: '180', x: -568.7345886230469, y: 5534.65478515625, nodeSize: 72.34454345703125, leamerCategory: '9', productName: 'PHOTOGRAPHIC & CINEMATOGRAPHIC APPARATUS N.E.S', nodeColor: '#ff6bb0',
  },
  {
    productId: '0544', productCommunity: '229', x: 4677.293701171875, y: 2777.204833984375, nodeSize: 60.84326171875, leamerCategory: '4', productName: 'TOMATOES,FRESH OR CHILLED', nodeColor: '#78b83d',
  },
  {
    productId: '5233', productCommunity: '100', x: 1376.939453125, y: 2958.130615234375, nodeSize: 60.07177734375, leamerCategory: '10', productName: 'SALTS OF METALLIC ACIDS; ETC.', nodeColor: '#9c219c',
  },
  {
    productId: '5221', productCommunity: '130', x: 1344.186279296875, y: 3122.5611572265625, nodeSize: 61.828125, leamerCategory: '10', productName: 'CHEMICAL ELEMENTS', nodeColor: '#b54e61',
  },
  {
    productId: '5231', productCommunity: '130', x: 3001.196044921875, y: 5334.395751953125, nodeSize: 61.07275390625, leamerCategory: '10', productName: 'METALLIC SALTS AND PEROXYSALTS OF INORGANIC ACIDS', nodeColor: '#b54e61',
  },
  {
    productId: '5222', productCommunity: '130', x: 3064.463623046875, y: 5570.240478515625, nodeSize: 61.34130859375, leamerCategory: '10', productName: 'INORGANIC ACIDS AND OXYGEN COMPOUNDS OF NON-METAL', nodeColor: '#b54e61',
  },
  {
    productId: '5224', productCommunity: '50', x: 947.3922424316406, y: 3041.13720703125, nodeSize: 60.34918212890625, leamerCategory: '10', productName: 'METALLIC OXIDES OF ZINC,CHROMIUM,MANGANESE,IRON,', nodeColor: '#a33bff',
  },
  {
    productId: '5223', productCommunity: '100', x: -1745.550537109375, y: 5072.49267578125, nodeSize: 54.107421875, leamerCategory: '10', productName: 'HALOGEN AND SULPHUR COMPOUNDS OF NON-METALS', nodeColor: '#9c219c',
  },
  {
    productId: '0561', productCommunity: '80', x: 4808.785400390625, y: 2738.258544921875, nodeSize: 57.59423828125, leamerCategory: '4', productName: 'VEGETABLES,DRIED,DEHYDRATED OR EVAPORATED', nodeColor: '#ff0062',
  },
  {
    productId: '7223', productCommunity: '10', x: 277.05699920654297, y: 5416.5556640625, nodeSize: 55.75984191894531, leamerCategory: '9', productName: 'TRACK-LAYING TRACTORS', nodeColor: '#4037ab',
  },
  {
    productId: '7367', productCommunity: '10', x: -102.13508987426758, y: 5709.3564453125, nodeSize: 66.9410629272461, leamerCategory: '9', productName: 'OTHER MACH.-TOOLS FOR WORKING METAL OR MET.CARBIDE', nodeColor: '#4037ab',
  },
  {
    productId: '7245', productCommunity: '10', x: -261.94140625, y: 5854.406005859375, nodeSize: 61.47705078125, leamerCategory: '9', productName: 'WEAVING,KNITTING MACH.  FOR PREPARING YARNS,PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '0611', productCommunity: '220', x: 5139.453857421875, y: 2577.720703125, nodeSize: 66.18115234375, leamerCategory: '4', productName: 'SUGARS,BEET AND CANE,RAW,SOLID', nodeColor: '#005a4f',
  },
  {
    productId: '7244', productCommunity: '10', x: -130.10890579223633, y: 5951.12353515625, nodeSize: 61.670066833496094, leamerCategory: '9', productName: 'MACH.FOR EXTRUDING MAN-MADE TEXTILES AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '5824', productCommunity: '100', x: -405.33753967285156, y: 4501.2197265625, nodeSize: 61.404449462890625, leamerCategory: '10', productName: 'POLYAMIDES', nodeColor: '#9c219c',
  },
  {
    productId: '8931', productCommunity: '80', x: 4036.328369140625, y: 3549.07763671875, nodeSize: 105.20654296875, leamerCategory: '7', productName: 'ART.FOR THE CONVEYANCE OR PACKING OF GOODS', nodeColor: '#ff0062',
  },
  {
    productId: '0980', productCommunity: '80', x: 3773.46142578125, y: 3759.10546875, nodeSize: 104.8876953125, leamerCategory: '6', productName: 'EDIBLE PRODUCTS AND PREPARATIONS N.E.S.', nodeColor: '#ff0062',
  },
  {
    productId: '7783', productCommunity: '10', x: 1358.0675659179688, y: 4090.257080078125, nodeSize: 99.7191162109375, leamerCategory: '9', productName: 'ELECTR.EQUIP.FOR INTERNAL COMBUSTION ENGINES,PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7768', productCommunity: '180', x: -1064.8444519042969, y: 3337.6683349609375, nodeSize: 131.24542236328125, leamerCategory: '9', productName: 'PIEZO-ELECTRIC CRYSTALS,MOUNTED,PARTS OF 776-', nodeColor: '#ff6bb0',
  },
  {
    productId: '6633', productCommunity: '60', x: 3383.7286376953125, y: 4258.689208984375, nodeSize: 61.814697265625, leamerCategory: '7', productName: 'MANUFACTURES OF MINERAL MATERIALS,N.E.S.', nodeColor: '#473b1c',
  },
  {
    productId: '0142', productCommunity: '239', x: 3302.62646484375, y: 3764.473388671875, nodeSize: 57.81591796875, leamerCategory: '5', productName: 'SAUSAGES & THE LIKE,OF MEAT,MEAT OFFAL OR BLOOD', nodeColor: '#9fb3bf',
  },
  {
    productId: '6353', productCommunity: '60', x: 3611.615966796875, y: 4323.577880859375, nodeSize: 83.2490234375, leamerCategory: '3', productName: 'BUILDERSCARPENTRY AND JOINERY', nodeColor: '#473b1c',
  },
  {
    productId: '8744', productCommunity: '100', x: -192.4762725830078, y: 4522.1044921875, nodeSize: 60.478668212890625, leamerCategory: '9', productName: 'INSTR.& APP.FOR PHYSICAL OR CHEMICAL ANALYSIS', nodeColor: '#9c219c',
  },
  {
    productId: '5415', productCommunity: '100', x: -628.3187561035156, y: 4231.492919921875, nodeSize: 60.98687744140625, leamerCategory: '10', productName: 'HORMONES,NATURAL OR REPRODUCED BY SYNTHESIS', nodeColor: '#9c219c',
  },
  {
    productId: '2226', productCommunity: '221', x: 2804.005615234375, y: 5375.31005859375, nodeSize: 59.40625, leamerCategory: '6', productName: 'RAPE AND COLZA SEEDS', nodeColor: '#6c8806',
  },
  {
    productId: '2820', productCommunity: '999', x: 4050.4329833984375, y: 3044.10693359375, nodeSize: 78.992431640625, leamerCategory: '2', productName: 'WASTE AND SCRAP METAL OF IRON OR STEEL', nodeColor: '#9c9a87',
  },
  {
    productId: '0011', productCommunity: '239', x: 2847.516845703125, y: 3320.9068603515625, nodeSize: 60.54052734375, leamerCategory: '5', productName: 'ANIMALS OF THE BOVINE SPECIES,INCL.BUFFALOES,LIVE', nodeColor: '#9fb3bf',
  },
  {
    productId: '6781', productCommunity: '10', x: 873.1398315429688, y: 5684.210205078125, nodeSize: 55.992431640625, leamerCategory: '8', productName: 'TUBES AND PIPES,OF CAST IRON', nodeColor: '#4037ab',
  },
  {
    productId: '2772', productCommunity: '110', x: -2636.80078125, y: 2796.9541015625, nodeSize: 56.384765625, leamerCategory: '2', productName: 'NATURAL ABRASIVES,N.E.S.', nodeColor: '#4b0046',
  },
  {
    productId: '2771', productCommunity: '210', x: -2464.767578125, y: 2684.712158203125, nodeSize: 54.76171875, leamerCategory: '2', productName: 'INDUSTRIAL DIAMONDS,SORTED,WHETHER OR NOT WORKED', nodeColor: '#7c1803',
  },
  {
    productId: '2741', productCommunity: '213', x: -279.8111572265625, y: 2329.30029296875, nodeSize: 56.66754150390625, leamerCategory: '2', productName: 'SULPHUR OF ALL KINDS', nodeColor: '#c93c00',
  },
  {
    productId: '2734', productCommunity: '219', x: 3773.633056640625, y: 5156.01806640625, nodeSize: 57.2939453125, leamerCategory: '2', productName: 'PEBBLES AND CRUSHED OR BROKEN STONE.GRAVEL,MACADA', nodeColor: '#ffc86c',
  },
  {
    productId: '6515', productCommunity: '160', x: 5275.001953125, y: 5873.556884765625, nodeSize: 51.1025390625, leamerCategory: '8', productName: 'YARN CONTAIN.85% BY WGT.OF SYNTH.FIBRES,FOR SALE', nodeColor: '#c4af78',
  },
  {
    productId: '6518', productCommunity: '160', x: 5375.276123046875, y: 5999.6962890625, nodeSize: 13.63623046875, leamerCategory: '8', productName: 'YARN OF REGENERATED FIBRES,PUT UP FOR RETAIL SALE', nodeColor: '#c4af78',
  },
  {
    productId: '8310', productCommunity: '170', x: 5390.45654296875, y: 5870.0869140625, nodeSize: 110.181640625, leamerCategory: '7', productName: 'TRAVEL GOODS,HANDBAGS,BRIEF-CASES,PURSES,SHEATHS', nodeColor: '#ffc200',
  },
  {
    productId: '6521', productCommunity: '160', x: 4670.632568359375, y: 5883.7255859375, nodeSize: 61.35400390625, leamerCategory: '8', productName: 'COTTON FABRICS,WOVEN,UNBLEACHED,NOT MERCERIZED', nodeColor: '#c4af78',
  },
  {
    productId: '6418', productCommunity: '10', x: 837.8707275390625, y: 5506.19287109375, nodeSize: 99.500244140625, leamerCategory: '3', productName: 'PAPER & PAPERBOARD,IMPREGNAT.COAT.SURFACE-COLOURE', nodeColor: '#4037ab',
  },
  {
    productId: '6591', productCommunity: '999', x: 2304.650634765625, y: 6078.97021484375, nodeSize: 53.41064453125, leamerCategory: '8', productName: 'LINOLEUM AND SIMILAR FLOOR COVERINGS', nodeColor: '#9c9a87',
  },
  {
    productId: '6352', productCommunity: '10', x: 2142.9422607421875, y: 5429.170166015625, nodeSize: 51.022705078125, leamerCategory: '3', productName: 'CASKS,BARRELS,VATS,TUBS,BUCKETS & OTH.COOPERSPROD', nodeColor: '#4037ab',
  },
  {
    productId: '9610', productCommunity: '999', x: 36.925496101379395, y: 2759.30029296875, nodeSize: 53.2652645111084, leamerCategory: '7', productName: 'COIN(OTHER THAN GOLD) NOT BEING LEGAL TENDER', nodeColor: '#9c9a87',
  },
  {
    productId: '6344', productCommunity: '60', x: 3894.2943115234375, y: 5354.919677734375, nodeSize: 36.280517578125, leamerCategory: '3', productName: 'WOOD-BASED PANELS,N.E.S.', nodeColor: '#473b1c',
  },
  {
    productId: '6349', productCommunity: '60', x: 4047.3433837890625, y: 5441.1171875, nodeSize: 51.168212890625, leamerCategory: '3', productName: 'WOOD,SIMPLY SHAPED,N.E.S.', nodeColor: '#473b1c',
  },
  {
    productId: '8745', productCommunity: '100', x: -240.47533416748047, y: 5196.126953125, nodeSize: 60.70491027832031, leamerCategory: '9', productName: 'MEASURING,CONTROLLING & SCIENTIFIC INSTRUMENTS', nodeColor: '#9c219c',
  },
  {
    productId: '8982', productCommunity: '180', x: -1707.85888671875, y: 3549.357177734375, nodeSize: 59.418212890625, leamerCategory: '7', productName: 'OTHER MUSICAL INSTRUMENTS OF 898.1-', nodeColor: '#ff6bb0',
  },
  {
    productId: '8997', productCommunity: '170', x: 5353.13623046875, y: 4662.84521484375, nodeSize: 61.1123046875, leamerCategory: '7', productName: 'BASKETWORK,WICKERWORK ETC.  OF PLAITING MATERIALS', nodeColor: '#ffc200',
  },
  {
    productId: '2732', productCommunity: '216', x: 4185.204345703125, y: 3307.69970703125, nodeSize: 56.44873046875, leamerCategory: '2', productName: 'GYPSUM,PLASTERS,LIMESTONE FLUX & CALCAREOUS STONE', nodeColor: '#db9c2c',
  },
  {
    productId: '0582', productCommunity: '229', x: 4831.211181640625, y: 5806.469482421875, nodeSize: 50.63330078125, leamerCategory: '4', productName: 'FRUIT,FRUIT-PEEL & PARTS OF PLANTS,PRES.  BY SUGAR', nodeColor: '#78b83d',
  },
  {
    productId: '8481', productCommunity: '170', x: 5144.086669921875, y: 4700.063232421875, nodeSize: 73.98486328125, leamerCategory: '7', productName: 'ART.OF APPAREL & CLOTHING ACCESSORIES,OF LEATHER', nodeColor: '#ffc200',
  },
  {
    productId: '7938', productCommunity: '40', x: 2287.635986328125, y: 2642.68115234375, nodeSize: 61.4921875, leamerCategory: '9', productName: 'TUGS,SPECIAL PURPOSE VESSELS,FLOATING STRUCTURES', nodeColor: '#38f2f1',
  },
  {
    productId: '8842', productCommunity: '70', x: 5642.39111328125, y: 6041.432373046875, nodeSize: 62.94140625, leamerCategory: '9', productName: 'SPECTACLES AND SPECTACLE FRAMES', nodeColor: '#ff707a',
  },
  {
    productId: '8972', productCommunity: '999', x: -1717.0814208984375, y: 2586.8983154296875, nodeSize: 59.379638671875, leamerCategory: '7', productName: 'IMITATION JEWELLERY', nodeColor: '#9c9a87',
  },
  {
    productId: '0612', productCommunity: '229', x: 3923.24462890625, y: 2735.96826171875, nodeSize: 60.8251953125, leamerCategory: '4', productName: 'REFINED SUGARS AND OTHER PROD.  OF REF.  BEET/CANE', nodeColor: '#78b83d',
  },
  {
    productId: '6114', productCommunity: '230', x: 4306.408935546875, y: 2305.028076171875, nodeSize: 90.36962890625, leamerCategory: '8', productName: 'LEATHER OF OTHER BOVINE CATTLE AND EQUINE LEATHER', nodeColor: '#21366b',
  },
  {
    productId: '6118', productCommunity: '230', x: 4205.192626953125, y: 4891.281005859375, nodeSize: 54.59130859375, leamerCategory: '8', productName: 'LEATHER,SPECIALLY DRESSED OR FINISED', nodeColor: '#21366b',
  },
  {
    productId: '6129', productCommunity: '230', x: 4092.8145751953125, y: 4756.319580078125, nodeSize: 56.285888671875, leamerCategory: '8', productName: 'OTHER ARTICLES OF LEATHER OR OF COMPOSIT.  LEATHER', nodeColor: '#21366b',
  },
  {
    productId: '6121', productCommunity: '230', x: 804.58984375, y: 5968.122314453125, nodeSize: 45.52490234375, leamerCategory: '8', productName: 'ARTICLES OF LEATHER OR OF COMPOSITION LEATHER', nodeColor: '#21366b',
  },
  {
    productId: '6572', productCommunity: '10', x: 1302.5001220703125, y: 5576.99072265625, nodeSize: 61.629150390625, leamerCategory: '8', productName: 'BONDED FIBRE FABRICS,SIMILAR BONDED YARN FABRICS', nodeColor: '#4037ab',
  },
  {
    productId: '6574', productCommunity: '170', x: 4961.043701171875, y: 4910.915771484375, nodeSize: 13.63623046875, leamerCategory: '8', productName: 'ELASTIC FABRICS AND TRIMMINGS', nodeColor: '#ffc200',
  },
  {
    productId: '6595', productCommunity: '999', x: -750.2370300292969, y: 5491.2529296875, nodeSize: 60.15838623046875, leamerCategory: '8', productName: 'CARPETS,RUGS ETC.OF MAN-MADE TEXTILE MATERIALS NES', nodeColor: '#9c9a87',
  },
  {
    productId: '6113', productCommunity: '230', x: 4306.952392578125, y: 2043.439208984375, nodeSize: 56.72021484375, leamerCategory: '8', productName: 'CALFLEATHER', nodeColor: '#21366b',
  },
  {
    productId: '6544', productCommunity: '160', x: 1905.4503173828125, y: 5372.42919921875, nodeSize: 57.5537109375, leamerCategory: '8', productName: 'FABRICS,WOVEN,OF FLAX OR OF RAMIE', nodeColor: '#c4af78',
  },
  {
    productId: '6543', productCommunity: '160', x: 1929.265625, y: 5554.07275390625, nodeSize: 58.375244140625, leamerCategory: '8', productName: 'FABRICS,WOVEN,OF WOOL OR OF FINE ANIMAL HAIR N.E.S', nodeColor: '#c4af78',
  },
  {
    productId: '6552', productCommunity: '170', x: 5223.873291015625, y: 4965.092041015625, nodeSize: 90.50830078125, leamerCategory: '8', productName: 'KNITTED/CROCHETED FABRICS OF FIBRES OTH.THAN SYNTH', nodeColor: '#ffc200',
  },
  {
    productId: '6553', productCommunity: '160', x: 5280.604736328125, y: 6202.2607421875, nodeSize: 31.12255859375, leamerCategory: '8', productName: 'KNITTED/CROCHETED FABRICS ELASTIC OR RUBBERIZED', nodeColor: '#c4af78',
  },
  {
    productId: '6122', productCommunity: '999', x: 5508.2568359375, y: 6176.529541015625, nodeSize: 54.2177734375, leamerCategory: '8', productName: 'SADDLERY AND HARNESS,OR ANY MATERIAL FOR ANIMALS', nodeColor: '#9c9a87',
  },
  {
    productId: '6423', productCommunity: '999', x: 4562.728271484375, y: 4536.230224609375, nodeSize: 59.93408203125, leamerCategory: '3', productName: 'REGISTERS,EXERCISE BOOKS,NOTE BOOKS,ETC.', nodeColor: '#9c9a87',
  },
  {
    productId: '6542', productCommunity: '160', x: 1945.269287109375, y: 5705.03515625, nodeSize: 60.64013671875, leamerCategory: '8', productName: 'FABRICS,WOVEN,CONTAIN.85% OF WOOL/FINE ANIMAL HAIR', nodeColor: '#c4af78',
  },
  {
    productId: '6541', productCommunity: '160', x: 5623.1650390625, y: 5937.48974609375, nodeSize: 58.33984375, leamerCategory: '8', productName: 'FABRICS,WOVEN,OF SILK,OF NOIL OR OTHER WASTE SILK', nodeColor: '#c4af78',
  },
  {
    productId: '7621', productCommunity: '180', x: -834.5158386230469, y: 3653.910888671875, nodeSize: 84.41461181640625, leamerCategory: '9', productName: 'RADIO-BROADCAST RECEIVERS FOR MOTOR VEHICLES', nodeColor: '#ff6bb0',
  },
  {
    productId: '0585', productCommunity: '80', x: 4121.052490234375, y: 3873.10986328125, nodeSize: 75.57763671875, leamerCategory: '4', productName: 'JUICES;FRUIT & VEGET.(INCL.GRAPE MUST) UNFERMENTED', nodeColor: '#ff0062',
  },
  {
    productId: '0589', productCommunity: '80', x: 4308.741943359375, y: 3424.251220703125, nodeSize: 61.86279296875, leamerCategory: '4', productName: 'FRUIT OTHERWISE PREPARED OR PRESERVED,N.  E.S.', nodeColor: '#ff0062',
  },
  {
    productId: '6560', productCommunity: '170', x: 5450.4208984375, y: 3930.78125, nodeSize: 61.5234375, leamerCategory: '8', productName: 'TULLE,LACE,EMBROIDERY,RIBBONS,& OTHER SMALL WARES', nodeColor: '#ffc200',
  },
  {
    productId: '0546', productCommunity: '80', x: 4673.23828125, y: 2945.903076171875, nodeSize: 72.419921875, leamerCategory: '4', productName: 'VEGETABLES,FROZEN OR IN TEMPORARY PRESERVATIVE', nodeColor: '#ff0062',
  },
  {
    productId: '6416', productCommunity: '60', x: 3125.02490234375, y: 4562.628173828125, nodeSize: 60.58740234375, leamerCategory: '3', productName: 'BUILDING BOARD OF WOOD PULP OR OF VEGETABLE FIBRE', nodeColor: '#473b1c',
  },
  {
    productId: '2116', productCommunity: '230', x: 4286.477294921875, y: 2626.427734375, nodeSize: 54.58251953125, leamerCategory: '5', productName: 'SHEEP & LAMB SKINS WITH WOOL ON,RAW (FRESH,SALTED)', nodeColor: '#21366b',
  },
  {
    productId: '2112', productCommunity: '230', x: 4159.90478515625, y: 2701.873779296875, nodeSize: 52.759765625, leamerCategory: '5', productName: 'CALF SKINS,RAW (FRESH,SALTED,DRIED,PICKLED/LIMED', nodeColor: '#21366b',
  },
  {
    productId: '7234', productCommunity: '10', x: 599.2195739746094, y: 4890.1015625, nodeSize: 107.33551025390625, leamerCategory: '9', productName: 'CONSTRUCTION AND MINING MACHINERY,N.E.S.', nodeColor: '#4037ab',
  },
  {
    productId: '5161', productCommunity: '100', x: -1346.0626831054688, y: 4970.95361328125, nodeSize: 69.5294189453125, leamerCategory: '10', productName: 'ETHERS,ALCOHOL PEROXIDES,ETHER PEROX.,EPOXIDES ETC', nodeColor: '#9c219c',
  },
  {
    productId: '6974', productCommunity: '70', x: 5000.14697265625, y: 5523.3720703125, nodeSize: 67.1474609375, leamerCategory: '8', productName: 'ART.COMMONLY USED FOR DOM.PURPOSES,POT SCOURERS', nodeColor: '#ff707a',
  },
  {
    productId: '5911', productCommunity: '110', x: 2814.650634765625, y: 2940.515869140625, nodeSize: 59.48388671875, leamerCategory: '10', productName: 'INSECTICIDES PACKED FOR SALE ETC.', nodeColor: '#4b0046',
  },
  {
    productId: '6517', productCommunity: '160', x: 3938.7425537109375, y: 4725.876953125, nodeSize: 59.829345703125, leamerCategory: '8', productName: 'YARN OF REGENERATED FIBRES,NOT FOR RETAIL SALE', nodeColor: '#c4af78',
  },
  {
    productId: '9410', productCommunity: '999', x: 4284.138916015625, y: 2984.20703125, nodeSize: 52.59423828125, leamerCategory: '5', productName: 'ANIMALS,LIVE,N.E.S.,INCL. ZOO-ANIMALS', nodeColor: '#9c9a87',
  },
  {
    productId: '2890', productCommunity: '216', x: 6016.7998046875, y: 2923.638916015625, nodeSize: 60.759765625, leamerCategory: '2', productName: 'ORES & CONCENTRATES OF PRECIOUS METALS;WASTE,SCRA', nodeColor: '#db9c2c',
  },
  {
    productId: '2733', productCommunity: '130', x: 4543.7861328125, y: 6717.67822265625, nodeSize: 56.646484375, leamerCategory: '2', productName: 'SANDS,NATURAL,OF ALL KINDS,WHETHER OR NOT COLOURED', nodeColor: '#b54e61',
  },
  {
    productId: '4249', productCommunity: '221', x: 4554.220703125, y: 6578.692138671875, nodeSize: 57.228515625, leamerCategory: '6', productName: 'FIXED VEGETABLE OILS,N.E.S', nodeColor: '#6c8806',
  },
  {
    productId: '2714', productCommunity: '110', x: 3868.2041015625, y: 6410.134033203125, nodeSize: 44.9111328125, leamerCategory: '2', productName: 'POTASSIUM SALTS,NATURAL,CRUDE', nodeColor: '#4b0046',
  },
  {
    productId: '0118', productCommunity: '239', x: 2958.490966796875, y: 2845.355224609375, nodeSize: 55.80224609375, leamerCategory: '5', productName: 'OTHER FRESH,CHILLED,FROZEN MEAT OR EDIBLE OFFALS', nodeColor: '#9fb3bf',
  },
  {
    productId: '2731', productCommunity: '219', x: 4913.30859375, y: 2570.276611328125, nodeSize: 59.2451171875, leamerCategory: '2', productName: 'BUILDING AND MONUMENTAL STONE NOT FURTHER WORKED', nodeColor: '#ffc86c',
  },
  {
    productId: '6613', productCommunity: '999', x: 4970.023193359375, y: 2434.990478515625, nodeSize: 64.72314453125, leamerCategory: '7', productName: 'BUILDING & MONUMENTAL STONE,WORKED,& ARTIC.THEREOF', nodeColor: '#9c9a87',
  },
  {
    productId: '2690', productCommunity: '170', x: 3999.47265625, y: 3418.85498046875, nodeSize: 57.87451171875, leamerCategory: '6', productName: 'OLD CLOTHING AND OTHER OLD TEXTILE ARTICLES; RAGS', nodeColor: '#ffc200',
  },
  {
    productId: '5623', productCommunity: '110', x: 3691.5758056640625, y: 6389.51806640625, nodeSize: 61.881591796875, leamerCategory: '10', productName: 'MINERAL OR CHEMICAL FERTILIZERS.POTASSIC', nodeColor: '#4b0046',
  },
  {
    productId: '2713', productCommunity: '130', x: 3175.2723388671875, y: 5990.1552734375, nodeSize: 58.646240234375, leamerCategory: '2', productName: 'NATURAL CALCIUM PHOSPHAT.,NATUR.ALUMINIUM C. PHOS.', nodeColor: '#b54e61',
  },
  {
    productId: '5622', productCommunity: '130', x: 3119.3140869140625, y: 5790.38232421875, nodeSize: 55.535400390625, leamerCategory: '10', productName: 'MINERAL OR CHEMICAL FERTILIZERS,PHOSPHATIC', nodeColor: '#b54e61',
  },
  {
    productId: '2926', productCommunity: '220', x: -2005.2500610351562, y: 1969.7553100585938, nodeSize: 61.5775146484375, leamerCategory: '5', productName: 'BULBS,TUBERS & RHIZOMES OF FLOWERING OR OF FOLIAGE', nodeColor: '#005a4f',
  },
  {
    productId: '7138', productCommunity: '10', x: -1439.4158935546875, y: 4879.404541015625, nodeSize: 70.162353515625, leamerCategory: '9', productName: 'INT.COMB.PISTON ENGINES,N.E.S.', nodeColor: '#4037ab',
  },
  {
    productId: '2667', productCommunity: '160', x: 4877.24951171875, y: 5682.574462890625, nodeSize: 53.3857421875, leamerCategory: '6', productName: 'SYNTH.FIBRES,CARDED,COMBED OR OTHERWISE PREPARED', nodeColor: '#c4af78',
  },
  {
    productId: '2927', productCommunity: '220', x: -2008.2490234375, y: 2109.154541015625, nodeSize: 66.906494140625, leamerCategory: '5', productName: 'CUT FLOWERS AND FOLIAGE', nodeColor: '#005a4f',
  },
  {
    productId: '6597', productCommunity: '70', x: -2453.572509765625, y: 2293.320068359375, nodeSize: 53.58447265625, leamerCategory: '8', productName: 'PLAITS AND SIMILAR PRODUCTS OF PLAITING MATERIALS', nodeColor: '#ff707a',
  },
  {
    productId: '4243', productCommunity: '220', x: -2190.3970947265625, y: 2334.39453125, nodeSize: 57.903076171875, leamerCategory: '6', productName: 'COCONUT (COPRA) OIL', nodeColor: '#005a4f',
  },
  {
    productId: '8710', productCommunity: '180', x: -1737.9071044921875, y: 3403.6533203125, nodeSize: 105.410400390625, leamerCategory: '9', productName: 'OPTICAL INSTRUMENTS AND APPARATUS', nodeColor: '#ff6bb0',
  },
  {
    productId: '2655', productCommunity: '223', x: -2061.7195434570312, y: 3412.891845703125, nodeSize: 47.8055419921875, leamerCategory: '6', productName: 'MANILA HEMP,RAW OR PROCESSED,NOT SPUN;TOW & WASTE', nodeColor: '#bfbb11',
  },
  {
    productId: '2666', productCommunity: '160', x: 4912.965576171875, y: 5883.981689453125, nodeSize: 56.32373046875, leamerCategory: '6', productName: 'CONTINUOUS FILAMENT TOW FOR THE MANUFAC.OF FIBRES', nodeColor: '#c4af78',
  },
  {
    productId: '7111', productCommunity: '30', x: 4128.227294921875, y: 5368.509033203125, nodeSize: 57.80322265625, leamerCategory: '9', productName: 'STEAM & OTHER VAPOUR GENERATING BOILERS', nodeColor: '#299fff',
  },
  {
    productId: '2665', productCommunity: '999', x: 3990.317138671875, y: 5118.87109375, nodeSize: 61.44775390625, leamerCategory: '6', productName: 'SYNTH.FIBR.NOT CARDED,COMBED OR OTHERWISE PREPARE', nodeColor: '#9c9a87',
  },
  {
    productId: '0115', productCommunity: '239', x: 3983.3798828125, y: 5670.47998046875, nodeSize: 53.8251953125, leamerCategory: '5', productName: 'MEAT OF HORSES,ASSES,ETC.,FRESH,CHILLED,FROZEN', nodeColor: '#9fb3bf',
  },
  {
    productId: '6648', productCommunity: '180', x: -622.2699584960938, y: 3924.5626220703125, nodeSize: 58.73388671875, leamerCategory: '7', productName: 'GLASS MIRRORS(INCL.REAR-VIEW MIR.),UNFRAMED.FRAMED', nodeColor: '#ff6bb0',
  },
  {
    productId: '6994', productCommunity: '10', x: 1251.0631103515625, y: 4864.43310546875, nodeSize: 60.4296875, leamerCategory: '8', productName: 'SPRINGS & LEAVES FOR SPRINGS,OF IRON/STEEL/COPPER', nodeColor: '#4037ab',
  },
  {
    productId: '0440', productCommunity: '221', x: 2914.1402587890625, y: 5973.856201171875, nodeSize: 86.131591796875, leamerCategory: '6', productName: 'MAIZE (CORN),UNMILLED', nodeColor: '#6c8806',
  },
  {
    productId: '1211', productCommunity: '223', x: 5670.139892578125, y: 3644.941162109375, nodeSize: 59.07080078125, leamerCategory: '6', productName: 'TOBACCO,NOT STRIPPED', nodeColor: '#bfbb11',
  },
  {
    productId: '7919', productCommunity: '10', x: 1848.3937377929688, y: 4652.05126953125, nodeSize: 61.6861572265625, leamerCategory: '9', productName: 'RAIL&TRAMWAY TRACK FIXTURES&FITTINGS,SIGNALL.EQUI.', nodeColor: '#4037ab',
  },
  {
    productId: '7212', productCommunity: '10', x: 1690.9676513671875, y: 4833.51611328125, nodeSize: 73.272216796875, leamerCategory: '9', productName: 'HARVESTING & TRESHING MACHINERY AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '1212', productCommunity: '223', x: 5870.36962890625, y: 3505.521484375, nodeSize: 67.3828125, leamerCategory: '6', productName: 'TOBACCO,WHOLLY OR PARTLY STRIPPED', nodeColor: '#bfbb11',
  },
  {
    productId: '7763', productCommunity: '180', x: -1009.4034729003906, y: 3649.152099609375, nodeSize: 120.53167724609375, leamerCategory: '9', productName: 'DIODES,TRANSISTORS AND SIM.SEMI-CONDUCTOR DEVICES', nodeColor: '#ff6bb0',
  },
  {
    productId: '8472', productCommunity: '170', x: 5162.35986328125, y: 3914.6983642578125, nodeSize: 61.5224609375, leamerCategory: '7', productName: 'CLOTHING ACCESSORIES,KNITTED OR CROCHETEM,N.E.S.', nodeColor: '#ffc200',
  },
  {
    productId: '7493', productCommunity: '10', x: 1163.7420654296875, y: 4743.13427734375, nodeSize: 105.5830078125, leamerCategory: '9', productName: 'TRANSMISSION SHAFTS,CRANKS,BEARING HOUSINGS ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '7139', productCommunity: '10', x: 1146.349609375, y: 4242.864990234375, nodeSize: 122.1689453125, leamerCategory: '9', productName: 'PARTS OF INT.COMB.PISTON ENGINES OF 713.2-/713.8-', nodeColor: '#4037ab',
  },
  {
    productId: '2222', productCommunity: '221', x: 3041.467041015625, y: 6286.630859375, nodeSize: 91.88427734375, leamerCategory: '6', productName: 'SOYA BEANS', nodeColor: '#6c8806',
  },
  {
    productId: '5513', productCommunity: '221', x: 5132.25390625, y: 3112.304931640625, nodeSize: 58.1572265625, leamerCategory: '10', productName: 'ESSENTIAL OILS,CONCRETES & ABSOLUTES:RESINOIDS', nodeColor: '#6c8806',
  },
  {
    productId: '0812', productCommunity: '229', x: 5395.992431640625, y: 3180.207763671875, nodeSize: 54.50634765625, leamerCategory: '6', productName: 'BRAN,SHARPS & OTHER RESIDUES DERIVED FROM SIFTING', nodeColor: '#78b83d',
  },
  {
    productId: '2238', productCommunity: '221', x: 5129.37744140625, y: 3223.295166015625, nodeSize: 53.54296875, leamerCategory: '6', productName: 'OIL SEEDS AND OLEAGINOUS FRUIT.  N.E.S.', nodeColor: '#6c8806',
  },
  {
    productId: '0813', productCommunity: '221', x: 2986.6561279296875, y: 6137.03662109375, nodeSize: 85.985595703125, leamerCategory: '6', productName: 'OIL-CAKE & OTHER RESIDUES (EXCEPT DREGS)', nodeColor: '#6c8806',
  },
  {
    productId: '2239', productCommunity: '221', x: 2908.917236328125, y: 6320.137939453125, nodeSize: 52.32470703125, leamerCategory: '6', productName: 'FLOURS OR MEALS/OIL SEEDS/OLEAG.FRUIT NON DEFATTED', nodeColor: '#6c8806',
  },
  {
    productId: '0814', productCommunity: '240', x: 5607.97314453125, y: 2365.240966796875, nodeSize: 60.2900390625, leamerCategory: '6', productName: 'FLOURS &', nodeColor: '#8c94d1',
  },
  {
    productId: '4111', productCommunity: '240', x: 5750.478271484375, y: 2188.53515625, nodeSize: 54.34326171875, leamerCategory: '6', productName: 'FATS AND OILS OF FISH AND MARINE MAMMALS', nodeColor: '#8c94d1',
  },
  {
    productId: '0819', productCommunity: '120', x: 3193.8350830078125, y: 3258.892822265625, nodeSize: 80.849853515625, leamerCategory: '6', productName: 'FOOD WASTES AND PREPARED ANIMAL FEEDS,N.E.S', nodeColor: '#730049',
  },
  {
    productId: '0914', productCommunity: '80', x: 3708.2725830078125, y: 3319.134765625, nodeSize: 58.329345703125, leamerCategory: '6', productName: 'MARGARINE,IMITAT.LARD & OTHER PREPARED EDIBLE FATS', nodeColor: '#ff0062',
  },
  {
    productId: '3222', productCommunity: '211', x: 313.51273345947266, y: 6121.5830078125, nodeSize: 118.25181579589844, leamerCategory: '2', productName: 'OTHER COAL,WHETHER/NOT PULVERIZED,NOT AGGLOMERAT', nodeColor: '#5e1f05',
  },
  {
    productId: '3232', productCommunity: '211', x: 421.5395202636719, y: 5913.05322265625, nodeSize: 59.84649658203125, leamerCategory: '2', productName: 'COKE AND SEMI-COKE OF COAL OF LIGNITE OR OF PEAT', nodeColor: '#5e1f05',
  },
  {
    productId: '0141', productCommunity: '239', x: 1832.3306884765625, y: 5775.71044921875, nodeSize: 50.6328125, leamerCategory: '5', productName: 'MEAT EXTRACTS AND MEAT JUICES; FISH EXTRACTS', nodeColor: '#9fb3bf',
  },
  {
    productId: '3223', productCommunity: '211', x: 286.1344451904297, y: 6379.78662109375, nodeSize: 50.256134033203125, leamerCategory: '2', productName: 'LIGNITE,WHETHER OR NOT PULVERIZED,NOT AGGLOMERATED', nodeColor: '#5e1f05',
  },
  {
    productId: '5849', productCommunity: '100', x: 2125.67822265625, y: 5896.95068359375, nodeSize: 59.0693359375, leamerCategory: '10', productName: 'OTHER CHEMICAL DERIVATIVES OF CELLULOSE', nodeColor: '#9c219c',
  },
  {
    productId: '5922', productCommunity: '231', x: 1790.7442626953125, y: 5444.4638671875, nodeSize: 79.13720703125, leamerCategory: '10', productName: 'ALBUMINOIDAL SUBSTANCES;GLUES', nodeColor: '#223f59',
  },
  {
    productId: '8951', productCommunity: '70', x: 739.22119140625, y: 5512.36962890625, nodeSize: 56.656982421875, leamerCategory: '7', productName: 'OFFICE AND STATIONERY SUPPLIES,OF BASE METAL', nodeColor: '#ff707a',
  },
  {
    productId: '7851', productCommunity: '10', x: 627.5899047851562, y: 5773.110595703125, nodeSize: 86.6422119140625, leamerCategory: '9', productName: 'MOTORCYCLES,AUTO-CYCLES AND CYCLES WITH AN AUX.MOT', nodeColor: '#4037ab',
  },
  {
    productId: '6665', productCommunity: '70', x: 2274.979248046875, y: 3433.37255859375, nodeSize: 59.28955078125, leamerCategory: '7', productName: 'TABLEWARE & OTHER ARTICLES OF OTH.KINDS OF POTTERY', nodeColor: '#ff707a',
  },
  {
    productId: '0451', productCommunity: '231', x: 3627.702392578125, y: 6142.45166015625, nodeSize: 52.13330078125, leamerCategory: '6', productName: 'RYE,UNMILLED', nodeColor: '#223f59',
  },
  {
    productId: '8484', productCommunity: '170', x: 5009.568603515625, y: 4791.959716796875, nodeSize: 60.69384765625, leamerCategory: '7', productName: 'HEADGEAR AND FITTINGS THEREOF,N.E.S.', nodeColor: '#ffc200',
  },
  {
    productId: '6666', productCommunity: '70', x: 5215.291259765625, y: 4800.556884765625, nodeSize: 59.43603515625, leamerCategory: '7', productName: 'STATUETTES & OTH.ORNAMENTS,& ARTICLES OF ADORNMENT', nodeColor: '#ff707a',
  },
  {
    productId: '6673', productCommunity: '210', x: -2637.8953857421875, y: 2526.711669921875, nodeSize: 59.116455078125, leamerCategory: '7', productName: 'OTH.PRECIOUS & SEMI-PRECIOUS STONES,UNWORK.CUT ETC', nodeColor: '#7c1803',
  },
  {
    productId: '8851', productCommunity: '70', x: -1981.9737548828125, y: 3319.640380859375, nodeSize: 85.81396484375, leamerCategory: '9', productName: 'WATCHES,WATCH MOVEMENTS AND CASES', nodeColor: '#ff707a',
  },
  {
    productId: '8947', productCommunity: '180', x: -1960.0755615234375, y: 2677.631591796875, nodeSize: 91.0703125, leamerCategory: '7', productName: 'OTHER SPORTING GOODS AND FAIRGROUND AMUSEMENTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '6674', productCommunity: '210', x: -2184.8585205078125, y: 2666.266845703125, nodeSize: 54.037841796875, leamerCategory: '7', productName: 'SYNTHETIC/RECONSTRUCTED PRECIOUS/SEMI-PREC.STONES', nodeColor: '#7c1803',
  },
  {
    productId: '7224', productCommunity: '10', x: 460.9759521484375, y: 4986.84619140625, nodeSize: 80.73016357421875, leamerCategory: '9', productName: 'WHEELED TRACTORS,NOT INCL.  IN 744.11/783.2-', nodeColor: '#4037ab',
  },
  {
    productId: '0341', productCommunity: '240', x: 5554.5166015625, y: 2829.074462890625, nodeSize: 78.126953125, leamerCategory: '5', productName: 'FISH,FRESH(LIVE/DEAD)OR CHILLED,EXCL.FILLETS', nodeColor: '#8c94d1',
  },
  {
    productId: '8952', productCommunity: '70', x: -434.6654968261719, y: 5561.72216796875, nodeSize: 61.31549072265625, leamerCategory: '7', productName: 'PENS,PENCILS AND FOUNTAIN PENS', nodeColor: '#ff707a',
  },
  {
    productId: '5322', productCommunity: '100', x: -1419.5486450195312, y: 4460.8212890625, nodeSize: 55.4136962890625, leamerCategory: '10', productName: 'TANNING EXTRACTS OF VEGET.ORIGIN;TAN.& DERIVATIVES', nodeColor: '#9c219c',
  },
  {
    productId: '4245', productCommunity: '221', x: -996.06396484375, y: 5776.1083984375, nodeSize: 53.36083984375, leamerCategory: '6', productName: 'CASTOR OIL', nodeColor: '#6c8806',
  },
  {
    productId: '4241', productCommunity: '221', x: -1472.1631469726562, y: 4594.5126953125, nodeSize: 50.7388916015625, leamerCategory: '6', productName: 'LINSEED OIL', nodeColor: '#6c8806',
  },
  {
    productId: '5921', productCommunity: '999', x: 2704.7362060546875, y: 5294.341552734375, nodeSize: 57.661865234375, leamerCategory: '10', productName: 'STARCHES,INULIN AND WHEAT GLUTEN', nodeColor: '#9c9a87',
  },
  {
    productId: '4235', productCommunity: '80', x: 5129.5537109375, y: 2199.3701171875, nodeSize: 59.939453125, leamerCategory: '6', productName: 'OLIVE OIL', nodeColor: '#ff0062',
  },
  {
    productId: '4234', productCommunity: '221', x: -1869.8059692382812, y: 5176.456298828125, nodeSize: 52.8350830078125, leamerCategory: '6', productName: 'GROUNDNUT (PEANUT) OIL', nodeColor: '#6c8806',
  },
  {
    productId: '8993', productCommunity: '999', x: 3060.6612548828125, y: 2666.481201171875, nodeSize: 60.116943359375, leamerCategory: '7', productName: 'CANDLES,MATCHES,PYROPHORIC ALLOYS ETC.', nodeColor: '#9c9a87',
  },
  {
    productId: '6899', productCommunity: '214', x: 915.7708740234375, y: 2858.037109375, nodeSize: 59.8316650390625, leamerCategory: '2', productName: 'BASE METALS,N.E.S.AND CERMETS,UNWROUGHT', nodeColor: '#d66011',
  },
  {
    productId: '5225', productCommunity: '216', x: 3181.700927734375, y: 5591.416015625, nodeSize: 69.55810546875, leamerCategory: '10', productName: 'OTH.INORG.BASES & METALLIC OXID.,HYDROXID.& PEROX.', nodeColor: '#db9c2c',
  },
  {
    productId: '5232', productCommunity: '130', x: 2938.9814453125, y: 5080.6279296875, nodeSize: 71.00390625, leamerCategory: '10', productName: 'METALLIC SALTS AND PEROXYSALTS OF INORGANIC ACIDS', nodeColor: '#b54e61',
  },
  {
    productId: '6811', productCommunity: '214', x: 1511.737548828125, y: 2729.58251953125, nodeSize: 61.332275390625, leamerCategory: '2', productName: 'SILVER,UNWROUGHT,UNWORKED OR SEMI-MANUFACTURED', nodeColor: '#d66011',
  },
  {
    productId: '5249', productCommunity: '100', x: 1130.42431640625, y: 5998.192626953125, nodeSize: 55.53564453125, leamerCategory: '10', productName: 'OTHER RADIO-ACTIVE AND ASSOCIATED MATERIALS', nodeColor: '#9c219c',
  },
  {
    productId: '6891', productCommunity: '219', x: 1086.0311279296875, y: 6170.646728515625, nodeSize: 58.71044921875, leamerCategory: '2', productName: 'TUNGSTEN,MOLYBDENUM,TANTALUM & MAGNESIUM,UNWROU', nodeColor: '#ffc86c',
  },
  {
    productId: '6999', productCommunity: '999', x: 1155.763916015625, y: 5833.737548828125, nodeSize: 60.037841796875, leamerCategory: '8', productName: 'SEMI-MANUFACTURES OF TUNGSTEN,MOLYBDENUM ETC.', nodeColor: '#9c9a87',
  },
  {
    productId: '5312', productCommunity: '100', x: -554.5459289550781, y: 5745.8271484375, nodeSize: 56.57330322265625, leamerCategory: '10', productName: 'SYNTH.ORGANIC LUMINOPHORES;OPTIC.BLEACHING AGENTS', nodeColor: '#9c219c',
  },
  {
    productId: '7832', productCommunity: '10', x: 2068.3089599609375, y: 5537.08447265625, nodeSize: 86.573486328125, leamerCategory: '9', productName: 'ROAD TRACTORS AND SEMI-TRAILERS', nodeColor: '#4037ab',
  },
  {
    productId: '6419', productCommunity: '120', x: 2188.1251220703125, y: 5815.841796875, nodeSize: 58.702880859375, leamerCategory: '3', productName: 'CONVERTED PAPER AND PAPERBOARD,N.E.S.', nodeColor: '#730049',
  },
  {
    productId: '7187', productCommunity: '10', x: -1159.8240356445312, y: 5280.7412109375, nodeSize: 58.5137939453125, leamerCategory: '9', productName: 'NUCLEAR REACTORS AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '0412', productCommunity: '221', x: 2917.200927734375, y: 5646.29833984375, nodeSize: 97.97216796875, leamerCategory: '6', productName: 'OTHER WHEAT (INCLUDING SPELT) AND MESLIN,UNMILLED', nodeColor: '#6c8806',
  },
  {
    productId: '6639', productCommunity: '999', x: 435.1204833984375, y: 5270.72216796875, nodeSize: 58.65057373046875, leamerCategory: '7', productName: 'ARTICLES OF CERAMIC MATERIALS,N.E.S.', nodeColor: '#9c9a87',
  },
  {
    productId: '7439', productCommunity: '10', x: 816.7999572753906, y: 4236.88623046875, nodeSize: 83.86895751953125, leamerCategory: '9', productName: 'PARTS OF THE MACHINES OF 743.5-,743.6-', nodeColor: '#4037ab',
  },
  {
    productId: '6649', productCommunity: '60', x: 2949.3392333984375, y: 3342.8984375, nodeSize: 69.264404296875, leamerCategory: '7', productName: 'GLASS,NE.ES.', nodeColor: '#473b1c',
  },
  {
    productId: '6651', productCommunity: '999', x: 3672.1590576171875, y: 2804.3056640625, nodeSize: 60.117919921875, leamerCategory: '7', productName: 'CONTAINERS,OF GLASS,USED FOR CONVEYANCE OR PACKING', nodeColor: '#9c9a87',
  },
  {
    productId: '6732', productCommunity: '60', x: 3853.6741943359375, y: 3108.856201171875, nodeSize: 93.942138671875, leamerCategory: '8', productName: 'BARS & RODS,OF IRON/STEEL;HOLLOW MINING DRILL ST.', nodeColor: '#473b1c',
  },
  {
    productId: '6652', productCommunity: '70', x: 2232.4730224609375, y: 3659.16845703125, nodeSize: 61.292724609375, leamerCategory: '7', productName: 'GLASSWARE USED FOR TABLE,KITCHEN,INDOOR DECORATION', nodeColor: '#ff707a',
  },
  {
    productId: '6643', productCommunity: '70', x: -1976.8870849609375, y: 3197.8671875, nodeSize: 52.987548828125, leamerCategory: '7', productName: 'DRAWN OR BLOWN GLASS,UNWORKED,IN RECTANGLES', nodeColor: '#ff707a',
  },
  {
    productId: '6671', productCommunity: '219', x: -1805.5281372070312, y: 3268.216064453125, nodeSize: 58.5616455078125, leamerCategory: '7', productName: 'PEARLS,UNWORKEDNVORKED,NOT MOUNTED,SET OR STRUN', nodeColor: '#ffc86c',
  },
  {
    productId: '6645', productCommunity: '10', x: 2552.94677734375, y: 4748.88671875, nodeSize: 53.71533203125, leamerCategory: '7', productName: 'CASTOR ROLLED GLASS,UNWORKED,WHETHER FIGURED/NOT', nodeColor: '#4037ab',
  },
  {
    productId: '7611', productCommunity: '180', x: -795.2763366699219, y: 3842.963623046875, nodeSize: 120.29022216796875, leamerCategory: '9', productName: 'TELEVISION RECEIVERS,COLOUR', nodeColor: '#ff6bb0',
  },
  {
    productId: '7643', productCommunity: '180', x: -1322.2023315429688, y: 2406.005615234375, nodeSize: 147.4984130859375, leamerCategory: '9', productName: 'RADIOTELEGRAPHIC & RADIOTELEPHONIC TRANSMITTERS', nodeColor: '#ff6bb0',
  },
  {
    productId: '8124', productCommunity: '180', x: -2385.0687255859375, y: 3313.03662109375, nodeSize: 99.523681640625, leamerCategory: '8', productName: 'LIGHTING FIXTURES AND FITTINGS AND PARTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '8924', productCommunity: '999', x: -1117.2676391601562, y: 3834.751220703125, nodeSize: 57.6300048828125, leamerCategory: '7', productName: 'PICTURE POSTCARDS,GREETING CARDS', nodeColor: '#9c9a87',
  },
  {
    productId: '7648', productCommunity: '180', x: -981.0203857421875, y: 3939.265625, nodeSize: 74.2548828125, leamerCategory: '9', productName: 'TELECOMMUNICATIONS EQUIPMENT', nodeColor: '#ff6bb0',
  },
  {
    productId: '8942', productCommunity: '180', x: -2188.3077392578125, y: 2922.361328125, nodeSize: 144.152099609375, leamerCategory: '7', productName: 'CHILDRENS TOYS,INDOOR GAMES,ETC.', nodeColor: '#ff6bb0',
  },
  {
    productId: '7642', productCommunity: '180', x: -2242.4588623046875, y: 3219.096435546875, nodeSize: 85.788818359375, leamerCategory: '9', productName: 'MICROPHONES,LOUDSPEAKERS,AMPLIFIERS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7641', productCommunity: '180', x: -1021.7846069335938, y: 2378.953125, nodeSize: 144.3797607421875, leamerCategory: '9', productName: 'ELECT.LINE TELEPHONIC & TELEGRAPHIC APPARATUS', nodeColor: '#ff6bb0',
  },
  {
    productId: '7631', productCommunity: '180', x: -1775.7971801757812, y: 3059.58447265625, nodeSize: 53.0299072265625, leamerCategory: '9', productName: 'GRAMOPHONES & RECORD PLAYERS,ELECTRIC', nodeColor: '#ff6bb0',
  },
  {
    productId: '6254', productCommunity: '30', x: -477.5902099609375, y: 5861.802001953125, nodeSize: 55.84124755859375, leamerCategory: '8', productName: 'TYRES,PNEUM.NEW.OF A KIND USED ON MOTOR/BICYCLES', nodeColor: '#299fff',
  },
  {
    productId: '7131', productCommunity: '20', x: -1830.1494140625, y: 5473.2197265625, nodeSize: 58.3642578125, leamerCategory: '9', productName: 'INTERNAL COMBUSTION PISTON ENGINES FOR AIRCRAFT', nodeColor: '#0576a6',
  },
  {
    productId: '8821', productCommunity: '100', x: -889.5866394042969, y: 4754.0224609375, nodeSize: 61.73028564453125, leamerCategory: '9', productName: 'CHEMICAL PRODUCTS & FLASHLIGHT MATERIALS', nodeColor: '#9c219c',
  },
  {
    productId: '7213', productCommunity: '10', x: 1050.0026550292969, y: 3881.8372802734375, nodeSize: 56.85357666015625, leamerCategory: '9', productName: 'DAIRY MACHINERY AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '0565', productCommunity: '80', x: 4341.133056640625, y: 3541.548095703125, nodeSize: 61.77099609375, leamerCategory: '4', productName: 'VEGETABLES,PREPARED OR PRESERVED,N.E.S.', nodeColor: '#ff0062',
  },
  {
    productId: '0583', productCommunity: '80', x: 4111.4276123046875, y: 3655.48779296875, nodeSize: 55.250244140625, leamerCategory: '4', productName: 'JAMS,FRUIT JELLIES, MARMALADES,FRUIT PUREE,COOKED', nodeColor: '#ff0062',
  },
  {
    productId: '6921', productCommunity: '60', x: 3120.806640625, y: 4325.08251953125, nodeSize: 57.5615234375, leamerCategory: '8', productName: 'RESERVOIRS,TANKS,VATS AND SIMILAR CONTAINERS', nodeColor: '#473b1c',
  },
  {
    productId: '5542', productCommunity: '120', x: 3062.8712158203125, y: 3650.640380859375, nodeSize: 82.956298828125, leamerCategory: '10', productName: 'ORGANIC SURFACE-ACTIVE AGENTS,N.E.S.', nodeColor: '#730049',
  },
  {
    productId: '6589', productCommunity: '170', x: 5173.35498046875, y: 4327.679443359375, nodeSize: 65.080078125, leamerCategory: '8', productName: 'OTHER MADE-UP ARTICLES OF TEXTILE MATERIALS,N.E.S', nodeColor: '#ffc200',
  },
  {
    productId: '6341', productCommunity: '60', x: 3477.7716064453125, y: 3642.638671875, nodeSize: 60.135009765625, leamerCategory: '3', productName: 'WOOD SAWN LENGTHWISE,SLICED/PEELED,BUT NOT PREPAR.', nodeColor: '#473b1c',
  },
  {
    productId: '7442', productCommunity: '10', x: 583.7939758300781, y: 4087.2347412109375, nodeSize: 101.53717041015625, leamerCategory: '9', productName: 'LIFTING,HANDLING,LOADING MACH.CONVEYORS', nodeColor: '#4037ab',
  },
  {
    productId: '7412', productCommunity: '10', x: 384.2490234375, y: 4388.456787109375, nodeSize: 57.5694580078125, leamerCategory: '9', productName: 'FURNACE BURNERS FOR LIQUID FUEL AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '6584', productCommunity: '170', x: 5189.90673828125, y: 4154.501220703125, nodeSize: 81.125, leamerCategory: '8', productName: 'BED LINEN,TABLE LINEN,TOILET & KITCHEN LINEN ETC.', nodeColor: '#ffc200',
  },
  {
    productId: '7821', productCommunity: '10', x: 1499.5847778320312, y: 4819.37939453125, nodeSize: 148.9444580078125, leamerCategory: '9', productName: 'MOTOR VEHICLES FOR TRANSPORT OF GOODS/MATERIALS', nodeColor: '#4037ab',
  },
  {
    productId: '7499', productCommunity: '10', x: 820.2293090820312, y: 4029.01416015625, nodeSize: 97.6446533203125, leamerCategory: '9', productName: 'OTHER NON-ELECTRIC PARTS & ACCESSORIES OF MACH', nodeColor: '#4037ab',
  },
  {
    productId: '8922', productCommunity: '120', x: 2510.333984375, y: 4010.6766357421875, nodeSize: 62.75634765625, leamerCategory: '7', productName: 'NEWSPAPERS JOURNALS,PERIODICALS', nodeColor: '#730049',
  },
  {
    productId: '7281', productCommunity: '10', x: 375.27239990234375, y: 4249.8173828125, nodeSize: 78.19464111328125, leamerCategory: '9', productName: 'MACH.TOOLS FOR SPECIALIZED PARTICULAR INDUSTRIES', nodeColor: '#4037ab',
  },
  {
    productId: '6782', productCommunity: '10', x: 1027.6941528320312, y: 5202.71435546875, nodeSize: 79.9224853515625, leamerCategory: '8', productName: 'SEAMLESSTUBES AND PIPES;BLANKS FOR TUBES & PIPES', nodeColor: '#4037ab',
  },
  {
    productId: '6618', productCommunity: '60', x: 3320.500732421875, y: 4120.103515625, nodeSize: 57.55078125, leamerCategory: '7', productName: 'CONSTRUCTN.MATER.OF ASBESTOS-CEMENT & FIBRE-CEMEN', nodeColor: '#473b1c',
  },
  {
    productId: '5912', productCommunity: '110', x: 2613.06591796875, y: 3026.6123046875, nodeSize: 59.7470703125, leamerCategory: '10', productName: 'FUNGICIDES PACKED FOR SALE ETC.', nodeColor: '#4b0046',
  },
  {
    productId: '2633', productCommunity: '170', x: 5026.5703125, y: 3566.509521484375, nodeSize: 53.265625, leamerCategory: '6', productName: 'COTTON WASTE (INCLUDING PULLED OR GARNETTED RAGS)', nodeColor: '#ffc200',
  },
  {
    productId: '6611', productCommunity: '216', x: 3715.7720947265625, y: 5189.74072265625, nodeSize: 51.667236328125, leamerCategory: '7', productName: 'QUICKLIME,SLAKED LIME AND HYDRAULIC LIME', nodeColor: '#db9c2c',
  },
  {
    productId: '7853', productCommunity: '999', x: -554.6813659667969, y: 6175.358642578125, nodeSize: 70.80145263671875, leamerCategory: '9', productName: 'INVALID CARIAGES,MOTORIZED OR NOT,PARTS', nodeColor: '#9c9a87',
  },
  {
    productId: '0111', productCommunity: '239', x: 4265.826904296875, y: 6054.814453125, nodeSize: 101.93701171875, leamerCategory: '5', productName: 'MEAT OF BOVINE ANIMALS, FRESH, CHILLED OR FROZEN', nodeColor: '#9fb3bf',
  },
  {
    productId: '4314', productCommunity: '220', x: -2165.9061279296875, y: 1909.681640625, nodeSize: 50.409423828125, leamerCategory: '5', productName: 'WAXES OF ANIMAL OR VEGETABLE ORIGIN', nodeColor: '#005a4f',
  },
  {
    productId: '0741', productCommunity: '222', x: 4893.993408203125, y: 6578.4521484375, nodeSize: 60.28173828125, leamerCategory: '4', productName: 'TEA', nodeColor: '#3aa67b',
  },
  {
    productId: '0722', productCommunity: '220', x: -2255.2989501953125, y: 1975.5360717773438, nodeSize: 54.653564453125, leamerCategory: '4', productName: 'COCOA POWDER,UNSWEETENED', nodeColor: '#005a4f',
  },
  {
    productId: '4242', productCommunity: '220', x: -2050.426513671875, y: 2345.91162109375, nodeSize: 68.10302734375, leamerCategory: '6', productName: 'PALM OIL', nodeColor: '#005a4f',
  },
  {
    productId: '0721', productCommunity: '220', x: -2345.221923828125, y: 2067.4293823242188, nodeSize: 60.8447265625, leamerCategory: '4', productName: 'COCOA BEANS,WHOLE OR BROKEN,RAW OR ROASTED', nodeColor: '#005a4f',
  },
  {
    productId: '0723', productCommunity: '220', x: -2144.214111328125, y: 2232.732666015625, nodeSize: 59.59375, leamerCategory: '4', productName: 'COCOA BUTTER AND COCOA PASTE', nodeColor: '#005a4f',
  },
  {
    productId: '0712', productCommunity: '110', x: 2817.7279052734375, y: 2732.40625, nodeSize: 59.234619140625, leamerCategory: '4', productName: 'EXTRACTS,ESSENCES/CONCENT.OF COFFEE & CHICORY', nodeColor: '#4b0046',
  },
  {
    productId: '1223', productCommunity: '223', x: 2846.8143310546875, y: 2518.3984375, nodeSize: 58.120849609375, leamerCategory: '6', productName: 'TOBACCO,MANUFACTURED (INC.SMOKING,CHEWING TOBACC', nodeColor: '#bfbb11',
  },
  {
    productId: '2471', productCommunity: '60', x: 3475.557373046875, y: 5656.282958984375, nodeSize: 61.90234375, leamerCategory: '3', productName: 'SAWLOGS AND VENEER LOGS,OF CONIFEROUS SPECIES', nodeColor: '#473b1c',
  },
  {
    productId: '0112', productCommunity: '239', x: 4965.41845703125, y: 1920.135009765625, nodeSize: 59.9521484375, leamerCategory: '5', productName: 'MEAT OF SHEEP AND GOATS, FRESH, CHILLED OR FROZEN', nodeColor: '#9fb3bf',
  },
  {
    productId: '2482', productCommunity: '60', x: 3345.1812744140625, y: 5286.10986328125, nodeSize: 115.524658203125, leamerCategory: '3', productName: 'WOOD OF CONIFEROUS SPECIES,SAWN,PLANED,TONGUED ET', nodeColor: '#473b1c',
  },
  {
    productId: '2450', productCommunity: '60', x: 4569.345947265625, y: 3551.961669921875, nodeSize: 53.73779296875, leamerCategory: '3', productName: 'FUEL WOOD (EXCLUDING WOOD WASTE) AND WOOD CHARCO', nodeColor: '#473b1c',
  },
  {
    productId: '6330', productCommunity: '80', x: 5216.678466796875, y: 2091.118896484375, nodeSize: 57.91650390625, leamerCategory: '3', productName: 'CORK MANUFACTURES', nodeColor: '#ff0062',
  },
  {
    productId: '2440', productCommunity: '229', x: 5384.50146484375, y: 2045.2979736328125, nodeSize: 52.5458984375, leamerCategory: '3', productName: 'CORK,NATURAL,RAW & WASTE (INCLUD.IN BLOCKS/SHEETS)', nodeColor: '#78b83d',
  },
  {
    productId: '2221', productCommunity: '222', x: 4780.368896484375, y: 6543.02392578125, nodeSize: 57.25048828125, leamerCategory: '6', productName: 'GROUNDNUTS (PEANUTS),GREEN,WHETHER OR NOT SHELLED', nodeColor: '#3aa67b',
  },
  {
    productId: '0742', productCommunity: '221', x: 3161.9366455078125, y: 6418.202392578125, nodeSize: 48.946044921875, leamerCategory: '4', productName: 'MATE', nodeColor: '#6c8806',
  },
  {
    productId: '6727', productCommunity: '50', x: 1257.2425537109375, y: 3584.84130859375, nodeSize: 92.779052734375, leamerCategory: '8', productName: 'IRON OR STEEL COILS FOR RE-ROLLING', nodeColor: '#a33bff',
  },
  {
    productId: '7361', productCommunity: '10', x: 35.91954803466797, y: 5472.507080078125, nodeSize: 93.10943603515625, leamerCategory: '9', productName: 'METAL CUTTING MACHINE-TOOLS', nodeColor: '#4037ab',
  },
  {
    productId: '0012', productCommunity: '239', x: 5106.648681640625, y: 1898.666748046875, nodeSize: 56.27880859375, leamerCategory: '5', productName: 'SHEEP AND GOATS, LIVE', nodeColor: '#9fb3bf',
  },
  {
    productId: '4311', productCommunity: '221', x: -1781.2092895507812, y: 4753.8876953125, nodeSize: 54.0975341796875, leamerCategory: '5', productName: 'OILS,ANIMAL & VEGETABLE,BOILED,OXIDIZED, ETC.', nodeColor: '#6c8806',
  },
  {
    productId: '7284', productCommunity: '10', x: -228.77757263183594, y: 5502.00244140625, nodeSize: 148.35745239257812, leamerCategory: '9', productName: 'MACH.& APPLIANCES FOR SPEZIALIZED PARTICULAR IND.', nodeColor: '#4037ab',
  },
  {
    productId: '6534', productCommunity: '160', x: 4749.9111328125, y: 5045.47802734375, nodeSize: 71.5244140625, leamerCategory: '8', productName: 'FABRICS,WOVEN,OF DISCONTINUOUS SYNTHETIC FIBRES', nodeColor: '#c4af78',
  },
  {
    productId: '6516', productCommunity: '160', x: 4351.345458984375, y: 5397.59375, nodeSize: 61.04638671875, leamerCategory: '8', productName: 'YARN OF DISCONT.SYNTH.FIBRES,CONTAIN.LESS THAN 85%', nodeColor: '#c4af78',
  },
  {
    productId: '6632', productCommunity: '10', x: 1308.0556640625, y: 4945.37939453125, nodeSize: 58.819091796875, leamerCategory: '7', productName: 'NATURAL OR ARTIFICIAL ABRASIVE POWDER OR GRAIN', nodeColor: '#4037ab',
  },
  {
    productId: '8732', productCommunity: '10', x: 1090.2222900390625, y: 5314.865966796875, nodeSize: 59.579833984375, leamerCategory: '9', productName: 'REVOLUTION COUNTERS,TAXIMETERS AND THE LIKE', nodeColor: '#4037ab',
  },
  {
    productId: '7246', productCommunity: '10', x: 465.57810974121094, y: 3893.9388427734375, nodeSize: 58.578460693359375, leamerCategory: '9', productName: 'AUXIL.MACHINERY FOR HEADINGS 724.51/52/53', nodeColor: '#4037ab',
  },
  {
    productId: '6931', productCommunity: '30', x: 2441.8746337890625, y: 4187.497802734375, nodeSize: 60.216064453125, leamerCategory: '8', productName: 'STRANDED WIRE,CABLES,CORDAGES AND THE LIKE', nodeColor: '#299fff',
  },
  {
    productId: '6770', productCommunity: '30', x: 2637.6348876953125, y: 4685.846435546875, nodeSize: 61.026123046875, leamerCategory: '8', productName: 'IRON/STEEL WIRE/WHETH/NOT COATED,BUT NOT INSULATED', nodeColor: '#299fff',
  },
  {
    productId: '8742', productCommunity: '100', x: -205.42803955078125, y: 4659.39306640625, nodeSize: 104.92608642578125, leamerCategory: '9', productName: 'DRAWING,MARKING-OUT,DISC CALCULATORS AND THE LIKE', nodeColor: '#9c219c',
  },
  {
    productId: '2882', productCommunity: '219', x: 4078.49462890625, y: 3247.541259765625, nodeSize: 79.115234375, leamerCategory: '2', productName: 'OTHER NON-FERROUS BASE METAL WASTE AND SCRAP,N.E.S', nodeColor: '#ffc86c',
  },
  {
    productId: '5821', productCommunity: '120', x: 2593.5867919921875, y: 4071.42236328125, nodeSize: 56.307373046875, leamerCategory: '10', productName: 'PHENOPLASTS', nodeColor: '#730049',
  },
  {
    productId: '7638', productCommunity: '180', x: -1504.4360961914062, y: 3252.8775634765625, nodeSize: 124.5189208984375, leamerCategory: '9', productName: 'OTHER SOUND RECORDERS AND REPRODUCERS', nodeColor: '#ff6bb0',
  },
  {
    productId: '6842', productCommunity: '60', x: 3059.7059326171875, y: 4103.1666259765625, nodeSize: 117.069091796875, leamerCategory: '2', productName: 'ALUMINIUM AND ALUMINIUM ALLOYS,WORKED', nodeColor: '#473b1c',
  },
  {
    productId: '8510', productCommunity: '170', x: 4774.070068359375, y: 4231.232177734375, nodeSize: 144.03955078125, leamerCategory: '7', productName: 'FOOTWEAR', nodeColor: '#ffc200',
  },
  {
    productId: '8932', productCommunity: '60', x: 3225.3397216796875, y: 4511.645263671875, nodeSize: 58.014404296875, leamerCategory: '7', productName: 'SANITARY OR TOILET ART.OF MATERIALS OF DIV.58', nodeColor: '#473b1c',
  },
  {
    productId: '6935', productCommunity: '999', x: 2790.967041015625, y: 4577.099853515625, nodeSize: 58.28369140625, leamerCategory: '8', productName: 'GAUZE,CLOTH,GRILL OF IRON STEEL OR COPPER', nodeColor: '#9c9a87',
  },
  {
    productId: '6794', productCommunity: '219', x: 2659.885498046875, y: 4550.146240234375, nodeSize: 59.1298828125, leamerCategory: '8', productName: 'CASTINGS OR IRON OR STEEL,IN THE ROUGH STATE', nodeColor: '#ffc86c',
  },
  {
    productId: '7414', productCommunity: '60', x: 2919.6612548828125, y: 4003.0196533203125, nodeSize: 79.697509765625, leamerCategory: '9', productName: 'REFRIGERATORS & REFR.EQUIPMENT,EX.HOUSEHOLD,PARTS', nodeColor: '#473b1c',
  },
  {
    productId: '8996', productCommunity: '100', x: -762.424072265625, y: 4282.829833984375, nodeSize: 79.6734619140625, leamerCategory: '7', productName: 'ORTHOPAEDIC APPLIANCES,SURGICAL BELTS AND THE LIKE', nodeColor: '#9c219c',
  },
  {
    productId: '7268', productCommunity: '10', x: -275.86034393310547, y: 6164.96044921875, nodeSize: 56.58631896972656, leamerCategory: '9', productName: 'BOOKBINDING MACHINERY AND PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '7761', productCommunity: '180', x: -952.0921630859375, y: 3794.702880859375, nodeSize: 86.6221923828125, leamerCategory: '9', productName: 'TELEVISION PICTURE TUBES,CATHODE RAY', nodeColor: '#ff6bb0',
  },
  {
    productId: '1110', productCommunity: '80', x: 3805.6866455078125, y: 3575.263671875, nodeSize: 61.293701171875, leamerCategory: '4', productName: 'NON ALCOHOLIC BEVERAGES,N.E.S.', nodeColor: '#ff0062',
  },
  {
    productId: '7782', productCommunity: '30', x: -713.6529235839844, y: 5665.689208984375, nodeSize: 79.13726806640625, leamerCategory: '9', productName: 'ELECT.FILAMENT LAMPS AND DISCHARGE LAMPS', nodeColor: '#299fff',
  },
  {
    productId: '6924', productCommunity: '60', x: 3618.1806640625, y: 3944.601806640625, nodeSize: 64.7919921875, leamerCategory: '8', productName: 'CASKS,DRUMS,BOXES OF IRON/STEEL FOR PACKING GOODS', nodeColor: '#473b1c',
  },
  {
    productId: '0223', productCommunity: '231', x: 2980.3048095703125, y: 3743.609375, nodeSize: 61.128173828125, leamerCategory: '5', productName: 'MILK & CREAM,FRESH,NOT CONCENTRATED OR SWEETENED', nodeColor: '#223f59',
  },
  {
    productId: '6912', productCommunity: '60', x: 2939.2816162109375, y: 4511.05029296875, nodeSize: 60.382080078125, leamerCategory: '8', productName: 'STRUCTURES& PARTS OF STRUC.;ALUMINIUM;PLATES,RODS', nodeColor: '#473b1c',
  },
  {
    productId: '6428', productCommunity: '60', x: 2852.6842041015625, y: 4123.3099365234375, nodeSize: 86.739501953125, leamerCategory: '3', productName: 'ART.OF PAPER PULP,PAPER,PAPERBOARD,CELLU.WADDING', nodeColor: '#473b1c',
  },
  {
    productId: '7211', productCommunity: '10', x: 2402.89794921875, y: 4939.787841796875, nodeSize: 59.26806640625, leamerCategory: '9', productName: 'AGRICULTURAL & HORTICUL.MACH. FOR SOIL PREPARAT', nodeColor: '#4037ab',
  },
  {
    productId: '7132', productCommunity: '10', x: 745.9255981445312, y: 4795.1357421875, nodeSize: 133.6695556640625, leamerCategory: '9', productName: 'INT.COMBUSTION PISTON ENGINES FOR PROPELLING VEH.', nodeColor: '#4037ab',
  },
  {
    productId: '6351', productCommunity: '60', x: 3569.3763427734375, y: 4450.9951171875, nodeSize: 57.901611328125, leamerCategory: '3', productName: 'WOODEN PACKING CASES,BOXES,CRATES,DRUMS ETC.', nodeColor: '#473b1c',
  },
  {
    productId: '3345', productCommunity: '100', x: -539.6231689453125, y: 4505.5869140625, nodeSize: 105.986328125, leamerCategory: '1', productName: 'LUBRICATING PETROL.OILS & OTHER HEAVY PETROL.OILS', nodeColor: '#9c219c',
  },
  {
    productId: '5154', productCommunity: '100', x: -834.3325500488281, y: 4656.4697265625, nodeSize: 60.86614990234375, leamerCategory: '10', productName: 'ORGANO-SULPHUR COMPOUNDS', nodeColor: '#9c219c',
  },
  {
    productId: '6991', productCommunity: '10', x: 2247.3468017578125, y: 4370.0224609375, nodeSize: 103.367431640625, leamerCategory: '8', productName: 'LOCKSMITHS WARES,SAFES,STRONG ROOMS OF BASE METAL', nodeColor: '#4037ab',
  },
  {
    productId: '6536', productCommunity: '160', x: 5192.72509765625, y: 5916.182373046875, nodeSize: 57.74609375, leamerCategory: '8', productName: 'FABRICS,WOVEN CONTAIN.85% OF DISCONT.REGENER.FIBR.', nodeColor: '#c4af78',
  },
  {
    productId: '6583', productCommunity: '160', x: 4962.6240234375, y: 5253.72802734375, nodeSize: 57.1025390625, leamerCategory: '8', productName: 'TRAVELLING RUGS AND BLANKETS,NOT KNITTED/CROCHETED', nodeColor: '#c4af78',
  },
  {
    productId: '9710', productCommunity: '216', x: 5756.181884765625, y: 2980.381103515625, nodeSize: 68.93994140625, leamerCategory: '2', productName: 'GOLD,NON-MONETARY', nodeColor: '#db9c2c',
  },
  {
    productId: '2911', productCommunity: '240', x: 5019.53369140625, y: 3062.974609375, nodeSize: 53.830078125, leamerCategory: '5', productName: 'BONES,HORNS,IVORY,HOOVES,CLAWS,CORAL,SHELLS ETC.', nodeColor: '#8c94d1',
  },
  {
    productId: '2923', productCommunity: '229', x: 5237.578369140625, y: 4517.5634765625, nodeSize: 51.81689453125, leamerCategory: '5', productName: 'VEGET.MATER.OF A KIND USED PRIMAR.FOR PLAITING', nodeColor: '#78b83d',
  },
  {
    productId: '6354', productCommunity: '170', x: 4999.680908203125, y: 4506.916748046875, nodeSize: 59.99072265625, leamerCategory: '3', productName: 'MANUFACTURES OF WOOD FOR DOMESTIC/DECORATIVE USE', nodeColor: '#ffc200',
  },
  {
    productId: '6612', productCommunity: '216', x: 4721.728759765625, y: 3256.644287109375, nodeSize: 62.75244140625, leamerCategory: '7', productName: 'PORTLAND CEMENT,CIMENT FONDU,SLAG CEMENT ETC.', nodeColor: '#db9c2c',
  },
  {
    productId: '7243', productCommunity: '10', x: 1378.510498046875, y: 5546.66650390625, nodeSize: 61.119140625, leamerCategory: '9', productName: 'SEWING MACHINES,FURNITURE FOR SEWING MACH.& PARTS', nodeColor: '#4037ab',
  },
  {
    productId: '6519', productCommunity: '160', x: 2856.6912841796875, y: 5140.545166015625, nodeSize: 59.698486328125, leamerCategory: '8', productName: 'YARN OF TEXT.FIBRES,N.E.S.,INCL.YARN OF GLASS FIB.', nodeColor: '#c4af78',
  },
  {
    productId: '7852', productCommunity: '70', x: 4108.96826171875, y: 5161.088623046875, nodeSize: 59.6376953125, leamerCategory: '9', productName: 'CYLES,NOT MOTORIZED', nodeColor: '#ff707a',
  },
  {
    productId: '6522', productCommunity: '160', x: 4620.2470703125, y: 5603.844482421875, nodeSize: 103.34765625, leamerCategory: '8', productName: 'COTTON FABRICS,WOVEN,BLEACH.MERCERIZ.DYED,PRINTED', nodeColor: '#c4af78',
  },
  {
    productId: '0411', productCommunity: '221', x: 3009.7601318359375, y: 5912.6005859375, nodeSize: 61.062255859375, leamerCategory: '6', productName: 'DURUM WHEAT,UNMILLED', nodeColor: '#6c8806',
  },
  {
    productId: '6538', productCommunity: '160', x: 5054.27197265625, y: 5700.696533203125, nodeSize: 58.6171875, leamerCategory: '8', productName: 'FABRICS,WOVEN OF DISCONTINUOUS REGENERATED FIBRES', nodeColor: '#c4af78',
  },
  {
    productId: '6539', productCommunity: '160', x: 4734.2578125, y: 5696.910400390625, nodeSize: 55.6376953125, leamerCategory: '8', productName: 'PILE & CHENILLE FABRICS,WOVEN OF MAN-MADE FIBRES', nodeColor: '#c4af78',
  },
  {
    productId: '6549', productCommunity: '160', x: 4990.484130859375, y: 5393.758056640625, nodeSize: 53.33544921875, leamerCategory: '8', productName: 'FABRICS,WOVEN,N.E.S.', nodeColor: '#c4af78',
  },
  {
    productId: '8973', productCommunity: '216', x: 5038.226318359375, y: 5822.0537109375, nodeSize: 107.68896484375, leamerCategory: '7', productName: 'JEWELLERY OF GOLD,SILVER OR PLATINUM', nodeColor: '#db9c2c',
  },
  {
    productId: '8981', productCommunity: '180', x: -1991.4085083007812, y: 3571.715087890625, nodeSize: 57.1661376953125, leamerCategory: '7', productName: 'PIANOS AND OTHER STRING MUSICAL INSTUMENTS', nodeColor: '#ff6bb0',
  },
  {
    productId: '0615', productCommunity: '229', x: 3918.8330078125, y: 2563.7457275390625, nodeSize: 55.623046875, leamerCategory: '4', productName: 'MOLASSES,WHETHER OR NOT DECOLOURIZED', nodeColor: '#78b83d',
  },
  {
    productId: '2919', productCommunity: '230', x: 4094.909423828125, y: 2040.540283203125, nodeSize: 61.24951171875, leamerCategory: '5', productName: 'OTHER MATERIALS OF ANIMAL ORIGIN, N.E.S', nodeColor: '#21366b',
  },
  {
    productId: '0616', productCommunity: '239', x: 4228.856201171875, y: 2168.871337890625, nodeSize: 54.96435546875, leamerCategory: '4', productName: 'NATURAL HONEY', nodeColor: '#9fb3bf',
  },
  {
    productId: '8991', productCommunity: '216', x: 5300.03662109375, y: 5166.507080078125, nodeSize: 54.5068359375, leamerCategory: '7', productName: 'ART.& MANUF.OF CARVING OR MOULDING MATERIALS', nodeColor: '#db9c2c',
  },
  {
    productId: '6422', productCommunity: '60', x: 3368.44873046875, y: 4364.142333984375, nodeSize: 55.623046875, leamerCategory: '3', productName: 'WRITING BLOCKS,ENVELOPES,ETC.CORRESPONDENCE CARD', nodeColor: '#473b1c',
  },
  {
    productId: '0149', productCommunity: '239', x: 3066.3411865234375, y: 3436.8759765625, nodeSize: 61.530029296875, leamerCategory: '5', productName: 'OTHER PREPARED OR PRESERVED MEAT OR MEAT OFFALS', nodeColor: '#9fb3bf',
  },
  {
    productId: '7112', productCommunity: '30', x: 4287.761962890625, y: 5143.351318359375, nodeSize: 55.81298828125, leamerCategory: '9', productName: 'AUXILIARY PLANT FOR USE WITH BOILERS,CONDENSORS', nodeColor: '#299fff',
  },
  {
    productId: '7119', productCommunity: '30', x: 4158.301025390625, y: 4966.873291015625, nodeSize: 58.37744140625, leamerCategory: '9', productName: 'PARTS OF BOILERS & AUX.PLANT OF 711.1-/711.2-', nodeColor: '#299fff',
  },
  {
    productId: '6259', productCommunity: '30', x: 2363.966064453125, y: 3892.8668212890625, nodeSize: 61.41552734375, leamerCategory: '8', productName: 'OTHER TYRES,TYRE CASES,INNER TUBES', nodeColor: '#299fff',
  },
  {
    productId: '7831', productCommunity: '10', x: 2617.3609619140625, y: 5591.80712890625, nodeSize: 71.829833984375, leamerCategory: '9', productName: 'PUBLIC-SERVICE TYPE PASSENGER MOTOR VEHICLES ETC.', nodeColor: '#4037ab',
  },
  {
    productId: '6252', productCommunity: '30', x: 2380.054931640625, y: 3996.5631103515625, nodeSize: 79.94140625, leamerCategory: '8', productName: 'TYRES,PNEUMAT.,NEW,OF A KIND USED ON BUSES,LORRIES', nodeColor: '#299fff',
  },
  {
    productId: '6644', productCommunity: '30', x: 1823.225830078125, y: 3742.937255859375, nodeSize: 59.7890625, leamerCategory: '7', productName: 'CAST,ROLLED,DRAWN OR BLOWN GLASS,IN RECTANGLES', nodeColor: '#299fff',
  },
  {
    productId: '8483', productCommunity: '239', x: 3947.65966796875, y: 5843.552001953125, nodeSize: 57.6591796875, leamerCategory: '7', productName: 'FUR CLOTHING,ARTICLES MADE OF FURSKINS', nodeColor: '#9fb3bf',
  },
  {
    productId: '7248', productCommunity: '999', x: 4010.0611572265625, y: 6101.419189453125, nodeSize: 55.620361328125, leamerCategory: '9', productName: 'MACH.FOR PREPARING,TANNING OR WORKING HIDES', nodeColor: '#9c9a87',
  },
  {
    productId: '5121', productCommunity: '90', x: 3172.321533203125, y: 2830.213134765625, nodeSize: 94.2724609375, leamerCategory: '10', productName: 'ACYCLIC ALCOHOLS & THEIR HALOGENATED,DERIVATIVES', nodeColor: '#6e451e',
  },
  {
    productId: '0482', productCommunity: '229', x: 2000.0333251953125, y: 3919.25537109375, nodeSize: 57.672607421875, leamerCategory: '6', productName: 'MALT,ROASTED OR NOT (INCLUDING MALT FLOUR)', nodeColor: '#78b83d',
  },
  {
    productId: '6951', productCommunity: '999', x: 3305.513427734375, y: 5387.236083984375, nodeSize: 55.03759765625, leamerCategory: '8', productName: 'HAND TOOLS OF A KIND USED IN AGRICULTURE ETC', nodeColor: '#9c9a87',
  },
  {
    productId: '6953', productCommunity: '70', x: 782.9105834960938, y: 5391.80078125, nodeSize: 71.0860595703125, leamerCategory: '8', productName: 'OTHER TOOLS FOR USE IN THE HAND', nodeColor: '#ff707a',
  },
  {
    productId: '6960', productCommunity: '70', x: 1239.88427734375, y: 5817.7626953125, nodeSize: 65.616943359375, leamerCategory: '8', productName: 'CUTLERY', nodeColor: '#ff707a',
  },
  {
    productId: '7758', productCommunity: '10', x: 1236.1572265625, y: 5367.673583984375, nodeSize: 104.013916015625, leamerCategory: '9', productName: 'ELECTRO-THERMIC APPLIANCES,N.E.S.', nodeColor: '#4037ab',
  },
  {
    productId: '0483', productCommunity: '80', x: 5304.54638671875, y: 6013.639404296875, nodeSize: 60.03125, leamerCategory: '6', productName: 'MACARONI,SPAGHETTI AND SIMILAR PRODUCTS', nodeColor: '#ff0062',
  },
  {
    productId: '7271', productCommunity: '10', x: 2685.7489013671875, y: 5479.490966796875, nodeSize: 55.209228515625, leamerCategory: '9', productName: 'MACH.FOR WORKING OF CEREALS OR DRIED VEGETABLES', nodeColor: '#4037ab',
  },
  {
    productId: '0542', productCommunity: '229', x: 4984.8271484375, y: 2679.43798828125, nodeSize: 60.005859375, leamerCategory: '4', productName: 'BEANS,PEAS,LENTILS & OTHER LEGUMINOUS VEGETABLES', nodeColor: '#78b83d',
  },
  {
    productId: '8960', productCommunity: '70', x: -1730.0359497070312, y: 4185.733154296875, nodeSize: 80.5653076171875, leamerCategory: '7', productName: 'ART,COLLECTORS PIECES & ANTIQUES', nodeColor: '#ff707a',
  },
  {
    productId: '8830', productCommunity: '999', x: -2263.8057861328125, y: 3929.464111328125, nodeSize: 54.043212890625, leamerCategory: '9', productName: 'CINEMATOGRAPH FILM,EXPOSED-DEVELOPED,NEG.OR POS.', nodeColor: '#9c9a87',
  },
  {
    productId: '8731', productCommunity: '30', x: 2352.729736328125, y: 5442.985595703125, nodeSize: 57.04931640625, leamerCategory: '9', productName: 'GAS,LIQUID,ELECTRICITY METERS', nodeColor: '#299fff',
  },
  {
    productId: '7148', productCommunity: '20', x: -1919.0625610351562, y: 3997.5311279296875, nodeSize: 67.3756103515625, leamerCategory: '9', productName: 'GAS TURBINES,N.E.S.', nodeColor: '#0576a6',
  },
  {
    productId: '7133', productCommunity: '10', x: -385.53370666503906, y: 5856.546875, nodeSize: 60.820892333984375, leamerCategory: '9', productName: 'INT.COMBUSTION PISTON ENGINES FOR MARINE PROPULS.', nodeColor: '#4037ab',
  },
  {
    productId: '7126', productCommunity: '10', x: 377.3426971435547, y: 5336.5048828125, nodeSize: 56.549285888671875, leamerCategory: '9', productName: 'STEAM & OTHER VAPOUR POWER UNITS,STEAM ENGINES', nodeColor: '#4037ab',
  },
  {
    productId: '7924', productCommunity: '20', x: -2323.182373046875, y: 4119.1849365234375, nodeSize: 135.8056640625, leamerCategory: '9', productName: 'AIRCRAFT EXCEEDING AN UNLADEN WEIGHT OF 15000 KG', nodeColor: '#0576a6',
  },
  {
    productId: '7144', productCommunity: '20', x: -2106.189208984375, y: 4089.848876953125, nodeSize: 101.13330078125, leamerCategory: '9', productName: 'REACTION ENGINES', nodeColor: '#0576a6',
  },
  {
    productId: '0541', productCommunity: '229', x: 4821.494140625, y: 2445.27001953125, nodeSize: 58.4365234375, leamerCategory: '4', productName: 'POTATOES', nodeColor: '#78b83d',
  },
  {
    productId: '7163', productCommunity: '10', x: 457.41493225097656, y: 3655.578369140625, nodeSize: 50.039276123046875, leamerCategory: '9', productName: 'ROTARY CONVERTERS', nodeColor: '#4037ab',
  },
];
export default nodes;
