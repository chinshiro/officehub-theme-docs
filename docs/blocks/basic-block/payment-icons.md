---
title: Payment Icons
sidebar_position: 98
---

A block for displaying payment method icons (e.g., credit cards, digital wallets) to build trust and clarify accepted payment options.

## Main Settings
<img src={require('/img/100.webp').default} alt="Payment Icons block settings" style={{ float: 'left', marginRight: '30px' }} />
- **Displayed method**: Controls how payment icons are rendered on the page.
  > `Auto` → Payment icons are automatically displayed based on your site’s global payment settings.  
    → Ideal for dynamic setups where you want icons to reflect active gateways (e.g., PayPal, Stripe, Apple Pay) without manual configuration.  
    → Ensures consistency and reduces maintenance — if you add/remove a payment method in backend, icons update automatically.

  > `Customize` → Allows manual input of which payment icons to show, regardless of active gateways.  
    → Useful for marketing purposes (e.g., showing “Visa” even if not currently enabled) or A/B testing trust signals.  
    → Require selecting specific icon sets depending on platform capabilities.
- **Size**: Sets the visual scale of the payment icons. Options: 
  `Extra Small`
  `Small (Default)`
  `Medium`
  `Large`
  `Extra Large`
  `2 Extra Large`
- **Alignment (desktop)**: Horizontal alignment of payment icons on desktop screens.
- **Alignment (mobile)**: Horizontal alignment of payment icons on mobile devices (tablet and smartphone).
<div style={{ clear: 'both' }} />

---

## Customize settings
When payment icons method is customize, enter payment code as below.

<img src={require('/img/101.webp').default} alt="Payment Icons customize settings settings" style={{ float: 'left', marginRight: '30px' }} />
- **Icons** (text input field): Enter a comma-separated list of payment provider codes to render specific icons.
  > ✅ *Example use case*:  
  `shopify_pay, paypal, visa, master, maestro, jcb, stripe, amazon, alipay` 

The following is the code for all payment icons on Shopify's official platform, which you can copy directly.
```
ab,abn,ach,achdirectdebit,acima_leasing,acuotaz,ada,addi,adyen,aeropay,
affinbank,affirm,aftee,afterpay,afterpay_paynl_version,airtel_money,
airteltigo_mobile_money,aktia,akulaku,akulakupaylater,alandsbanken,
alfamart,alfamidi,alifpay,alipay,alipay_hk,alipaypaynlversion,alliancebank,
alma,almapaynlversion,aman,amazon,ambank,american_express,amwal,ansa,
ansastoredvalue,anyday,apc,apecoin,aplazo,apple_pay,aqsat,arbitrum,arca,
areeba,arhaus,artea,arvato,ashleyplcc,ask,astrapay,atmbersama,
atobaraidotcom,atome,atone,atrato,au_kantan_kessai,aupay,authorizenet,
avalanche,avardakekale,avardapartpayment,avardapaylater,axs,azericard,
babycadeaubon,bacs,bancnet,bancoazteca,bancobice,bancocuscatlan,
bancodechile,bancoedwards,bancoestado,bancofalabella,bancolombia,bancomat,
bancontact,bancosecurity,bangkokbank,bankislam,bankmuamalat,bankofamerica,
bankrakyat,barclays,barion,base,bbqcadeaukaart,bbvacie,bc_card,bca,
bcaklikpay,bci,bdc,bdo,beautyandmorecadeaukaart,becs,belfius,bemovil,
benefit,benefitpay,bestbuycard,betalingsservice,bgautogiro,
bierchequepaynlversion,bigc,billease,billerpaynlversion,billie,billink,
billinkmethod,bitcoin,bitcoin_cash,bizum,bizumpaynlversion,blik,bmo,
bnbchain,bni,bnp,bny,bobpayinstanteft,bobpaymanualeft,boekencadeau,bogpay,
bogus,bogus_app_coin,bol,boleto,boodil,boost,bpi,braintree,bread,breadpay,
bri,bri_direct_debit,brimo,brite,broadnet,bsi,bsn,bss,buckaroopaybybank,
buckaroopayments,busd,cacpaywallet,capitalone,capitecpay,carecredit,careempay,
cartebleue,cartes_bancaires,cash,cashappafterpay,cashapppay,cashew,
cashinvoicelatinamerica,catchpayments,cbc,cebuana,cembrapay,centi,
centrapay,cetelem,charlesschwab,chase,checkout_finance,chinabank,cimb,
cimbclicks,circlek,citadele,citi,citipay,citizens,clavetelered,clearpay,
clerq,cleverpay,clickuz,clip,cliq,cmb,codensa,cofidis3x,cofidis4x,coinsph,
collector_bank,coop,coppelpay,creditagricole,creditclickpaynlversion,
crediteapay,creditkey,crediviva,credix,credova,cuotas,curacaopay,d_barai,
dai,dailyyamazaki,dana,danamononline,dandan,dankort,danske_bank,dappmx,
dash,daviplata,decadeaukaart,decadeaukaartblack,depay,deutschebank,dinacard,
diners_club,directa24,directbanktransferlatinamerica,directpay,discover,
divido,dnb,docomo_barai,dogecoin,dopple,dropp,duitnow,duologi,dwolla,
easycreditratenkauf,easypaisa,easywallet,ebucks,echelon_financing,ecpay,
edenred,efecty,eft_secure,eftpos_au,eftposau,eghl,elo,elv,enets,eos,epayments,
epospay,eps,erste,escrowcom,esewa,esr_paymentslip_switzerland,ethereum,
etihadguestpay,etika,eurobonuscheckout,ewalletindonesia,ewalletphilippines,
ewalletsouthkorea,ezcash,facebook_pay,fairstonepayments,fam,familymart,fantom,
farmlands,fashioncheque,fashiongiftcardpaynlversion,favepay,fawry,finloup,
fintecture,fintoc,firstcitizens,flex,flexfsa,flexhsa,flexiti,floapay,
floatpayments,flow,flyingblueplus,forbrugsforeningen,forsa,fortiva,fps,fpx,
free,freecharge,freedompay,fundiin,futurepaymytab,gale,galefsa,galehsa,gcash,
generalfinancing,generic,genericbank,genie,genoapay,gezondheidsbonpaynlversion,
gift-card,giftforgood,giftstation,giropay,givacard,glbemoreoptions,glbepaypal,
glbeplus,gmo-postpay,gmoatokara,gmobanktransfer,gmovirtualaccount,gnosis,
goldmansachs,google_pay,google_wallet,gopay,gosettle,grabpay,grailpay,gusd,
halotel,hana_card,handelsbanken,happypay,helloclever,heylight,hitrustpaytransfer,
homecredit,hongleongbank,hongleongconnect,horsesandgifts,hsbc,hsbcukversion,
huistuincadeau,humm,humo,hyper,hypercard,hypercash,hyundai_card,ibexpay,ideal,
idealwero,idram,in3,in3viaideal,inbank,indexo,indomaret,ing_homepay,interac,
ipass,ipwire,ipwireinst,itau,ivy,iwocapaypaylater,jcb,jenius,jko,jousto,
kakao_pay,kakebaraidotcom,kasikornbank,kasssh,katapult,kb_card,kbc_cbc,
kcpcreditcard,keuzecadeau,kfast,khalti,khqr,kidsandteen,klap,klarna-pay-later,
klarna-pay-now,klarna-slice-it,klarna,knakensettle,knet,koalafi,koin,
krediidipank,kredivo,krungsri,krungthaibank,kueskipay,kunstencultuurcadeaukaart,
kuwaitfinancehouse,landbank,laser,latitude_creditline_au,latitude_gem_au,
latitude_gem_nz,latitude_go_au,latitudepay,lawson,laybuy,laybuybyklarna,
laybuyheart,lbc,leanpay,ledyer,leescadeaukaart,lhv,line_pay,linkaja,linkpay,
litecoin,lku,lloyds,lotte_card,lpb,luminor,lunchcheck,lydia,mach,mada,maestro,
magnetiq,mandiri,mash,master,masterpass,maxima,maya,mayabank,maybank,maybankm2u,
maybankqrpay,mb,mbway,mbwaypaynlversion,mcash,mcashcreditcard,mcb,medicinosbankas,
meeza,mercadocredito,mercadopago,merpay,metapay,metrobank,militarystarcard,
minicuotas,ministop,mobicred,mobikwik,mobilepay,mode,modo,mokka,momopay,moncash,
mondido,mondu,mondupurple,monero,monizze,monizzenew,monzo,moov,mpesa,
mtn_mobile_money,multisafepay,mybank,myfatoorah,n26,naps,nationalebioscoopbon,
nationaleentertainmentcard,natwest,navarpay,naver_pay,nayapay,nelo,neocuotas,
neopay,nequi,netbanking,neteller,newpay,nexi,nh_card,nomba,nordea,notyd,
novalnetcashpayment,novalnetdirectdebitach,novalnetinstalmentbydirectdebitsepa,
novalnetinstalmentbyinvoice,novalnetinvoice,novalnetprepayment,novuna,npatobarai,
npkakebarai,nubank,oca,ocbcbank,octoclicks,octopus,offlinebanktransferlatinamerica,
ola_money,omannet,omasp,oney,onlinebanking,onlinebanktransfer,op,opay,openpay,
optimism,orangemobilemoney,orco,otpbank,overstockciticobrand,overstockcitiplcc,
ovo,oxxo,ozow,pads,pagoefectivo,paid,paidy,palawa,palawan,pastpay,pay_easy,pay_pay,
payafterdeliveryinstalments,payap,paybybank,paybybankmollie,paybybankus,paybylink,
paycash,payco,payconiq,payd,payeverpaybybank,payfast_instant_eft,payflex,payid,
payitmonthly,payjustnow,paymark_online_eftpos,paymaya,payme,paymee,paymentassist,
paynow,paynowmbank,paynuno,payoo,payooqr,paypal,payphone,payplan,paypo,
payrexxbanktransfer,payrexxcrypto,payrexxpaybybank,payrexxpowerpay,payright,
paysafecard,paysafecardpaynlversion,paysafecash,paysera,payshap,paysquad,payto,
paytomorrow,payu,payuinstallments,payzapp,pei,perlasfinance,permata,pfpay,pivo,
pix,plata,pluxee,pluxeenew,pnc,podiumcadeaukaart,pointspay,poli,polygon,pop-pankki,
portmone,postepay,postfinance_card,postfinance_efinance,postfinancenew,postpay,
poweredbyansa,poweredbyansastoredvalue,powerpay,pragmapay,prepaysolutions,
progressiveleasing,przelewy24,przelewytwofourpaynlversion,pse,publicbank,
publicbank_pbe,purdeygiftcard,pxpay,qasitli,qliro,qpay,qr_promptpay,qris,
qrpaymentslip,qrph,rabbitlinepay,rabobank,rakuten_pay,rapidtransfer,ratepay,
ratypekao,rcbc,rcs,redactiva,reka,resolvepay,revolut,rhbbank,rhbnow,rietumu,
riverty,rivertypaynlversion,rupay,rvrpas,s-pankki,saastopankki,sadad,sadapay,
safetypaybanktransfer,safetypaycashpayment,sam,samsung_card,samsung_pay,santander,
satisfi,satispay,saunaandwellnesscadeau,sbpl,scalapay,scantopay,scotiabank,
screamtruck,screamtruckwallet,seabankid,seabankph,seb,seicomart,sentoo,
sepa_bank_transfer,sepadirectdebit,sequra,seveneleven,sezzle,shib,shinhan_card,
shopcash,shopeepay,shopify_pay,siamcommercial,siauliubankas,siirto,sika,
sikafsa,sikahsa,simpl,simplepay,sinpemovil,sistecredito,skeps,skrilldigitalwallet,
skyro,slicefnbo,smartpay,snap_checkout,snapmint,societegenerale,sofort,softbank,
solana,solanapay,solanapayhelio,souhoola,sparkasse,spaylater,spei,spidealwero,
splitit,spotii,spraypay,sslcommerz,stadspasamsterdam,stadspasrotterdam,
standardchartered,statestreet,stcpay,stoov,storecredit,stripe,sumas,sunkus,
superpayments,suyool,sveab2bfaktura,sveab2binvoice,sveacheckout,sveacreditaccount,
sveadelbetalning,sveaeramaksu,sveafaktura,sveainvoice,svealasku,sveaostukonto,
sveapartpayment,sveayrityslasku,swedbank,swiftpay,swish,swissbilling,sympl,
synchrony,synchrony_pay,tabby,tabit,tafi,taly,tamara,tandympayment,tappay,
tasacero,tbibank,tcf,td,tendopay,tensile,tescolotus,thanachartbank,timepayment,
tiptop,tnmmoney,todopay,toss,touchngo,tpay,tpgpay,trevipay,truelayer,truemed,
truemoney_pay,truist,trustly,twigpay,twint,twisto,twoinvoice,uaevisa,uangme,
ubp,underpay,unionpay,unipay,unzerbanktransfer,unzerdirectdebit,unzerinstallment,
unzerinvoice,unzerprepayment,uob,uobezpay,uobthai,upas,upgradeflexpay,upi,urbo,
urpay,usaa,usbank,usdc,usdp,usdt,uzcard,v12finance,v_pay,valu,venmo,ventipay,
venusplcc,verdcash,verifonebnpl,verve,viabill,vipps,vippspaynlversion,
virementmaitrise,visa,visaelectron,vodafone,volksbank,volt,vvv_giftcard,
vvvcadeaukaartpaynlversion,waavepaybybank,wallet,walley,wallid,wbtc,webpay,
webpaynew,webshopgiftcard,wechatpay,wechatpaynlversion,wegetfinancing,
wellsfargo,wero,whishcheckout,whishpay,wib,wise,wissel,worldchain,xendit,
xrp,yape,yappy,ymobile,younitedpay,yourgift,zalopay,zamtel,zapper,zaver,
zingala,zinia,zip,zoodpay,zulilycreditcard,zustaina
```
<div style={{ clear: 'both' }} />

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**