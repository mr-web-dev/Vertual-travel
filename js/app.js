"use strict";

/* loader start */
let loader = document.querySelector('#loader');
window.addEventListener('DOMContentLoaded', function(){
    loader.style.display = "flex";
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 250);
});
/* loader end */

/* search start */

let form = document.querySelector('#search-form');
let search = document.querySelector('#search-form .search-inp');
let cityWrap = document.querySelector('.cities');
let city = document.querySelector('#city');

form.addEventListener('submit', function(e){
    e.preventDefault()
    if (search.value == "andijon") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Andijon</h2>

            <p class="cities__text">Andijon shahri - o‘zbek sheʼriyatining taniqli vakili, Mug‘allar sulolasining asoschisi, sarkarda va hukmdor Boburning vatani. Bir vaqtlar Buyuk Ipak yo‘li bo‘ylab joylashgan, arxeologik yodgorliklar va tarixiy obidalarga boy bo‘lgan shaharni , tashrif buyurishga tavsiya etamiz:</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-andijon.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Andijon ob-havosi butun vodiydagi ob-havodan ko‘p farq qilmaydi. Manfiy haroratlar ko‘p bo‘lmaydigan qish vaqti-vaqti bilan keskin sovuq tomon o‘zgarishi mumkin, ammo bu tez takrorlanmaydigan va ko‘pi bilan bir-ikki kunga cho‘ziladigan xolatdir.Shu uchun bunday paytlarda har doim zaxirada issiq narsalar bo‘lishi kerak.</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">O‘zbekistonning turli mintaqalarida go‘shtni qanday qilib benazir tayyorlashlari haqida ko‘p gapirish mumkin, ammo biz ushbu mavzudan yiroqlashib, Farg‘ona vodiysining serhosil yerlarida o‘sadigan mahsulotlar, hamda turli xil mevalar haqida gaplashamiz! Afsonaga ko‘ra, agar siz oddiy tayoqni olib, yerga suqib qo‘ysangiz, u ildiz otadi va albatta o‘z mevasini bera boshlaydi. Shaharga kiraverishda shoxlari pishgan mevalardan sinib ketayotgandek ko‘plab mevali daraxtlar bilan qoplangan bog‘larni ko‘rishingiz mumkin. Siz bu mevalarni shu joyning o‘zida tatib ko‘rishingiz yoki yo‘l bo‘yida sotib olishingiz mumkin. Kunning issiq jaziramasida muzdek silliq shaftolini tishlaganda uning sharbati yonoqdan oqib tushishini taʼriflashga so‘z ojiz. Bundan tashqari bu yerda yana bir qiziqarli ichimlik sotiladi ... Bu qora tut sharbati! Aytishlaricha, agar uni kuniga uch mahal ichsangiz, abadiy yashashingiz mumkin! Quritilgan mevalar to‘g‘risida ham gapirmaslikning iloji yo‘q. Quritilgan o‘rik, xurmo, olxo‘ri va choyga qo‘shib ichish yoki pistadek yeyish mumkin bo‘lgan quritilgan tut ham bor. Ushbu xilma-xillik orasida toshcho‘p, rayhon kabi tog‘ dorivor o‘simliklarini topish mumkin.
                <br>
            P.S. Palovni ham albatta tatib ko‘rish kerak! U o‘ziga xos taʼmi tufayli palov uchun juda mos keladigan guruchning alohida navi bo‘lmish devzira guruchidan tayyorlashadi.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/lFVbCy83itI" title="Welcome to Andijan | Добро пожаловать в Андижан | Andijonga hush kelibsiz." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193357.12000933936!2d72.1548331009938!3d40.779507113839244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1684873938195!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else if (search.value == "buxoro") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Buxoro</h2>

            <p class="cities__text">Muqaddas Buxoro O‘zbekistonning sayyohlik durdonalaridan biridir. Tarixiy shahar markazi YUNESKOning Butunjahon merosi ro‘yxatiga kiritilgan. Shaharning yoshi 2500 yildan oshgan.</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-buxoro.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Bu yerdagi yozni issiq va qurg‘oq deb taʼriflash mumkin, shuning uchun yilning bu faslida Buxoroga sayohat qilganda o‘zingiz bilan soyabon va quyosh nuridan saqlovchi krem olishni unutmang. Buxoroda qish juda yumshoq, ammo iliq narsalarni ham eʼtibordan chetda qoldirmang.</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">O‘zbekistondagi barcha shaharlarining asosiy taomlaridan biri bu palov. Agar siz mamlakatimizning barcha hududlarini aylanib chiqsangiz, bu taomning xilma-xilligi sizni hayratda qoldiradi. Har bir shaharda odamlar sizni mamlakatdagi eng yaxshi palov shu yerda ekanligiga ishontirishadi. Faqatgina hammasini tatib ko‘rgandan so‘ng, sizga qaysi biri yoqishini anglay olasiz. Buxoro oshi "Oshi sofi" deb ham ataladi, pishirish usuli tufayli parhez taom hisoblanadi. U o‘ziga xos tarzda tayyorlaniladi, undagi masalliqlar Andijon yoki Toshkentdan farqli o‘laroq bir-biriga aralashtirilmaydi. Yana bir xususiyati shundaki, u faqat mis qozonda pishiriladi. Buxoro taomlariga halisa yoki qayish kabi taomlar kiradi. O‘zbek oshxonasi haqida ko‘proq maʼlumotni ushbu havolada o‘qishingiz mumkin.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/_ZH1WsIr2Zk" title="WELCOME TO BUKHARA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98121.86133005861!2d64.34039622641855!3d39.777639098220504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1684932328046!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else if (search.value == "farg'ona" || search.value == "fargona" || search.value == "fergana" || search.value == "ferghana") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Farg'ona</h2>

            <p class="cities__text">Zamonaviy Farg‘ona - iqtisodiyoti va madaniyati rivojlangan yirik sanoat markazi. Bu yerda amaliy sanʼat, sheʼriy adabiyot va taʼlim anʼanalari saqlanib qolgan. Shaharga tashrif buyurganingizda quyidagilarni ko‘rishingiz mumkin:</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-fargona.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Farg‘onada ob-havo vodiyniki bilan bir xil. Qish juda yumshoq va manfiy harorat juda kamdan-kam bo‘ladi, ammo keskin sovishi ham mumkin. Bunday paytlarda har doim zaxirada issiq narsalar bo‘lishi kerak. Yaxshiyamki, bu tez-tez sodir bo‘lmaydi va agar shunday bo‘lsa ham, ko‘pi bilan bir-ikki kunga cho‘ziladi.Yozda barqaror issiq bo‘ladi, uni vaqti-vaqti bilan issiq garmsil buzib turishi mumkin.</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">Farg‘onada noyob palov tayyorlanadi. Butun vodiyda bo‘lgani kabi, bu taomni tayyorlash uchun maxsus guruch navi – devzira ishlatiladi. Bu guruch noodatiy qizil-jigarrangga ega bo‘lib, taʼm jihatdan palov uchun juda mos keladi! Noyob lazzatni kasb etish uchun qoida tariqasida sarimsoq ishlatiladi. U guruch qo‘shmasdan oldin butunligicha solinadi. Vodiyning boshqa joylarida bo‘lgani kabi, Farg‘onada ham ajoyib mevalar o‘sadi. Mahalliy bog‘larning neʼmatlari nafaqat bozorlar va do‘konlarda, balki shaharning kirish qismida yo‘llar bo‘yida va hatto odamlar uylari yonida ham sotiladi. Barchasining narxi juda arzon, chunki Farg‘onada mevalar mo‘l-ko‘l. Bu yerda siz turli xil shirinliklar va boshqa milliy taomlarni, masalan, holva, paxlava, manti, lag‘mon, kabob, sho‘rva va boshqalarni ham tatib ko‘rishingiz mumkin.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/kAPJ6ASsfgU" title="Welcome to Ferghana!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97257.84088801887!2d71.70805966284134!3d40.379876329962244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2z0KTQtdGA0LPQsNC90LAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1684932672783!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else if (search.value == "namangan") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Namangan</h2>

            <p class="cities__text">"Gullar shahri" Namangan o'zining tarixiy lazzati, shinam ko'chalari va eski binolari bilan ajralib turadi. Bu erda bir qavatli an'anaviy uylar va g'ayrioddiy binolarni topishingiz mumkin:</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-namangan.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Namanganda qish juda yumshoq va manfiy haroratlar tez-tez uchrab turmaydi, ammo havo haroratining keskin sovishini ham ayrim paytlar kuzatish mumkin. Sayohat paytida issiq kiyimlarni ham eʼtibordan chetda qoldirmang. Yozda barqaror issiq bo‘ladi, bunday paytda bosh kiyimda yurish hamda iloji boricha ko‘proq suv ichish tavsiya etiladi.</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">Namangan mevalari butun vodiydagidek mazali. Ayniqsa shaftoli ular orasida ajralib turadi! Ushbu noz neʼmatni deyarli har bir bozorda va hatto shaharning kirish qismida ham topish mumkin. Pishgan shaftolilar sersuvligidan yorilgudek, terisini esa shunchaki barmog‘ingiz bilan tozalab olishingiz mumkin. Shuningdek, har qanday kafeda sizga mahalliy oshxonaning xilma-xil turi taklif etiladi. Manti, chuchvara, sho‘rva, kabob va albatta dasturxon qiroli – palov! Palov bu yerda devzira deb nomlangan guruch alohida navi bilan tayyorlanadi. Ushbu nav Farg‘ona vodiysida yetishtiriladi va mazkur taomga aynan keladi. Uning o‘zgacha taʼmi mahalliy palovga alohida xislat zavq bag‘ishlaydi va taomdan yana va yana tanovul qilish ishtiyog‘ini uyg‘otadi. Shaharda vino ishlab chiqariladi va ishoning, mahalliy vino sizni befarq qoldirmasligi aniq. Uni 1939 yildan buyon o‘z texnologiyalari asosida tayyorlab kelishmoqda.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/NcPSzOub-Xg" title="Cities of Uzbekistan - Namangan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192799.7707358004!2d71.47981029917696!3d40.970609500932156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2z0J3QsNC80LDQvdCz0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1684933326619!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else if (search.value == "samarqand" || search.value == "maroqand") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Samarqand</h2>

            <p class="cities__text">Samarqandni chinakam noyob shahar, deb atash mumkin! Dunyoning eng buyuk shoir va faylasuflari uni - qalb bog‘i, sharq durdonasi, dunyoning ko‘zgusi va hatto yer yuzi deb atashganlarida ham, ular bu go‘zal shaharning barcha go‘zalligi va boyliklarini tasvirlab berolmagan bo‘lardilar.</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-namangan.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Samarqand iqlimiga aniq fasllarga bo‘linish xos. Qish odatda yumshoq va harorat 0 ° S dan pastga juda kam hollarda tushadi. To‘satdan sovuq bo‘lishi juda kam uchraydi, va asosan kechalari tushishi mumkin. Bu yerda yoz juda issiq, shuning uchun siz o‘zingiz bilan bosh kiyim va quyoshdan himoya qilish uchun ko‘zoynak olib kelishni unutmang.</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">Aksariyat viloyatlarimizda bo‘lgani kabi Samarqandda ham asosiy taom palovdir. Bu turdagi palov, Buxoro palovi singari, pishirish paytida aralashmaydi, bu esa palovga o‘ziga xos parhezli taʼm beradi. Aslida, bu parhezlik shundan iboratki, har kim taomdan qancha sabzi va qancha go‘sht suzishni tanlashi mumkin. Oshdan tashqari, turli xil kaboblar, manti va ayniqsa Samarqand nonlari ham mashhur! Samarqand noni haqida afsonalar mavjud, chunki ularni xohlagancha saqlash mumkin va ular hech qachon mog‘orlamaydi va qotib ham qolmaydi. Afsonalardan birida aytilishicha, Buxoro amirlaridan biri Samarqand nonlarini juda yaxshi ko‘rar va shu sababli nonlarni doimiy ravishda unga olib kelishni buyurar edi. Ammo bir safar buyurtmani kutishdan charchaganda, ularni Buxoroda qanday qilib pishirish mumkinligi to‘g‘risida o‘ylay boshladi. “Ehtimol, Samarqanddan un olib kelish kerakdir”, deb o‘yladi u. Ammo nonlar o‘xshamadi. “U holda mahalliy suvni olib kelish kerak”. Ammo yana muvaffaqiyatsizlik. “Ehtimol, hamma gap loydadir! Samarqand loyini olib kelib, undan tandir yasash kerak!”. Natija o‘zgarishsiz qoldi. “Ehtimol, bu novvoylardadir? Menga samarqandlik novvoy kerak!”. Ammo hattoki samarqandlik novvoy ham bu taʼmni Buxoroda takrorlay olmadi. Shundan so‘ng, amir o‘z urinishlaridan voz kechdi va sevimli taomini Samarqanddan olib kelishni davom ettirdi.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/f6DRqbhXbWU" title="Cities of Uzbekistan - Samarkand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196633.24528040102!2d66.80307446798614!3d39.64083630314094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1684933507865!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else if (search.value == "toshkent" || search.value == "tashkent") {
        cityWrap.classList.remove('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title">Toshkent</h2>

            <p class="cities__text">Toshkent – O‘zbekistonning poytaxti va shu bilan birga Markaziy Osiyodagi eng yirik shahardir.Ko'p yillar davomida Toshkent butun dunyodan sayyohlar va ishbilarmonlarni jalb qiladigan mamlakatning eng muhim biznes va madaniy markazi bo'lib kelgan.</p>
            
            <div class="cities__img-box">
                <img src="./img/cities/city-namangan.jpg" alt="City img" class="cities__img">
            </div>

            <!-- climate -->

            <b class="cities__title">Iqlim <i class="fas fa-temperature-three-quarters"></i></b>

            <p class="cities__text">Toshkentda yozning katta qismi jazirama bo‘ladi, shuning uchun quyosh kremi va bosh kiyimini unutmang! Qish asosan yumshoq va qorsiz, lekin issiq kiyimlarni eʼtiborsiz qoldirmang, kechqurunlari shunday sovuq bo‘ladiki, sharf kiyishni istab qolasiz!</p>

            <!-- kitchen -->

            <b class="cities__title">Oshxona <i class="fas fa-utensils"></i></b>

            <p class="cities__text">Toshkent restoranlari o‘zining rang-barangligi va xizmat ko‘rsatish darajasi bilan har qanday xushxo‘rni xursand qilishi mumkin. Shaharda nafaqat o‘z mazasi bilan boshqa hududlarda tayyorlanadigan taomlardan farq qiluvchi milliy taomlar, balki chet el gastronomiya sanoatining eng yaxshi namunalarini ham topishingiz mumkin. Toshkentda siz uyg‘ur, koreys, xitoy, yapon, Evropa va hatto molekulyar oshxonani sinab ko‘rishingiz mumkin. Lekin eng mazalisi tabiiyki o‘zbek taomlaridir! 2016 yilning dekabr oyida palov YUNESKOning nomoddiy meros ro‘yxatiga kiritilganligini bilasizmi? Endi bilib oldingiz! Dunyodagi eng mazali taomlarni o‘z ko‘zingiz bilan ko‘rib, tatib ko‘rishga shoshiling! O‘zbek taomlari haqida ko‘proq maʼlumotni ushbu havola orqali o‘qishingiz mumkin.</p>

            <!-- video -->

            <b class="cities__title">Video <i class="fas fa-video"></i></b>

            <iframe src="https://www.youtube.com/embed/lWkRBMnsOcg" title="Salom Tashkent" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <!-- map -->

            <b class="cities__title">Xarita <i class="fas fa-map-location-dot"></i></b>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398705231!2d69.11455452829523!3d41.282737946576646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1684934310916!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    } else {
        cityWrap.classList.add('cities-active')
        cityWrap.classList.remove('cities-hidden')
        city.innerHTML = `
            <h2 class="cities__title-502">5<i class="fas fa-gear fa-spin"></i>2</h2>
            <p class="cities__text-502">Kechirasiz hozirda bazada ushbu shaxar haqida ma'lumot mavjud emas.</p>
        `
    }
})

/* search end */