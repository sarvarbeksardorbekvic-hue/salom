document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. BMW MODELLARI MA'LUMOTLAR BAZASI
    ========================================= */
    const bmwModels = [
        {
            id: 'm3',
            name: 'BMW M3 Competition',
            category: 'm-series',
            categoryLabel: 'M Seriyasi / Sedan',
            power: '510 ot kuchi',
            acceleration: '3.9 soniya',
            topSpeed: '290 km/soat',
            engine: '3.0L M TwinPower Turbo',
            shortDesc: 'Afsonaviy boshqaruv va poyga treklaridan ilhomlangan yuqori unumdorlikka ega sport sedani.',
            fullDesc: 'BMW M3 Competition kundalik qulaylik va sof avtosport adrenalinini o‘zida mujassam etgan. 8 pog‘onali M Steptronic uzatmalar qutisi va faol M differensiali har bir burilishda mutlaq aniqlikni ta’minlaydi.',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'm4',
            name: 'BMW M4 Coupe',
            category: 'm-series',
            categoryLabel: 'M Seriyasi / Kupe',
            power: '530 ot kuchi',
            acceleration: '3.5 soniya',
            topSpeed: '290 km/soat',
            engine: '3.0L 6-silindrli TwinTurbo',
            shortDesc: 'Agressiv aerodinamik dizayn va maksimal tezlikni xush ko‘ruvchilar uchun yaratilgan sport kupe.',
            fullDesc: 'BMW M4 Coupe uglerod tolali tom qismi, yengillashtirilgan sport o‘rindiqlari va M xDrive to‘liq uzatma tizimi bilan eng talabchan haydovchilarni ham hayratda qoldiradi.',
            image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'm5',
            name: 'BMW M5 CS',
            category: 'sedan',
            categoryLabel: 'Sedan / M Seriyasi',
            power: '635 ot kuchi',
            acceleration: '3.0 soniya',
            topSpeed: '305 km/soat',
            engine: '4.4L V8 M TwinPower Turbo',
            shortDesc: 'Biznes-klass hashamati va superkar darajasidagi quvvatni birlashtirgan eng kuchli M5.',
            fullDesc: 'BMW M5 CS tarixdagi eng tezkor seriyali BMW sedanlaridan biri bo‘lib, oltin rangli zarhallangan detallar va karbon-keramik tormoz tizimi bilan jihozlangan.',
            image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'm8',
            name: 'BMW M8 Gran Coupe',
            category: 'sedan',
            categoryLabel: 'Hashamatli Sedan',
            power: '625 ot kuchi',
            acceleration: '3.2 soniya',
            topSpeed: '305 km/soat',
            engine: '4.4L V8 TwinPower Turbo',
            shortDesc: 'To‘rt eshikli sport kupening betakror nafisligi va murosasiz dinamik quvvati.',
            fullDesc: 'BMW M8 Gran Coupe — bu yuqori maqom va cheksiz quvvat ramzi. Merino charmidan ishlangan interyer va Bowers & Wilkins audio tizimi safaringizni birinchi klass darajasiga olib chiqadi.',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'x5',
            name: 'BMW X5 M',
            category: 'suv',
            categoryLabel: 'Yo‘ltanlamas (SUV)',
            power: '625 ot kuchi',
            acceleration: '3.8 soniya',
            topSpeed: '290 km/soat',
            engine: '4.4L V8 M Hybrid',
            shortDesc: 'Har qanday yo‘lda hukmronlik qiluvchi keng, qulay va sport xarakteriga ega yo‘ltanlamas.',
            fullDesc: 'BMW X5 M yo‘ltanlamaslar orasida sport boshqaruvi standartini belgilaydi. Pnevmatik osma va aqlli xDrive tizimi shahar ko‘chalarida ham, tog‘ yo‘llarida ham birdek ishonch bag‘ishlaydi.',
            image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'x6',
            name: 'BMW X6',
            category: 'suv',
            categoryLabel: 'Krossover Kupe',
            power: '381 ot kuchi',
            acceleration: '5.4 soniya',
            topSpeed: '250 km/soat',
            engine: '3.0L TwinPower Turbo',
            shortDesc: 'O‘ziga xos kupe silueti va yorituvchi Iconic Glow radiator panjarasiga ega zamonaviy krossover.',
            fullDesc: 'BMW X6 olomon orasidan ajralib turishni istaydiganlar uchun yaratilgan. Keng panoramali tom va eng so‘nggi BMW Operating System 8.5 tizimi bilan jihozlangan.',
            image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'x7',
            name: 'BMW X7',
            category: 'suv',
            categoryLabel: 'Flagman SUV',
            power: '530 ot kuchi',
            acceleration: '4.7 soniya',
            topSpeed: '250 km/soat',
            engine: '4.4L V8 xDrive60i',
            shortDesc: 'Yetti o‘rindiqli hashamat flagmani — oilaviy sayohatlar va biznes uchrashuvlar uchun ideal tanlov.',
            fullDesc: 'BMW X7 ulkan o‘lchamlar, Swarovski kristalli faralar va barcha uch qator o‘rindiqlar uchun yuqori darajadagi qulaylikni taqdim etadi.',
            image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'i7',
            name: 'BMW i7',
            category: 'electric',
            categoryLabel: 'Elektromobil / Flagman',
            power: '544 ot kuchi',
            acceleration: '4.7 soniya',
            topSpeed: '240 km/soat',
            engine: 'Ikki motorli eDrive (625 km zaxira)',
            shortDesc: 'To‘liq elektr harakatlanish va orqa yo‘lovchilar uchun 31 dyuymli kinoteatr ekraniga ega flagman.',
            fullDesc: 'BMW i7 kelajak hashamatini bugun taqdim etadi. Mutlaq sukunat, bir quvvatlashda 625 km masofa va boshqaruvning eng zamonaviy avtomatlashtirilgan tizimlari.',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'ix',
            name: 'BMW iX',
            category: 'electric',
            categoryLabel: 'Elektromobil / SUV',
            power: '523 ot kuchi',
            acceleration: '4.6 soniya',
            topSpeed: '200 km/soat',
            engine: 'BMW eDrive xDrive50 (630 km zaxira)',
            shortDesc: 'Minimalistik interyer va ekologik toza texnologiyalarga asoslangan yangi davr elektr krossoveri.',
            fullDesc: 'BMW iX — bu texnologik san’at asari. O‘z-o‘zini tiklovchi old panjara, shy-tech yashirin tugmalar va tezkor quvvatlash tizimi bilan jihozlangan.',
            image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80'
        }
    ];

    /* =========================================
       2. XABARNOMA (TOAST NOTIFICATION) FUNKSIYASI
    ========================================= */
    const toastContainer = document.getElementById('toast-container');

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(40px)';
            setTimeout(() => toast.remove(), 350);
        }, 4000);
    }

    /* =========================================
       3. MODELLARNI CHIQARISH VA SARALASH (FILTER)
    ========================================= */
    const modelsGrid = document.getElementById('models-grid');
    const filterButtons = document.