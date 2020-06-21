/*O editor da base de dados indica as seguintes normas editoriais:
	1. Os carros estão em dipostos por ordem cronológica de apresentação	
	2. As imagens dos carros têm 690 x 480 pixels, cada
*/
var hiperCarros = {
	
	//título da apresentação
	titulo:"20 Hipercarros Notáveis (2005-2020)",
	
	//texto introdutório à apresentação
	introd:[
		{
			subtitulo:"Supercarros: carros desportivos de alto desempenho ",
			texto:[
				"‘Supercarro’, ou ‘carro superdesportivo’ são classificações aplicadas a carros desportivos cujos desempenho e qualidade gerais são muito superiores, relativamente aos desempenho e qualidade médias dos carros desportivos de uma determinada época. Por exemplo, o ‘Collins English Dictionary’ define um ‘supercarro’, especificamente, como ‘um carro muito caro, muito rápido e muito potente’. Os supercarros são produzidos em quantidades excecionalmente reduzidas, muitas vezes sob encomenda e com muita fabricação e montagem manuais. É por isso que são tão exclusivos.",
				
				"O desempenho de um supercarro excede frequentemente os desempenhos dos carros desportivos de ‘gama alta’. Os supercarros costumam utilizar materiais pouco convencionais, como fibra de carbono, Kevlar e ligas metálicas com alumínio, magnésio, molibdénio ou titânio, para reduzir o peso e, simultaneamente, reforçar a estrutura. Por esta razão, costumam ser muito mais dispendiosos do que um carro desportivo de altas prestações, produzido em massa.",
				
				"Há várias reputadas marcas de supercarros, como a Bugatti, a Koenigsegg, a SSC, a Hennessey, a Pagani, a McLaren, a Lamborghini, a Ferrari, a Aston Martin, a VW/Porsche, etc., como também há fabricantes de carros mais comuns que também fabricam supercarros, como a Mercedes, ou a BMW. Além destes e daqueles, existem propostas de supercarros por parte de pequenos construtores ou modificadores, mais especializados e menos conhecidos do público em geral."
			]
		},
		{
			subtitulo:"Hipercarros: supercarros de altíssimo desempenho ",
			texto:[
				"Para além do ‘supercarro’, um outro conceito tem vindo a estabelecer-se no mesmo contexto dos superdesportivos: o ‘hipercarro’. Genericamente, um hipercarro é um supercarro que se destaca de entre os demais supercarros por razões extraordinárias de potência, de binário, de velocidade máxima ou de aceleração. Por exemplo, imaginemos um critério arbitrário para a categoria de supercarro, que estabeleça, potências superiores a 500 cv, binários superiores a 500 Nm, velocidades máximas superiores a 325 km/h e aceleração dos 0-100 km/h em menos do que 4 segundos. Assim, um critério, igualmente arbitrário, para a categoria de hipercarro, poderá estabelecer, potências superiores a 1000 cv, binários superiores a 1000 Nm, velocidades máximas superiores a 375 km/h e acelerações dos 0-100 km/h em menos de 3 segundos.",
				
				"Com aquele critério, foi elaborada a presente lista de 20 hipercarros, produzidos entre 2005 e 2020, onde se destacam os dois mais notáveis construtores de hipercarros, a Bugatti e a Koenigsegg, com 6 modelos cada. Os restantes 8 modelos da lista referem-se a outros construtores com mais baixa produção de hipercarros, como a SSC (2 modelos), a Hennessey (2 modelos), a Zenvo (1 modelo) e a McLaren (1 modelo), bem como a dois modificadores, como a 9ff (com um Porsche 911 GT3 R modificado) e a Mansory (com um Lamborghini Aventador LP700-4 modificado).",
				
				"Obviamente, não se trata de uma lista exaustiva, mas apenas uma escolha baseada em notoriedade. A despeito do número crescente das atuais propostas de hipercarros, com motorizações híbridas e até totalmente elétricas, os modelos da lista têm motorização, exclusivamente, de combustão interna, com apenas duas exceções que dispõem de motorização híbrida: o Koenigsegg Regera e o McLaren Speedtail."
			]
		},
	], //fim da propriedade 'introd'
	
	//coleção de modelos de hipercarros
	colecao:[
		//Bugatti Veyron - EB 16.4 (2005)
		{
			marcaModelo:"Bugatti Veyron",
			versao:"EB 16.4",
			texto:[
				"Em 2005, a Bugatti lançou o Veyron, um modelo que disponibilizando mais de 1000 CV de potência voltou a surpreender a indústria automóvel, graças a um motor W16 de 8.0 litros com quatro turbos e, uma vez mais, com tração integral. Desta feita, a produção teve lugar na Bugatti Automobiles, em Molsheim, França, onde Ettore Bugatti fundou a sua empresa. A velocidade de ponta anunciada superava já os 400 km/h, sendo o modelo de produção em série mais rápido durante um largo período. A sua produção terminou em 2015, sendo apenas em 2016 que a Bugatti anunciou o Chiron, substituto do Veyron.",
				
				"O Bugatti Veyron EB 16.4 é um hipercarro de motor central, desenhado e desenvolvido na Alemanha por Hartmut Warkuss, Jozef Kaban e Wolfgang Schreiber, do Grupo Volkswagen e fabricado, a partir de 2005, em Molsheim, na França, pela Bugatti Automobiles. A partir de 2010, a Bugatti começou a oferecer a possibilidade de personalizar cores interiores e exteriores do carro, através da aplicação ‘Veyron 16.4 Configurator’.",
				
				"Na versão original, o Veyron atingia a velocidade máxima de 407 km/h, sendo eleito o carro da década (2001-2010) pelo programa ‘Top Gear’ da BBC. Destaque-se o motor W16, de 8 litros e quatro turbos, o equivalente a dois V8 biturbo juntos de 4 litros cada (cada cilindro contém 4 válvulas, totalizando 64 válvulas) e o sistema de tração integral permanente, associado a uma rapidíssima caixa de velocidades que efetua mudanças em 150 milissegundos."
			],
			especs:{
				ano:2005, peso:1888, cil:7993, tipoMot:'W16 tetraturbo', 
				pot:1001, rotPot:6400, bin:1200, rotBin:4000, 
				vel:407, acel:2.8, comp:4462, larg:1998, alt:1159
			},
			imags:["M014.jpg", "M010.jpg", "M011.jpg", "M012.jpg", "M013.jpg"],
			links:[
				{
					conector:"Wikipedia PT: Bugatti Veyron",
					url:"https://pt.wikipedia.org/wiki/Bugatti_Veyron"
				},
				{
					conector:"Razão Automóvel: Bugatti Veyron faz 15 anos",
					url:"https://www.razaoautomovel.com/2020/04/bugatti-veyron-15-anos-origens"
				},
				{
					conector:"AUTO+: Os custos de ter um Bugatti Veyron",
					url:"https://automais.autosport.pt/noticias/chora-por-nao-ter-um-bugatti-veyron-que-faria-se-tivesse-de-pagar-quase-40-mil-euros-por-um-deposito-de-gasolina/"
				},
				{
					conector:"Youtube - National Geographic: Bugatti Veyron (dobrado em português)",
					url:"https://www.youtube.com/watch?v=pLNg2s-3538"
				},
				{
					conector:"Youtube - BBC: Bugatti Veyron Vs Euro Fighter Typhoon",
					url:"https://www.youtube.com/watch?v=pLNg2s-3538"
				},
				{
					conector:"Wikipedia EN: Bugatti Veyron",
					url:"https://en.wikipedia.org/wiki/Bugatti_Veyron#Bugatti_Veyron_16.4_Super_Sport,_World_Record_Edition_(2010%E2%80%932011)"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//Koenigsegg CCXR - Special Edition 4.8 V8 S (2007)
		{
			marcaModelo:"Koenigsegg CCXR",
			versao:"Special Edition 4.8 V8 S",
			texto:[
				"O Koenigsegg CCX foi criado pela construtora sueca ‘Koenigsegg Automotive AB’, visando o mercado americano dos hipercarros. O CCX sucede ao modelo CCR que foi homologado em 2004 como o 3.º carro de série mais rápido do mundo. O modelo CCXR foi, em 2009, considerado pela Forbes como um dos 10 mais belos carros de sempre.",
				
				"O CCXR Special Edition está equipado com um sofisticado motor V8 de 4,8 litros em alumínio com dois turbo-compressores e que pode utilizar, como combustível, tanto bio-etanol E85 ou E100, como gasolina de 98 octanas. É com o bio-etanol E100 que ultrapassa os 1000 cavalos de potência e uma velocidade máxima superior aos 400 km/h. No ano do seu lançamento, 2007, esta edição especial era o carro mais caro do mundo."
			],
			especs:{
				ano:2007, peso:1280, cil:4800, tipoMot: 'V8 biturbo', 
				pot:1004, rotPot:7000, bin:1361, rotBin:5600, 
				vel:409, acel:3.0,
				comp:4293, larg:1996, alt:1120
			},
			imags:["M020.jpg", "M021.jpg", "M022.jpg", "M023.jpg"],
			links:[
				{
					conector:"The Koenigsegg CCXR Edition (oficial)",
					url:"https://www.koenigsegg.com/car/ccxr-edition/"
				},
				{
					conector:"SupercarsNet: 2007 Koenigsegg CCXR Edition",
					url:"https://www.supercars.net/blog/2007-koenigsegg-ccxr-edition/"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
				{
					conector:"",
					url:""
				},
			]
		},
		//SSC Ultimate - Aero TT (2008)
		{
			marcaModelo:"SSC Ultimate",
			versao:"Aero TT",
			texto:[
				"O SSC Ultimate Aero Twin Turbo é produzido pela construtora americana ‘SSC North America’, anteriormente conhecido como ‘Shelby SuperCars’. Foi o primeiro carro de produção em série mais rápido do mundo e manteve esse título desde a data do seu lançamento, 2006, até 2010, quando foi batido, por razões regulamentares, pelo Bugatti Veyron 16.4 Grand Sport Vitesse. Retomou o título, ainda em 2010, passando-o ao seu sucessor, SSC Tuatara TT, em 2011.",
				
				"Os SSC Ultimate Aero TT são carros ‘brutais’ para ‘grandes pilotos’, pois são vendidos sem quaisquer ajudas eletrónicas, como sistemas de travagem anti-bloqueio (ABS) ou sistemas de controlo de tração ou de estabilidade (TCS, ESC, ESP). Segundo Jerod Shelby, o dono da SSC, a filosofia inicial de conceção deste carro foi construir um clássico de pilotagem: o seu condutor deve sentir o carro com os seus próprios sentidos e governá-lo com os seus próprios pés e mãos.",
				
				"No ano seguinte ao seu lançamento, foram realizadas uma série de afinações no motor V8 6.3 litros biturbo. A potência foi elevada para 1.287 cv no modelo de 2009, um ganho que permitiu atingir a velocidade máxima de 432 km/h. Além da atualização mecânica, o então superesportivo mais rápido do mundo recebeu também retoques aerodinâmicos, bem como a substituição de peças de alumínio por similares de fibra de carbono. O computador de bordo passou a fazer constantes diagnósticos do motor, evitando assim problemas de superaquecimento."
			],
			especs:{
				ano:2008, peso:1250, cil:6348, tipoMot:'V8 biturbo', 
				pot:1287, rotPot:6950, bin:1603, rotBin:6150, 
				vel:432, acel:2.9, comp:4474, larg:2101, alt:1092
			},
			imags:["M090.jpg", "M091.jpg", "M092.jpg", "M093.jpg"],
			links:[
				{
					conector:"Wikipedia EN: SSC Aero",
					url:"https://en.wikipedia.org/wiki/SSC_Aero"
				},
				{
					conector:"Youtube: Worlds Fastest Car - SSC Ultimate Aero TT (High Speed Testing)",
					url:"https://www.youtube.com/watch?v=1x4d02uEZws"
				},
				{
					conector:"Youtube: SSC Ultimate Aero Twin Turbo",
					url:"https://www.youtube.com/watch?v=Tf9epGwz9pE"
				},
				{
					conector:"Drivetribe: SSC Ultimate Aero TT - the forgotten king",
					url:"https://drivetribe.com/p/ssc-ultimate-aero-tt-the-forgotten-SawqVHYxTZWgixD_pRgslw?iid=DWuB0nY2RaiXiCeTv0kYZQ"
				},
				{
					conector:"AutoEsporte (BR): SSC Ultimate Aero ganha mais potência",
					url:"http://revistaautoesporte.globo.com/Revista/Autoesporte/0,,EMI19653-10142,00-SSC+ULTIMATE+AERO+GANHA+MAIS+POTENCIA.html"
				},
				{
					conector:"SSC: Site Oficial",
					url:"https://www.sscnorthamerica.com/"
				},
			]
		},
		//Zenvo ST1 - versão base (2009)
		{
			marcaModelo:"Zenvo ST1",
			versao:"versão base",
			texto:[
				"O Zenvo ST1 foi produzido, desde 2009, pela fabricante de carros Troels Vollertsen, dono da ‘Zenvo Automotive’ na ilha dinamarquesa de Zelândia. Foram fabricados penas 15 carros por encomenda, todos vendidos a clientes selecionados e aprovados.",
				
				"O Zenvo ST1 foi desenhado por Christian Brandt e Jesper Hermann e é o primeiro hipercarro dinamarquês, o único carro, até hoje, fabricado pela Zenvo. Apresenta algumas inovações tecnológicas e usa um motor V8 de 6,8 litros, turboalimentado e sobrealimentado e montado a mão. O chassi é de aço, o monocoque é de alumínio e a carroceria é em fibra de carbono. A maioria das componentes é originária de fabricantes alemães e americanos."
			],
			especs:{
				ano:2009, peso:1688, cil:6797, tipoMot:'V8 turbo + compressão', 
				pot:1104, rotPot:6900, bin:1430, rotBin:4500, 
				vel:375, acel:3.0, comp:4665, larg:2041, alt:1198
			},
			imags:["M060.jpg", "M061.jpg", "M062.jpg", "M063.jpg"],
			links:[
				{
					conector:"Wikipedia (EN): Zenvo ST1",
					url:"https://en.wikipedia.org/wiki/Zenvo_ST1"
				},
				{
					conector:"AutoCar: Zenvo ST1 review",
					url:""
				},
				{
					conector:"Zenvo: site oficial",
					url:"https://zenvoautomotive.com/"
				},
			]
		},
		//9ff-Porsche - GT9R (2009)
		{
			marcaModelo:"9ff-Porsche",
			versao:"GT9R",
			texto:[
				"Depois de se formar em engenhearia pela Universidade de Hamburgo, o alemão Jan Fatthauer trabalhou na Brabus e na Ruf, de onde saiu para criar sua própria empresa para fazer exatamente o que faz até hoje: supercarros baseados no Porsche 911. Assim, nasceu a sua empresa de tuning ‘9ff’, que começou timidamente com kits de preparação para o 911, mas despontou para o sucesso em 2004, quando seu 911 9F-T6 se tornou o Porsche mais rápido no circuito de Nardò, atingindo 372 km/h.",
				
				"O modelo 9ff GT9R é construído através de uma série de modificações e reconstruções do modelo Porsche 911 GT3 R (tipo 997). O motor de tipo boxer de 6 cilindros, de posicionamento traseiro no modelo original, foi completamente reconstruído e passa a ter posicionamento central no 9ff GT9R. Para efeitos de libertação de peso, o interior do carro foi simplificado e foram retirados todos os elementos de conforto considerados dispensáveis. Foram implementadas duas configurações de motor, uma com 738 cavalos e outra com 1120 cavalos. Dos 150 caros fabricados, apenas 20 receberam esta configuração de hipercarro que permitiu atingir a velocidade máxima de 412 km/h.",
				
				"A frente do 9ff GT9R é idêntica ao Porsche 911 GT3 R (tipo 997), mas todas as semelhanças acabam aqui, à excepção dos farolins, que são retirados do mesmo automóvel. A carroçaria, feita em fibra de carbono e Kevlar numa única peça, é montada num chassis tubular, com rollcage integrada e barras nas portas, para uma maior segurança. O peso situa-se nos 1240 kg. As jantes forjadas são tripartidas de 19”, na frente de 8,5×19” e na traseira 11,5×19”. Os pneus foram desenvolvidos especificamente para este automóvel pela Continental, para conseguir aguentar as velocidades deste GT9. O interior está equipado com baquets da Recaro de mesma cor de todo o resto do interior. O 9ff GT9 só tem dois lugares, pois o motor está situado na traseira destes. Todo o interior poderia ser construído a pedido do cliente e vem equipado com painel de instrumentos do Porsche Cayman/Boxster."
			],
			especs:{
				ano:2009, peso:1346, cil:4000, tipoMot:'F6 biturbo', 
				pot:1120, rotPot:7850, bin:1518, rotBin:5970, 
				vel:412, acel:3.0, comp:4733, larg:1860, alt:1180
			},
			imags:["M070.jpg", "M071.jpg", "M072.jpg", "M073.jpg"],
			links:[
				{
					conector:"Wikipedia (EN): 9ff GT9",
					url:"https://en.wikipedia.org/wiki/9ff_GT9"
				},
				{
					conector:"Motor24: 9ff GT9, o Porsche 911 GT1 da era moderna",
					url:"https://www.motor24.pt/sites/jornal-dos-classicos/9ff-gt9-o-porsche-911-gt1-da-era-moderna/661127/"
				},
				{
					conector:"FlatOut (BR): 9ff GT9: a história dos Porsche 911 mais rápidos do planeta",
					url:"https://www.flatout.com.br/9ff-gt9-historia-dos-porsche-911-mais-rapidos-do-planeta/"
				},
				{
					conector:"Youtube: 9ff GT9-R in detail by Jan Fatthauer: 1120 HP and first example to customer",
					url:"https://www.youtube.com/watch?v=EEaWr74zAEo"
				},
				{
					conector:"Youtube: 9ff GT9R on Public Road",
					url:"https://www.youtube.com/watch?v=Gr_05eb1ZR4"
				},
				{
					conector:"9ff: site oficial",
					url:"https://www.9ff.com/"
				},
			]
		},
		//Hennessey Venom - GT (2010)
		{
			marcaModelo:"Hennessey Venom",
			versao:"GT",
			texto:[
				"O Hennessey Venom GT, apresentado em 2010, é fabricado pela firma americana de tuning ‘Hennessey Performance Engineering’. O Venom GT usa um chassi altamente modificado da Lotus com diversas componentes do Lotus Exige e Elise, e um motor V8 biturbo de 6 litros da Chevrolet. O chassis e a carroçaria são de fibra de carbono e tem partes aerodinâmicas ativas, utilizadas pela primeira vez pela empresa, que lhe conferem um coeficiente aerodinâmico de 0.33.",
				
				"Em 2013, o Venom GT bateu um novo recorde do Guinness Book, de aceleração 0-300 km/h, em 13,63 segundos. Em 2014, numa pista de testes, o Venom atingiu a velocidade de 435 km/h, mais 4 km/h do que o carro de série mais rápido do mundo, à data, o Bugatti Veyron Super Sport. Porém, tal velocidade não foi homologada pelo Guinness, por razões regulamentares: não fez o teste nos dois sentidos (a favor do vento e contra o vento) e não tinha ainda vendido um mínimo de 30 unidades para ser homologado como carro de série. "
			],
			especs:{
				ano:2010, peso:1220, cil:6162, tipoMot:'V8 biturbo', 
				pot:1030, rotPot:6500, bin:1396, rotBin:4200, 
				vel:418, acel:2.6, comp:4655, larg:1960, alt:1135
			},
			imags:["M040.jpg", "M041.jpg", "M042.jpg", "M043.jpg"],
			links:[
				{
					conector:"Hennessey Venom GT: site oficial",
					url:"http://hennesseyperformance.com/vehicles/hennessey/venom-gt/"
				},
				{
					conector:"Wikipedia: Hennessey Venom GT",
					url:"https://en.wikipedia.org/wiki/Hennessey_Venom_GT"
				},
				{
					conector:"Youtube: World's Fastest: 270.49 mph Hennessey Venom GTYoutube",
					url:"https://www.youtube.com/watch?v=gWAavCjVQvM"
				},
				{
					conector:"Youtube: Hennessey Venom GT: The World's Fastest Tuned Car - /TUNED",
					url:"https://www.youtube.com/watch?v=8hDDBN_pIUQ"
				},
				{
					conector:"Youtube: 2012 Hennessey Venom GT - Jay Leno's Garage",
					url:"https://www.youtube.com/watch?v=GQ9kZRHFqxM"
				},
			]
		},
		//Bugatti Veyron - EB 16.4 Grand Sport Vitesse (2010)
		{
			marcaModelo:"Bugatti Veyron",
			versao:"EB 16.4 Grand Sport Vitesse",
			texto:[
				"O Bugatti Veyron 16.4 Grand Sport Vitesse é um desenvolvimento do já anteriormente melhorado roadster Bugatti Veyron EB 16.4, Grand Sport, desta vez, com o motor do Super Sport. O chassis também foi modificado para suportar o aumento da potência do motor e para melhorar a aerodinâmica do veículo na estrada. O seu desempenho não fica longe das performances do Super Sport, isto é: aceleração dos 0 aos 100 km/h em 2,5 segundos, dos 0 aos 200 km/h em 6,7 segundos e dos 0 aos 300 km/h em 14,6 segundos.",
				
				"O presidente da Bugatti, Wolfgang Dürheimer, revelou que o sucesso do Super Sport o convenceu a lançar uma versão mais veloz da variante roadster do Veyron e que, uma vez mais, os engenheiros conseguiram demonstrar que a Bugatti é capaz de redefinir os limites daquilo que é tecnicamente possível, com o intuito de proporcionar uma experiência extraordinária de condução.",
				
				"Em termos simples, este Grand Sport Vitesse é um Veyron Grand Sport conversível que recebeu o tratamento Super Sport. Além dos 1.200 cavalos a 6.400 rpm, o seu motor W16 8.0 entrega hercúleos 1450 Nm de torque entre 3.000 e 5.000 rpm - cortesia dos mesmos dois grandes turbos e intercoolers do Super Sport e - como são necessários mais combustível e mais ar para produzir mais torque - a mesma configuração de bomba quádrupla. O resultado é uma máquina com muito apetite: o engenheiro da Bugatti Jens Schulenburg afirma que, em aceleração total, o motor do Vitesse vai consumir mais ar numa hora do que um humano consome num mês, apesar desta estatística ser puramente académica, pois em aceleração total o W16 de 1.200 cv irá engolir um tanque completo de gasolina de 100 litros em apenas 8 minutos."
			],
			especs:{
				ano:2010, peso:1990, cil:7993, tipoMot:'W16 tetraturbo', 
				pot:1184, rotPot:6400, bin:1450, rotBin:4000, 
				vel:410, acel:2.6, comp:4462, larg:1998, alt:1159
			},
			imags:["M100.jpg", "M101.jpg", "M102.jpg", "M103.jpg"],
			links:[
				{
					conector:"Bugatti Veyron 16.4 Grand Sport Vitesse: site oficial",
					url:"https://www.bugatti.com/models/veyron-models/veyron-164-grand-sport-vitesse/"
				},
				{
					conector:"RazãoAutomóvel: Conduzimos o Bugatti Veyron Grand Sport Vitesse. O dia em que alcançámos 345 km/h",
					url:"https://www.razaoautomovel.com/2020/04/bugatti-veyron-grand-sport-vitesse-teste"
				},
				{
					conector:"AutoEsporte: Como o Veyron Grand Sport Vitesse criou um recorde",
					url:"https://revistaautoesporte.globo.com/Noticias/noticia/2013/08/como-o-veyron-grand-sport-vitesse-criou-um-recorde.html"
				},
				{
					conector:"Wikipedia EN: Bugatti Veyron",
					url:"https://en.wikipedia.org/wiki/Bugatti_Veyron#Bugatti_Veyron_16.4_Super_Sport,_World_Record_Edition_(2010%E2%80%932011)"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//SSC Tuatara - 6.9L V8 TT (2011)
		{
			marcaModelo:"SSC Tuatara",
			versao:"6.9L V8 TT",
			texto:[
				"O SSC Tuatara 6.9L V8 Twin Turbo é produzido pela construtora americana ‘SSC North America’, anteriormente conhecido como ‘Shelby SuperCars’. É o sucessor do ‘brutal’ SSC Ultimate Aero TT, que também lhe herdou o record de velocidade para carros de série, mas desenvolvido segundo uma filosofia conceptual diversa: o SSC Tuatara TT teria maiores performances mas seria um carro futurista e mais ‘civilizado’, capaz de ser confortavelmente conduzido dentro das cidades. Essas melhores performances seriam conseguidas graças à exaustiva utilização de componentes muito leves, em alumínio e fibra de carbono e simplificação do habitáculo.",
				
				"O SSC Tuatara TT foi equipado com o motor mais potente do seu antecessor, um V8 de 6.9 litros, profundamente remodelado, chegando a atingir, num teste específico, uma potência de 1700 cavalos e uma velocidade de ponta de 444 km/h. Com o Tuatara, a SSC North America acredita que tem entrada garantida no cincunscrito grupo das 300 mph (483 km/h), sendo conhecida a intenção da marca em ultrapassar o recorde de velocidade fixado pela Bugatti no ano passado: 490.84 km/h."
			],
			especs:{
				ano:2011, peso:1247, cil:6942, tipoMot: 'V8 biturbo', 
				pot:1320, rotPot:6800, bin:1610, rotBin:5000, 
				vel:435, acel:2.6,
				comp:4430, larg:1991, alt:1092
			},
			imags:["M120.jpg", "M121.jpg", "M122.jpg", "M123.jpg"],
			links:[
				{
					conector:"SSC Tuatara: site oficial",
					url:"https://www.sscnorthamerica.com/tuatara"
				},
				{
					conector:"MotorOne: 2020 SSC Tuatara Debuts With 1,750 HP, Wild Looks",
					url:"https://www.motor1.com/news/397523/2020-scc-tuatara-hypercar-debuts/"
				},
				{
					conector:"Youtube: SSC Tuatara",
					url:"https://www.youtube.com/watch?v=A4w5gRltBeM"
				},
				{
					conector:"SSC: Site Oficial",
					url:"https://www.sscnorthamerica.com/"
				},
			]
		},
		//Koenigsegg Agera - R 5.0 V8 (2011)
		{
			marcaModelo:"Koenigsegg Agera",
			versao:"R 5.0 V8",
			texto:[
				"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014). ",
				
				"O Agera R foi introduzido em março de 2011 no Salão do Automóvel de Geneva. Vai de 0-100 km/h em 2,8 segundos e teoricamente atinge uma velocidade superior a 440 km/h, esta ainda não testada, já que, uma pista reta longa o suficiente para conseguir tal feito é pista de Ehra-Lessien, com retas de 9km de comprimento, mas que pertence ao grupo Volkswagen. A versão 2013 do Agera R estreou no Salão do Automóvel de Geneva em 2012. As novidades incluem rodas de fibra de carbono, aerodinâmica aprimorada e atualizações do motor, permitindo agora a potência de 1.156 cavalos. A nova tecnologia Flex Fuel Sensor da Koenigsegg faz com que a ECU responda a diferentes qualidades de combustível e teor de álcool, reduzindo os níveis de energia, como forma de proteger o motor.",
				
				"O Agera R pode utilizar, como combustível, tanto bio-etanol E85 ou E100, como gasolina de 98 octanas. É com o bio-etanol que atinge os 1056 cavalos. A especial configuração adaptativa da asa traseira, confere-lhe características aerodinâmicas revolucionárias que permitiram a homologação de uma velocidade de 430 km/h. Destaca-se também o preciso sistema de travagem, demonstrado pelo piloto de testes Robert Serwanski, que travou a fundo, de 300 até 0 km/h, em linha reta, sem precisar de colocar as mãos no volante."
			],
			especs:{
				ano:2011, peso:1415, cil:5032, tipoMot:'V8 biturbo', 
				pot:1156, rotPot:7100, bin:1523, rotBin:4100, 
				vel:430, acel:3.0, comp:4293, larg:1996, alt:1120
			},
			imags:["M080.jpg", "M081.jpg", "M082.jpg", "M083.jpg"],
			links:[
				{
					conector:"Agera R: site oficial",
					url:"https://www.koenigsegg.com/car/agera-r/"
				},
				{
					conector:"Youtube: Here's Why The Agera RS Is The Best Modern Hypercar",
					url:"https://www.youtube.com/watch?v=YfyWBB1Z35c"
				},
				{
					conector:"Yotube: Koenigsegg Agera RS 0-400-0",
					url:"https://www.youtube.com/watch?v=R1g07RpTPFE"
				},
				{
					conector:"Yotube: Koenigsegg Agera RS hits 284 mph - VBOX verified",
					url:"https://www.youtube.com/watch?v=xj4gar5dKAU"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
				{
					conector:"Wikipedia (EN) Koenigsegg Agera",
					url:"https://en.wikipedia.org/wiki/Koenigsegg_Agera"
				},
			]
		},
		//Koenigsegg Agera - S 5.0 V8 Hundra (2013)
		{
			marcaModelo:"Koenigsegg Agera",
			versao:"S 5.0 V8 Hundra",
			texto:[
				"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014).",
				
				"O Agera S foi desenvolvido para mercados com carência de bio-etanol, sendo otimizado para rodar com gasolina, produzindo 1.016 cavalos, contra 960 do Agera R com o mesmo combustível. Uma versão especial, com faixas de ouro 24 quilates, comemorativa do centésimo Koenigsegg vendido, Agera S Hundra (‘Hundra’ significa ‘Cem’ em Sueco), é ainda mais potente, produzindo 1.028 cavalos com gasolina (com bio-etanol a potência eleva-se a 1.200 cavalos mas não é sustentável)."
			],
			especs:{
				ano:2013, peso:1415, cil:5032, tipoMot:'V8 biturbo', 
				pot:1028, rotPot:7100, bin:1378, rotBin:4100, 
				vel:401, acel:2.9, comp:4293, larg:1996, alt:1120
			},
			imags:["M030.jpg", "M031.jpg", "M032.jpg", "M033.jpg"],
			links:[
				{
					conector:"Agera S: site oficial",
					url:"https://www.koenigsegg.com/car/agera-s/"
				},
				{
					conector:"Supercars: 2013 Koenigsegg Agera S",
					url:"https://www.supercars.net/blog/2013-koenigsegg-agera-s/"
				},
				{
					conector:"Youtube: Christian von Koenigsegg explains the Agera S in Malaysia",
					url:"https://www.youtube.com/watch?v=cFWKzeRObS0"
				},
				{
					conector:"Youtube: Christmas Special! Koenigsegg Agera S In Action!",
					url:"https://www.youtube.com/watch?v=sJZWi20I01k"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
				{
					conector:"Wikipedia (EN) Koenigsegg Agera",
					url:"https://en.wikipedia.org/wiki/Koenigsegg_Agera"
				},
			]
		},
		//Koenigsegg Agera - One:1 5.0 V8 (2014)
		{
			marcaModelo:"Koenigsegg Agera",
			versao:"One:1 5.0 V8",
			texto:[
				"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014). ",
				
				"O Agera One:1 deve o seu nome à relação 1:1 entre a potência (1.360 cv) e o peso (1.360 kg). Porém, esta relação refere-se à sua configuração para pista, otimizada para uso de bio-etanol e com sacrifício de atributos de ‘carro de rua’, como, por exemplo, a entrada de ar no teto removível que, a par da redução do compartimento frontal por razões aerodinâmicas, impede guardar o teto nesse compartimento. Uma versão mais conforme ao uso corrente em estrada, otimizada para gasolina, pesa 1435 kg e fica-se pelos 1100 cavalos.",
				
				"Os computadores da Koenigsegg mostraram que o carro será o mais rápido nas acelerações de 0 a 200 km/h, de 0 a 300 km/h e de 0 a 400 km/h. Na verdade, a empresa sueca menciona que bater a marca dos 400 km/h vai demorar espantosos 20 segundos, o que faria o carro ser 25 segundos mais rápido que o poderoso Veyron. A velocidade máxima será de pelo menos 450 km/h, que é consideravelmente mais do que os 415 km/h do Bugatti Veyron Super Sport World Record Edition. Não podemos deixar de mencionar que o Veyron WRE pode fazer 431 km/h, mas a versão de produção foi vendida com um limitador  eletrónicode velocidade, o que pode acontecer também com o One:1."
			],
			especs:{
				ano:2014, peso:1360, cil:5032, tipoMot:'V8 biturbo', 
				pot:1360, rotPot:7100, bin:1491, rotBin:4100, 
				vel:420, acel:3.0, comp:4293, larg:1996, alt:1120
			},
			imags:["M050.jpg", "M051.jpg", "M052.jpg", "M053.jpg"],
			links:[
				{
					conector:"Agera One:1: site oficial",
					url:"https://www.koenigsegg.com/car/one1/"
				},
				{
					conector:"RazãoAutomóvel: O Koenigsegg One:1 é o primeiro «Megacarro»",
					url:"https://www.razaoautomovel.com/2014/03/koenigsegg-one1-genebra"
				},
				{
					conector:"Youtube: #00 Koenigsegg One:1 - In-depth Exterior and Interior tour.",
					url:"https://www.youtube.com/watch?v=GUL98KZGhKo"
				},
				{
					conector:"Youtube: Koenigsegg apresenta o carro mais rápido do mundo",
					url:"https://www.youtube.com/watch?v=RnKRwwDI5vE"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
				{
					conector:"El País BR: O carro mais veloz do mundo",
					url:"https://brasil.elpais.com/brasil/2014/05/12/deportes/1399895099_330921.html"
				},
				{
					conector:"Wikipedia (EN) Koenigsegg Agera",
					url:"https://en.wikipedia.org/wiki/Koenigsegg_Agera"
				},
			]
		},
		//Bugatti Veyron - W16 Super Sport (2014)
		{
			marcaModelo:"Bugatti Veyron",
			versao:"W16 Super Sport",
			texto:[
				"O Bugatti Veyron 8.0 litre W16 Super Sport é o topo de linha da família Veyron. O motor 8.0 de 16 cilindros com quatro turbos foi atualizado para gerar 1.200 cv de potência e 1500 Nm de binário. Com isso, o Super Sport apresentou um novo recorde de velocidade de 431 km/h. Por razões de segurança e, mais especificamente, para proteger os pneus, a velocidade máxima do modelo de produção será limitada a 415 km/h.",
				
				"O carro tem outras novidades como caixa de velocidades de sete velocidades, a embraiagem dupla e uma nova suspensão. Para reduzir o peso, o carro é feito em nova estrutura de fibra de carbono, o que inclui partes internas do carro. Algumas modificações exteriores ajudam a distingui-lo do Veyron padrão: pintura em dois tons, preto e laranja, dois ductos integrados no teto, novas entradas de ar frontais, compartimentam do motor, para-choque traseiro com difusor duplo e um novo sistema de escape. O interior do Super Sport também foi aprimorado com materiais de acabamento exclusivo e logotipos especiais."
			],
			especs:{
				ano:2014, peso:1838, cil:7993, tipoMot:'W16 tetraturbo', 
				pot:1200, rotPot:6400, bin:1500, rotBin:4000, 
				vel:431, acel:2.6, comp:4462, larg:1998, alt:1159
			},
			imags:["M110.jpg", "M111.jpg", "M112.jpg", "M113.jpg"],
			links:[
				{
					conector:"Youtube (BBC/TopGear): Bugatti Super Sport Speed Test",
					url:"https://www.youtube.com/watch?v=LSFX9vrwJf8"
				},
				{
					conector:"Youtube: Bugatti Veyron Super Sport WRE - Onboard Ride and Discussion",
					url:"https://www.youtube.com/watch?v=jn4-wsJIdUw"
				},
				{
					conector:"Youtube: BUGATTI Veyron 16.4 SuperSport World Record",
					url:"https://www.youtube.com/watch?v=rvn4lHrr6AQ"
				},
				{
					conector:"Wikipedia EN: Bugatti Veyron",
					url:"https://en.wikipedia.org/wiki/Bugatti_Veyron#Bugatti_Veyron_16.4_Super_Sport,_World_Record_Edition_(2010%E2%80%932011)"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//Mansory-Lamborghini - Carbonado GT (2014)
		{
			marcaModelo:"Mansory-Lamborghini",
			versao:"Carbonado GT",
			texto:[
				"O Mansory Carbonado GT é construído a partir do Lamborghini Aventador LP700-4, pela empresa modificadora de carros de luxo ‘Mansory’, em Brand, Alemanha. Este hipercarro resultou de uma completa reformulação do supercarro italiano, desde logo, no impacto visual, pois todos os painéis originais foram substituídos por uma trama especial de fibra de carbono, semelhante à usada nos aviões de caça furtivos.",
				
				"São muitas mais as alterações ao original: para-choques, entradas de ar, asas e spoilers, suspensões, eixos e rodas, coletores e ponteiras de escape, tampa do motor e saias laterais para dirigir o ar para dentro do motor, etc., e, muito especialmente, esse motor V12 de 6,5 litros totalmente reformulado, com dois maciços turbocompressores, capaz de sustentar a potência de 1600 cavalos e uma inultrapassável aceleração 0-100 km/h em 2.3 segundos."
			],
			especs:{
				ano:2014, peso:1555, cil:6498, tipoMot:'V12 biturbo', 
				pot:1600, rotPot:6000, bin:1200, rotBin:6000, 
				vel:375, acel:2.3, comp:4780, larg:2030, alt:1136
			},
			imags:["M130.jpg", "M131.jpg", "M132.jpg", "M133.jpg"],
			links:[
				{
					conector:"Mansory Carbonado GT: site oficial",
					url:"https://www.mansory.com/car/carbonado-gt#1"
				},
				{
					conector:"Autoesporte: Mansory faz Aventador de 1.600 cv",
					url:"https://revistaautoesporte.globo.com/Noticias/noticia/2014/03/mansory-faz-aventador-de-1600-cv.html"
				},
				{
					conector:"TopSpeed: 2014 Lamborghini Aventador Carbonado GT By Mansory ",
					url:"https://www.topspeed.com/cars/lamborghini/2014-lamborghini-aventador-carbonado-gt-by-mansory-ar162616.html"
				},
				{
					conector:"MotorOne: Mansory Carbonado GT is a twin-turbo Lamborghini Aventador with 1600 HP",
					url:"https://www.motor1.com/news/45078/mansory-carbonado-gt-is-a-twin-turbo-lamborghini-aventador-with-1600-hp/"
				},
				{
					conector:"Youtube: FIRST LOOK: 1600hp Mansory Carbonado GT Aventador at Geneva 2014",
					url:"https://www.youtube.com/watch?v=lSJEWlJ4lFA"
				},
				{
					conector:"Youtube: 2014 Lamborghini Aventador Carbonado GT Stealth Edition by Mansory - Exterior, Interior Walkaround",
					url:"https://www.youtube.com/watch?v=5xRpqnhq1OU"
				},
			]
		},
		//Koenigsegg Regera - versão base (2016)
		{
			marcaModelo:"Koenigsegg Regera",
			versao:"versão base",
			texto:[
				"O Koenigsegg Regera foi apresentado em 2015 pela construtora sueca ‘Koenigsegg Automotive AB’, para ser produzido a partir de 2016, segundo Christian von Koenigsegg, como o hipercarro mais requintado e avançado do mundo. De facto, este carro impressiona, tanto pelo altíssimo nível de design automóvel como pela extensa lista de inovações tecnológicas.",
				
				"Desde logo, a combinação de um motor V8 twin-turbo de 5,0 litros com três motores elétricos Yasa, conjugando-se tudo numa potência máxima de 1500 cavalos às 7000 rpm. Porém essa conjunção permite sustentar potências da ordem dos 1300 cavalos em rotações relativamente mais baixas, de 5000 rpm. Em suma, as novidades tecnológicas aplicadas no Regera, fazem dele, segundo von Koenigsegg, o primeiro carro ‘totalmente robotizado’.",
				
				"Não obstante o potente motor 5.0 V8 biturbo a gasolina, quem o eleva a potência até aos 1.500 cv são os três motores eléctricos, que associam a sua potência ao motor de combustão, um em cada roda traseira com 245 cv e um terceiro acoplado ao V8, com 218 cv, que tanto entrega potência como gera energia. Como se tudo isto não bastasse, em matéria de sofisticação, a marca sueca usa ainda os três motores eléctricos, alimentados através de uma pequena bateria, para não necessitar de caixa de velocidades, recorrendo apenas a uma mudança, uma espécie de transmissão directa que dispensa a caixa e a embraiagem convencional, tornando a complexa unidade motriz mais eficiente. Este complexo sistema, denominado Koenigsegg Direct Drive, foi concebido e produzido pelo fabricante sueco.",
				
				"Numa fase em que todos os apaixonados por este tipo de veículos se ‘babavam’ só de pensar no Regera, eis que a própria Koenigsegg apresentou um vídeo em que consegue bater o Bugatti Chiron nos 0-400-0 km/h. A capacidade de aceleração é brutal e a facilidade com que chega aos 400 km/h é impressionante. Tanto quanto a capacidade de travagem que o traz de novo até aos 0 km/h. Porém há um pormenor perturbador para os que adoram o imponente roncar dos superdesportivos. Na gravação, é possível ouvir um ruído tranquilo do motor V8 biturbo com 1.115 cv! Como a única mudança que o Regera possui é bastante longa, o equivalente a uma 6.ª ou 7.ª, são os motores eléctricos que ajudam o V8 a ganhar binário para a fase inicial do arranque. Isto significa que o roncar puro e duro que alguns esperariam ouvir, de um V8 biturbo a subir de regime até às 7.800 rpm sempre que se passava de caixa, simplesmente não existe. Aos ouvidos dos fanáticos do asfalto, parece-lhes um motor sem garra nem alma. Enganam-se. Sinal dos novos tempos."
			],
			especs:{
				ano:2016, peso:1628, cil:5065, tipoMot:'V8 biturbo + 3 Elec.', 
				pot:1500, rotPot:7000, bin:1565, rotBin:4100, 
				vel:410, acel:2.7, comp:4560, larg:2050, alt:1100
			},
			imags:["M140.jpg", "M141.jpg", "M142.jpg", "M144.jpg", "M145.jpg", "M143.jpg"],
			links:[
				{
					conector:"TopGear: World exclusive drive: Koenigsegg Regera",
					url:"https://www.topgear.com/car-news/big-reads/world-exclusive-drive-koenigsegg-regera"
				},
				{
					conector:"Youtube: Koenigsegg Regera Review - In Depth & Flat Out!",
					url:"https://www.youtube.com/watch?v=t4cPtI8p0v0"
				},
				{
					conector:"Youtube: 1500HP Koenigsegg Regera - Brutal SOUNDS & Launch Control BURNOUTS!",
					url:"https://www.youtube.com/watch?v=RBchGmoel6c"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
			]
		},
		//Bugatti Chiron - versão base (2016)
		{
			marcaModelo:"Bugatti Chiron",
			versao:"versão base",
			texto:[
				"O Bugatti Chiron foi a grande estrela do Salão Automóvel de Genebra, que decorreu entre fevereiro e março de 2016. Sucessor do Bugatti Veyron, o Chiron foi batizado em homenagem ao piloto monegasco Louis Chiron, que correu pela Bugatti nas décadas de 20 e 30 e foi o piloto com maior sucesso da Bugatti. ",
				
				"Depois de muitos rumores quanto à hipótese híbrida para a motorização do Chiron, a Bugatti optou pela mesma receita do Veyron, ou seja, um motor W16 de 8.0 litros, capaz de debitar uns mais impressionantes 1500 CV e 1600 Nm de binário. Com estes valores conseguia acelerar dos zero aos 100 km/h em apenas 2,4 segundos, cruzando os 200 km/h em 6,1 segundos e os 300 km/h em 13,1 segundos. No entanto, a velocidade máxima anunciada (e conseguida em circunstâncias muito especiais), de 440 km/h, é uma meta que os pneus estão a ter dificuldade em alcançar.",
				
				"Segundo a marca, o Bugatti Chiron é o carro mais avançado, mais potente, mais rápido, mais luxuoso e mais exclusivo do mundo. De facto, este hipercarro tem 1.500 cavalos, atinge velocidades perto dos 440 km/h e acelera dos zero aos 100 km/h em 2,5 segundos. E custa 2,6 milhões de dólares à saída da fábrica. A potência do Chiron é obtida com um robusto motor de 8 litros, com 16 cilindros combinado com uma transmissão automatizada de dupla embraiagem e sete velocidades. Grande novidade é a estreia de um sofisticado chassis adaptativo com cinco programas de atuação adaptados a diferentes circunstâncias de piso e de velocidade."
			],
			especs:{
				ano:2016, peso:1995, cil:7993, tipoMot:'W16 tetraturbo', 
				pot:1500, rotPot:6000, bin:1600, rotBin:4000, 
				vel:438, acel:2.5, comp:4544, larg:2038, alt:1212
			},
			imags:["M150.jpg", "M151.jpg", "M152.jpg", "M153.jpg", "M154.jpg", "M155.jpg", "M156.jpg"],
			links:[
				{
					conector:"Bugatti Chiron: site oficial",
					url:"https://www.bugatti.com/models/chiron-models/"
				},
				{
					conector:"Bugatti Chiron: Breaking new dimensions (oficial)",
					url:"https://www.bugatti.com/chiron/"
				},
				{
					conector:"Razão Automóvel: Os números que definem o Bugatti Chiron",
					url:"https://www.razaoautomovel.com/2017/04/bugatti-chiron-numeros"
				},
				{
					conector:"Wikipedia EN: Bugatti Chiron",
					url:"https://en.wikipedia.org/wiki/Bugatti_Chiron"
				},
				{
					conector:"Youtube: BUGATTI Chiron 0-400-0 km/h in 42 seconds – A WORLD RECORD",
					url:"https://www.youtube.com/watch?v=PkkV1vLHUvQ"
				},
				{
					conector:"Youtube: 490+ kilometers per hour | Bugatti Chiron | Speed record",
					url:"https://www.youtube.com/watch?v=GMYpOit3t4Y&t=2s"
				},
				{
					conector:"Youtube: Bugatti Chiron Review by Jeremy Clarkson",
					url:"https://www.youtube.com/watch?v=N1n1kTmJH8A"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//Hennessey Venom - F5 (2019)
		{
			marcaModelo:"Hennessey Venom",
			versao:"F5",
			texto:[
				"O Hennessey Venom F5, do pequeno fabricante norte-americano Hennessey Performance Engineering, é, desde já, um dos candidatos naturais à conquista de recordes em Nürburgring. Depois da apresentação das linhas exteriores no último SEMA, em Las Vegas, o construtor dá agora a conhecer as primeiras imagens do interior de um automóvel do qual só deverão ser fabricadas 24 unidades, cada uma com um preço base de 1,3 milhões de euros.",

				"Depois das óptimas reacções por parte do público, quando foi divulgada a carroçaria do modelo, a Hennessey desvenda um habitáculo no qual se destacam, desde logo, as aplicações em fibra de carbono e os revestimentos que parecem ser em Alcantara. Com o volante a cotar-se como um dos elementos centrais em termos de interesse, não apenas pela configuração particularmente desportiva (cortado tanto no topo como na base), como também por integrar uma série de botões similares aos utilizados pelos F1, que servem desde para indicar a mudança de direcção, como para controlar o rádio, luzes, selector da caixa de velocidade, Start, buzina e até um invulgar botão vermelho, destinado a garantir um aumento momentâneo da potência disponível.",

				"Curioso será também descobrir se este volante conta, efectivamente, com mostrador luminoso de subida de rotações, à imagem do que acontece com os volante dos F1, ou se, pelo contrário, se trata apenas de uma ilusão de óptica. No entanto e segundo as imagens agora divulgadas, existirão duas variantes deste mesmo volante, uma das quais apresentando ao centro um ecrã digital, que serve também de painel de instrumentos. E que, neste caso, poderá ser ou não táctil. Sendo que, na segunda versão, o painel já surge integrado no tablier. Presentes estão também as patilhas para comandar a caixa de velocidades.",
				
				"Em termos mecânicos, o Venom F5 monta, sob o capot traseiro, um V8 com 7,4 litros totalmente construído em alumínio e equipado com dois turbos, a anunciar qualquer coisa como 1.600 cv de potência e 1.760 Nm de binário. Potência enviada apenas para as rodas traseiras, equipadas com uns pneus Michelin Pilot Cup 2, através de uma caixa automática de sete velocidades. Para os mais destemidos, existe a possibilidade de optar por uma caixa manual, ainda que com a garantia de que vão ter de debater-se com a acção do controlo de tracção, com base no GPS, pelo menos até aos 225 km/h! Também graças a toda esta potência, assim como a uma eficiência aerodinâmica melhorada, especialmente quando equipado com modo de condução Vmax, o Venom F5 anuncia uma capacidade de aceleração dos 0 aos 300 km/h em somente 10 segundos, para ir dos 0 aos 400 km/h em cerca de 20 segundos, e depois alcançar uma velocidade máxima de 484 km/h!"
			],
			especs:{
				ano:2019, peso:1338, cil:7400, tipoMot:'V8 biturbo', 
				pot:1600, rotPot:8000, bin:1760, rotBin:5500, 
				vel:484, acel:1.9, comp:4655, larg:1960, alt:1135
			},
			imags:["M160.jpg", "M161.jpg", "M162.jpg", "M163.jpg", "M164.jpg", "M165.jpg"],
			links:[
				{
					conector:"Venom F5: site oficial",
					url:"https://www.venomgt.com/"
				},
				{
					conector:"Wikipedia EN: Hennessey Venom F5",
					url:"https://en.wikipedia.org/wiki/Hennessey_Venom_F5"
				},
				{
					conector:"Youtube: Hennessey Venom F5: America's Hypercar",
					url:"https://www.youtube.com/watch?v=GZ7RUpoWX-U"
				},
				{
					conector:"Youtube: Discover the Venom F5 with John Hennessey! | FIRST LOOK",
					url:"https://www.youtube.com/watch?v=1r4oQvG1m2c"
				},
				{
					conector:"Youtube: Venom F5 Production Facility Tour with John Hennessey",
					url:"https://www.youtube.com/watch?v=k-NB-DA0FSA"
				},
				{
					conector:"Youtube: Hennessey Venom F5 at the 2018 Geneva Motor Show",
					url:"https://www.youtube.com/watch?v=RcfjE3rGOs0"
				},
				{
					conector:"RazãoAutomóvel: Hennessey Venom F5. Os detalhes do motor do «anti-Bugatti»",
					url:"https://www.razaoautomovel.com/2018/08/hennessey-venom-f5-motor"
				},
				{
					conector:"QuatroRodas (BR): Hennessey Venom F5 terá 1.842 cv para ser o carro mais rápido do mundo",
					url:"https://quatrorodas.abril.com.br/noticias/hennessey-venom-f5-tera-1-842-cv-para-ser-o-carro-mais-rapido-do-mundo/"
				},
			]
		},
		//Bugatti Divo - versão base (2019)
		{
			marcaModelo:"Bugatti Divo",
			versao:"versão base",
			texto:[
				"A Bugatti produz modelos fantásticos, mas o mais sofisticado e atraente é muito provavelmente o Divo. Na essência, trata-se de um Chiron, mas com uma roupagem mais atraente e agressiva, associada a infinitas possibilidades de personalização. Como que para justificar os 5 milhões de euros exigidos pelo fabricante, ou seja, o dobro de um Chiron. O motor continua a ser o 16 cilindros arrumados de forma a formar um W, com 8 litros de capacidade e 1500 cv, conseguidos à custa do ar sob pressão fornecido por quatro turbocompressores. A potência é depois distribuída pelas quatro rodas, com com o Divo a estar limitado a 380 km/h, devido ao maior apoio aerodinâmico, mas continuando a conseguir ir de 0 a 100 km/h em somente 2,4 segundos.",
				
				"A primeira vez que o Divo foi revelado ao público foi em 2018, durante o Pebble Beach Concours d’Elegance, e desde logo foram anunciadas apenas 40 unidades. Entre outros motivos, pela complexidade do sistema de personalização, o que limita a produção. Desta vez, a Bugatti juntou alguns detalhes para nos ajudar a perceber melhor a que se referia quando falava em “complexidade”. Ao contrário do que acontece no Chiron, cada cliente do Divo é convidado a visitar a fábrica – o termo correcto será mais próximo de mansão –, onde é desafiado a definir todos os pormenores dos acabamentos do exuberante desportivo. E há clientes que levam este desafio à letra, fazendo questão em escolher cores tão específicas que, de acordo com a marca, tardam vários meses a conseguir.",
				
				"Mas a pintura exterior não é a maior dor de cabeça para os técnicos da Bugatti. Mais complexo é acomodar todas as exigências de alguns proprietários, dos que escolhem um tipo de pele para revestir o habitáculo que condiga com uns determinados sapatos, mala ou o que quer que seja, dependendo da criatividade da pessoa em causa. Há ainda os que querem os assentos bordados com o emblema do clube de futebol, o brasão da família, focinho do cão ou pegadas dos filhos. Segundo o fabricante, o cliente mais exigente obrigou os técnicos a assisti-lo na configuração do Divo durante quase um ano.",
				
				"Contudo, nem todos os clientes são tão difíceis de satisfazer, daí que a Bugatti tenha avançado com as decorações exteriores e interiores de quatro Divo distintos, quaisquer deles bastante apelativos. A marca aproveita ainda para revelar que as decorações mais estranhas e vistosas vêm de clientes americanos e árabes, com os europeus a serem mais discretos, tanto no exterior como no interior."
			],
			especs:{
				ano:2019, peso:1961, cil:8000, tipoMot:'W16 tetraturbo', 
				pot:1500, rotPot:7000, bin:1600, rotBin:4000, 
				vel:380, acel:2.4, comp:4641, larg:2018, alt:1212
			},
			imags:["M170.jpg", "M171.jpg", "M172.jpg", "M173.jpg", "M174.jpg", "M175.jpg", "M176.jpg", "M177.jpg", "M178.jpg"],
			links:[
				{
					conector:"Bugatti Divo: site oficial",
					url:"https://www.bugatti.com/divo/"
				},
				{
					conector:"Youtube: Bugatti Divo: World Premiere",
					url:"https://www.youtube.com/watch?v=hqDT5_4z_YI"
				},
				{
					conector:"Youtube: The Bugatti Divo | Top Gear",
					url:"https://www.youtube.com/watch?v=PwxPLKVne2s"
				},
				{
					conector:"Wikipedia (EN): Bugatti Divo",
					url:"https://en.wikipedia.org/wiki/Bugatti_Divo"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//Bugatti Centodieci - versão base (2020)
		{
			marcaModelo:"Bugatti Centodieci",
			versao:"versão base",
			texto:[
				"A Bugatti apresentou o Centodieci (110 em italiano), como uma homenagem ao seu superesportivo EB110 de 1991. Para quem não sabe, o EB110 foi construído para celebrar os 110 anos do fundador da marca, Ettore Bugatti. E, esta versão do século 21, veio para homenagear ambos, tanto o criador, quanto criatura. O Bugatti Centodieci terá apenas 10 unidades construídas, todas elas já vendidas por cerca de 8 milhões de euros cada, fora os impostos. Com impostos, estes preços atingem os 10 a 12 milhões, dependendo da fiscalidade do país de destino.",
				
				"Embora baseado no Chiron e no Divo, o design do Centodieci nada tem em comum com esses anteriores modelos da Bugatti, o que garante a exclusividade e a personalidade do modelo. Basta dar uma olhada para os faróis afilados, as rodas exclusivas e o detalhe atrás das janelas das portas. A traseira do hipercarro conta com um visual bastante avançado e futurista, com as suas enormes lanternas de LED, além do enorme extrator de ar e as saídas duplas de escape. Os modelos, construídos à mão, serão entregues aos seus donos até finais de 2021.",
				
				"Embora impossível de ser confundido com os outros carros atuais da Bugatti, porém, é possível notar facilmente a influência do EB110. A frente usa a grelha em forma de ferradura da marca, só que bem menor, e com as entradas de ar semelhantes ao EB110. Apesar das elevadíssimas prestações, o Centodieci não foi feito para bater records de velocidade em pistas especiais. Tal como o Divo, foi feito para ser um hipercarro muito luxuoso e muito seguro e agradável de conduzir em estradas com curvas. Por esse motivo, a velocidade máxima foi eletronicamente limitada a 380 km/h."
			],
			especs:{
				ano:2020, peso:1976, cil:8000, tipoMot:'W16 tetraturbo', 
				pot:1600, rotPot:7000, bin:1600, rotBin:4000, 
				vel:380, acel:2.4, comp:4544, larg:2038, alt:1212
			},
			imags:["M180.jpg", "M181.jpg", "M182.jpg", "M183.jpg", "M184.jpg", "M185.jpg", "M186.jpg", "M187.jpg"],
			links:[
				{
					conector:"Bugatti Centodieci: site oficial",
					url:"https://www.bugatti.com/models/one-off-models/centodieci/"
				},
				{
					conector:"Top Gear: The Bugatti Centodieci",
					url:"https://www.topgear.com/car-news/supercars/ps9m-bugatti-centodieci"
				},
				{
					conector:"Youtube: The Bugatti Centodieci Top Gear Testing",
					url:"https://www.youtube.com/watch?v=qXE567jG-Vw"
				},
				{
					conector:"Youtube: Check Out the New $9m BUGATTI CENTODIECI! FIRST LOOK",
					url:"https://www.youtube.com/watch?v=0BsJgvXVfWU"
				},
				{
					conector:"Youtube: $9M Bugatti Centodieci – Presentation, Specs, Design",
					url:"https://www.youtube.com/watch?v=kyh26tibpYs&t=4s"
				},
				{
					conector:"Bugatti: site oficial",
					url:"https://www.bugatti.com/"
				},
				{
					conector:"Wikipedia PT: Ettore Bugatti",
					url:"https://pt.wikipedia.org/wiki/Bugatti"
				},
				{
					conector:"Wikipedia PT: Bugatti, o fundador",
					url:"https://pt.wikipedia.org/wiki/Ettore_Bugatti"
				},
			]
		},
		//Koenigsegg Jesko - versão base (2020)
		{
			marcaModelo:"Koenigsegg Jesko",
			versao:"versão base",
			texto:[
				"Denominado Jesko, o novo superesportivo da Koenigsegg tem motor 5.0 V8 biturbo e pretende vir a ser o sucessor do Agera RS. A sua produção será limitada a 125 unidades, a um ritmo de 40 a 50 veículos por ano. ‘Jesko’ é o nome do pai de Christian von Koenigsegg, dono da marca. O próprio Koenigsegg pai só soube da homenagem durante a apresentação do novo modelo, na Suíça. Em termos visuais, o Jesko aparentemente buscou inspiração tanto no estilo agressivo do Agera RS como nas linhas mais suaves e elegantes do Regera. A dianteira sóbria tem faróis na longitudinal e um enorme spoiler, típico de carros desenvolvidos para as pistas. A traseira tem mais detalhes, como a saída dupla de escape, ou o enorme aerofólio destacado da carroçaria, ou o difusor de ar.",
				
				"Com gasolina, a potência do Jesko é de ‘apenas’ 1.280 cv, mas chega a 1.600 cv com E85 (mistura do combustível mineral e 85% de etanol). Nesse caso, a velocidade máxima é de 482 km/h, de acordo com dados da fabricante. A Koenigsegg informa que em simulações virtuais (portanto com menos interferência da aerodinâmica) o Jesko superou os 500 km/h. Os números credenciam-no a tentar quebrar o recorde de velocidade para carros de produção em série, que pertence ao ‘Agera RS’ (447,6 km/h).", 
				
				"Além da enorme potência, o V8 desenvolve também um torque assinalável, de 1500 Nm. O motor trabalha em conjunto com a transmissão automática de nove marchas desenvolvida pela própria marca. A caixa se chama ‘Light Speed Transmission’, em referência às passagens de marcha ‘quase à velocidade da luz’. Mesmo que seja ‘entre uma 7.ª e uma 3.ª’, informa a empresa. A Koenigsegg informa também que o Jesko exerce pressão aerodinâmica 30% superior à do seu superesportivo One:1 e 40% superior à do Agera RS. Ainda de acordo com a marca sueca, isso representa 1.400 kg de pressão sobre o solo, valor igual ao peso do supercarro."
			],
			especs:{
				ano:2020, peso:1420, cil:5032, tipoMot:'V8 biturbo', 
				pot:1624, rotPot:8500, bin:1500, rotBin:5100, 
				vel:482, acel:2.5, comp:4610, larg:2030, alt:1210
			},
			imags:["M190.jpg", "M191.jpg", "M192.jpg", "M193.jpg", "M194.jpg", "M195.jpg", "M196.jpg"],
			links:[
				{
					conector:"Koenigsegg Jesko: site oficial",
					url:"https://www.koenigsegg.com/car/jesko/"
				},
				{
					conector:"Wikipedia EN: Koenigsegg Jesko",
					url:"https://en.wikipedia.org/wiki/Koenigsegg_Jesko"
				},
				{
					conector:"RazãoAutomóvel: Koenigsegg Jesko. Conseguirá bater os 5 recordes mundiais do Agera RS?",
					url:"https://www.razaoautomovel.com/2019/03/koenigsegg-jesko-genebra"
				},
				{
					conector:"Youtube: 2019 Koenigsegg Jesko: In-Depth Exterior and Interior Tour!",
					url:"https://www.youtube.com/watch?v=uZLmIPjWshQ"
				},
				{
					conector:"Youtube: Koenigsegg Jesko - Test Drive",
					url:"https://www.youtube.com/watch?v=g4-1QP-74Eg"
				},
				{
					conector:"Youtube: This is Why Koenigsegg Jesko Absolut can do 532km/h - Become Fastest supercar in the world",
					url:"https://www.youtube.com/watch?v=UFzn9nEnnwo"
				},
				{
					conector:"Youtube: Koenigsegg Jesko Absolut Top Speed Testing at Nevada",
					url:"https://www.youtube.com/watch?v=KrgmeTwlv0o"
				},
				{
					conector:"Koenigsegg: site oficial",
					url:"https://www.koenigsegg.com/"
				},
				{
					conector:"Wikipedia PT: Koenigsegg",
					url:"https://pt.wikipedia.org/wiki/Koenigsegg"
				},
				{
					conector:"TTAC (The Truth About Cars): Christian Koenigsegg",
					url:"https://www.thetruthaboutcars.com/2016/06/christian-koenigsegg-is-a-genius-who-builds-amazing-cars-but-is-koenigsegg-a-real-car-company/"
				},
				{
					conector:"Best Cars BR: Koenigsegg",
					url:"https://bestcars.uol.com.br/bc/tag/koenigsegg/"
				},
				{
					conector:"Getty Images - Koenigsegg: foto-album",
					url:"https://www.gettyimages.pt/fotos/koenigsegg?family=editorial&phrase=koenigsegg&sort=mostpopular#"
				},
			]
		},
		//McLaren Speedtail - modelo base (2020)
		{
			marcaModelo:"McLaren Speedtail",
			versao:"modelo base",
			texto:[
				"Sucessor do McLaren Senna, o Speedtail teve divulgados alguns detalhes interessantes da sua motorização. O carro alcançou recentemente os 403 km/h num teste, e possui motorização híbrida combinada com um baixo peso, para atingir altas performances. O Speedtail é o McLaren de rua mais potente da história, capaz de chegar aos 300 km/h em 13 segundos com seu motor a combustão V8 4.0 L de 757 cv ao lado de uma unidade elétrica. Os dois juntos geram 1.070 cv de potência e 1.150 Nm de binário. As entregas do McLaren Speedtail começam em fevereiro de 2020. A marca produzirá apenas 106 unidades para venda global, com cada uma custando cerca de 1.970.000 euros, fora os impostos... e todos já foram vendidos.",
				
				"O motor elétrico, que utiliza a tecnologia da Fórmula E, gera 313 cv de potência. Isso fornece ao Speedtail o melhor ganho de performance vindo de motor elétrico, atualmente na indústria automóvel. Os engenheiros da McLaren Applied - a divisão do McLaren Group que se concentra no desenvolvimento, telemetria, eletrificação e controle de produtos virtuais - trabalharam com a equipe da Speedtail Electric Drive Technology para integrar a sua inovadora tecnologia de inversores e conversores DC/DC desenvolvidos para o desporto automóvel, garantindo os níveis de controlo e gestão de energia necessários para este Speedtail híbrido obter o seu extraordinário desempenho. ",
				
				"Uma peça inovadora do kit de eletrificação é o sistema de armazenamento de energia de alta tensão de 1.647 kWh. Ele consiste em uma célula cilíndrica de alta potência disposta em matriz única, oferecendo uma melhor relação peso/potência do que qualquer bateria atualmente disponível."
			],
			especs:{
				ano:2020, peso:1430, cil:3995, tipoMot:'V8 biturbo + Elec.', 
				pot:1070, rotPot:6000, bin:1150, rotBin:5000, 
				vel:403, acel:2.5, comp:5136, larg:2052, alt:1120
			},
			imags:["M200.jpg", "M201.jpg", "M202.jpg", "M203.jpg", "M204.jpg", "M205.jpg", "M206.jpg"],
			links:[
				{
					conector:"The McLaren Speedtail - The New Ultimate Series Hyper-GT (oficial)",
					url:"https://cars.mclaren.com/en/ultimate-series/mclaren-speedtail"
				},
				{
					conector:"Wikipedia: McLaren Speedtail",
					url:"https://en.wikipedia.org/wiki/McLaren_Speedtail"
				},
				{
					conector:"Autocar: McLaren Speedtail: hybrid hypercar's 1036bhp powertrain detailed",
					url:"https://www.autocar.co.uk/car-news/new-cars/mclaren-speedtail-hybrid-hypercars-1036bhp-powertrain-detailed"
				},
				{
					conector:"Youtube: Check Out the New McLAREN SPEEDTAIL! | FIRST LOOK",
					url:"https://www.youtube.com/watch?v=ufSZSi2vM_M"
				},
				{
					conector:"Youtube: Speedtail: Achieving the Maximum",
					url:"https://www.youtube.com/watch?v=kTkqPY3WK8I"
				},
				{
					conector:"Youtube: FIRST LOOK: McLaren Speedtail | Top Gear",
					url:"https://www.youtube.com/watch?v=vPgPipm9rFA"
				},
				{
					conector:"RazãoAutomóvel: Speedtail. Este é o McLaren mais rápido de sempre",
					url:"https://www.razaoautomovel.com/2018/10/mclaren-speedtail"
				},
				{
					conector:"The Official McLaren Website – McLaren.com",
					url:"https://www.mclaren.com/"
				},
				{
					conector:"Wikipedia: McLaren",
					url:"https://pt.wikipedia.org/wiki/McLaren"
				},
			]
		},
	], //fim da propriedade 'colecao'
	
}; //fim do objeto 'hiperCarros'

