export const translations = {
    ru: {
        // Navbar
        navbar: {
            home: 'Главная',
            createCampaign: 'Создать кампанию',
            myCampaigns: 'Мои кампании',
            profile: 'Профиль',
            login: 'Войти',
            register: 'Регистрация',
            logout: 'Выйти'
        },

        // Auth
        auth: {
            login: 'Вход',
            register: 'Регистрация',
            email: 'Email',
            password: 'Пароль',
            fullName: 'Полное имя',
            loginButton: 'Войти',
            registerButton: 'Зарегистрироваться',
            noAccount: 'Нет аккаунта?',
            haveAccount: 'Уже есть аккаунт?',
            loginError: 'Неверный email или пароль',
            registerError: 'Ошибка регистрации',
            loading: 'Загрузка...'
        },

        // Home
        home: {
            title: 'Активные кампании',
            noCampaigns: 'Кампаний пока нет'
        },

        // Campaign
        campaign: {
            categories: {
                MEDICAL: '🏥 Медицина',
                EDUCATION: '📚 Образование',
                EMERGENCY: '🚨 Срочная помощь',
                CREATIVE: '🎨 Творчество',
                CHARITY: '❤️ Благотворительность',
                OTHER: '📦 Другое'
            },
            viewMore: 'Подробнее',
            author: 'Автор',
            goal: 'Цель',
            raised: 'Собрано',
            of: 'из',
            description: 'Описание',
            support: 'Поддержать',
            amount: 'Сумма',
            message: 'Сообщение',
            anonymous: 'Анонимно',
            balance: 'Баланс',
            donate: 'Поддержать',
            donations: 'Донаты',
            noDonations: 'Пока нет донатов',
            thankYou: 'Спасибо за поддержку!',
            processing: 'Обработка...',
            checkAmount: 'Проверьте сумму и баланс',
            donationError: 'Ошибка при создании доната'
        },

        // Create Campaign
        createCampaign: {
            title: 'Создать кампанию',
            subtitle: 'Расскажите о вашей цели',
            nameLabel: 'Название',
            namePlaceholder: 'Помощь на лечение',
            descriptionLabel: 'Описание',
            descriptionPlaceholder: 'Подробно опишите вашу ситуацию...',
            goalLabel: 'Целевая сумма (₽)',
            goalPlaceholder: '50000',
            categoryLabel: 'Категория',
            coverImageLabel: '📸 Фото обложки',
            coverImageDesc: 'Главное изображение кампании. Максимум 5MB.',
            galleryLabel: '🖼️ Галерея фото',
            galleryDesc: 'Дополнительные изображения (до 10 штук). Посетители смогут листать их.',
            optional: 'необязательно',
            photos: 'фото',
            remove: 'Удалить',
            cancel: 'Отмена',
            create: 'Создать кампанию',
            creating: 'Создание...',
            error: 'Ошибка при создании кампании',
            coverRequired: 'Обязательно загрузите фото обложки',
            fileTooLarge: 'Размер файла не должен превышать 5MB',
            maxPhotos: 'Максимум 10 фото в галерее',
            documentLabel: '📄 Документ',
            documentDesc: 'Загрузите документ (PDF, DOC, DOCX). Максимум 10MB.',
            documentTooLarge: 'Размер документа не должен превышать 10MB'
        },

        // My Campaigns
        myCampaigns: {
            title: 'Мои кампании',
            create: 'Создать кампанию',
            empty: 'У вас пока нет кампаний',
            createFirst: 'Создать первую кампанию',
            view: 'Просмотр',
            delete: 'Удалить',
            confirmDelete: 'Удалить кампанию?',
            deleted: 'Кампания удалена',
            deleteError: 'Ошибка при удалении',
            edit: 'Редактировать'
        },

        // Profile
        profile: {
            balance: 'Баланс',
            totalDonated: 'Всего пожертвовано',
            donationsCount: 'Донатов',
            history: 'История донатов',
            noDonations: 'Вы еще не делали донатов'
        },

        // Common
        common: {
            loading: 'Загрузка...',
            error: 'Ошибка',
            required: 'Обязательно'
        },

        campaignDetails: {
            author: 'Автор',
            raised: 'из',
            funded: 'собрано',
            description: 'Описание',
            support: 'Поддержать',
            amount: 'Сумма (₽)',
            balance: 'Баланс',
            message: 'Сообщение',
            messagePlaceholder: 'Напишите слова поддержки...',
            anonymous: 'Анонимный донат',
            donate: 'Поддержать',
            donations: 'Пожертвования',
            noDonations: 'Пока нет пожертвований',
            anonymousDonor: 'Аноним',
            notFound: 'Кампания не найдена',
            donationSuccess: 'Спасибо за поддержку!',
            donationError: 'Ошибка при создании пожертвования',
            gallery: 'Галерея фото',
            cover: 'Обложка',
            downloadDocument: 'Скачать документ'
        },

        editCampaign: {
            title: 'Редактировать кампанию',
            subtitle: 'Обновите информацию о вашей кампании',
            coverImageDesc: 'Загрузите новое изображение или оставьте текущее',
            galleryDesc: 'Загрузите новые изображения или оставьте текущие',
            existingDocument: 'Текущий документ',
            loadError: 'Ошибка загрузки кампании',
            error: 'Ошибка при обновлении кампании',
            saving: 'Сохранение...',
            save: 'Сохранить изменения'
        }
    },

    en: {
        // Navbar
        navbar: {
            home: 'Home',
            createCampaign: 'Create Campaign',
            myCampaigns: 'My Campaigns',
            profile: 'Profile',
            login: 'Login',
            register: 'Sign Up',
            logout: 'Logout'
        },

        // Auth
        auth: {
            login: 'Login',
            register: 'Sign Up',
            email: 'Email',
            password: 'Password',
            fullName: 'Full Name',
            loginButton: 'Login',
            registerButton: 'Sign Up',
            noAccount: "Don't have an account?",
            haveAccount: 'Already have an account?',
            loginError: 'Invalid email or password',
            registerError: 'Registration error',
            loading: 'Loading...'
        },

        // Home
        home: {
            title: 'Active Campaigns',
            noCampaigns: 'No campaigns yet'
        },

        // Campaign
        campaign: {
            categories: {
                MEDICAL: '🏥 Medical',
                EDUCATION: '📚 Education',
                EMERGENCY: '🚨 Emergency',
                CREATIVE: '🎨 Creative',
                CHARITY: '❤️ Charity',
                OTHER: '📦 Other'
            },
            viewMore: 'View More',
            author: 'Author',
            goal: 'Goal',
            raised: 'Raised',
            of: 'of',
            description: 'Description',
            support: 'Support',
            amount: 'Amount',
            message: 'Message',
            anonymous: 'Anonymous',
            balance: 'Balance',
            donate: 'Donate',
            donations: 'Donations',
            noDonations: 'No donations yet',
            thankYou: 'Thank you for your support!',
            processing: 'Processing...',
            checkAmount: 'Check amount and balance',
            donationError: 'Error creating donation'
        },

        // Create Campaign
        createCampaign: {
            title: 'Create Campaign',
            subtitle: 'Tell us about your goal',
            nameLabel: 'Title',
            namePlaceholder: 'Help for treatment',
            descriptionLabel: 'Description',
            descriptionPlaceholder: 'Describe your situation in detail...',
            goalLabel: 'Target Amount (₽)',
            goalPlaceholder: '50000',
            categoryLabel: 'Category',
            coverImageLabel: '📸 Cover Photo',
            coverImageDesc: 'Main campaign image. Maximum 5MB.',
            galleryLabel: '🖼️ Photo Gallery',
            galleryDesc: 'Additional images (up to 10). Visitors can browse them.',
            optional: 'optional',
            photos: 'photos',
            remove: 'Remove',
            cancel: 'Cancel',
            create: 'Create Campaign',
            creating: 'Creating...',
            error: 'Error creating campaign',
            coverRequired: 'Cover photo is required',
            fileTooLarge: 'File size must not exceed 5MB',
            maxPhotos: 'Maximum 10 photos in gallery',
            downloadDocument: 'Download Document'
        },

        // My Campaigns
        myCampaigns: {
            title: 'My Campaigns',
            create: 'Create Campaign',
            empty: "You don't have any campaigns yet",
            createFirst: 'Create your first campaign',
            view: 'View',
            delete: 'Delete',
            confirmDelete: 'Delete campaign?',
            deleted: 'Campaign deleted',
            deleteError: 'Error deleting campaign',
            edit: 'Edit'
        },

        // Profile
        profile: {
            balance: 'Balance',
            totalDonated: 'Total Donated',
            donationsCount: 'Donations',
            history: 'Donation History',
            noDonations: "You haven't made any donations yet"
        },

        // Common
        common: {
            loading: 'Loading...',
            error: 'Error',
            required: 'Required'
        },

        campaignDetails: {
            author: 'Author',
            raised: 'of',
            funded: 'funded',
            description: 'Description',
            support: 'Support',
            amount: 'Amount (₽)',
            balance: 'Balance',
            message: 'Message',
            messagePlaceholder: 'Write words of support...',
            anonymous: 'Anonymous donation',
            donate: 'Donate',
            donations: 'Donations',
            noDonations: 'No donations yet',
            anonymousDonor: 'Anonymous',
            notFound: 'Campaign not found',
            donationSuccess: 'Thank you for your support!',
            donationError: 'Error creating donation',
            gallery: 'Photo Gallery',
            cover: 'Cover',
            documentLabel: '📄 Document',
            documentDesc: 'Upload document (PDF, DOC, DOCX). Maximum 10MB.',
            documentTooLarge: 'Document size must not exceed 10MB'
        },

        editCampaign: {
            title: 'Edit Campaign',
            subtitle: 'Update your campaign information',
            coverImageDesc: 'Upload new image or keep current',
            galleryDesc: 'Upload new images or keep current',
            existingDocument: 'Current document',
            loadError: 'Error loading campaign',
            error: 'Error updating campaign',
            saving: 'Saving...',
            save: 'Save Changes'
        }
    },

    hy: {
        // Navbar
        navbar: {
            home: 'Գլխավոր',
            createCampaign: 'Ստեղծել արշավ',
            myCampaigns: 'Իմ արշավները',
            profile: 'Պրոֆիլ',
            login: 'Մուտք',
            register: 'Գրանցում',
            logout: 'Ելք'
        },

        // Auth
        auth: {
            login: 'Մուտք',
            register: 'Գրանցում',
            email: 'Էլ․ փոստ',
            password: 'Գաղտնաբառ',
            fullName: 'Անուն Ազգանուն',
            loginButton: 'Մուտք',
            registerButton: 'Գրանցվել',
            noAccount: 'Չունե՞ք հաշիվ',
            haveAccount: 'Արդեն ունե՞ք հաշիվ',
            loginError: 'Սխալ էլ․ փոստ կամ գաղտնաբառ',
            registerError: 'Գրանցման սխալ',
            loading: 'Բեռնում...'
        },

        // Home
        home: {
            title: 'Ակտիվ արշավներ',
            noCampaigns: 'Դեռ արշավներ չկան'
        },

        // Campaign
        campaign: {
            categories: {
                MEDICAL: '🏥 Բժշկություն',
                EDUCATION: '📚 Կրթություն',
                EMERGENCY: '🚨 Շտապ օգնություն',
                CREATIVE: '🎨 Ստեղծագործություն',
                CHARITY: '❤️ Բարեգործություն',
                OTHER: '📦 Այլ'
            },
            viewMore: 'Մանրամասն',
            author: 'Հեղինակ',
            goal: 'Նպատակ',
            raised: 'Հավաքված',
            of: '-ից',
            description: 'Նկարագրություն',
            support: 'Աջակցել',
            amount: 'Գումար',
            message: 'Հաղորդագրություն',
            anonymous: 'Անանուն',
            balance: 'Մնացորդ',
            donate: 'Նվիրաբերել',
            donations: 'Նվիրատվություններ',
            noDonations: 'Դեռ նվիրատվություններ չկան',
            thankYou: 'Շնորհակալություն աջակցության համար!',
            processing: 'Մշակում...',
            checkAmount: 'Ստուգեք գումարը և մնացորդը',
            donationError: 'Նվիրատվության ստեղծման սխալ'
        },

        // Create Campaign
        createCampaign: {
            title: 'Ստեղծել արշավ',
            subtitle: 'Պատմեք ձեր նպատակի մասին',
            nameLabel: 'Անվանում',
            namePlaceholder: 'Օգնություն բուժման համար',
            descriptionLabel: 'Նկարագրություն',
            descriptionPlaceholder: 'Մանրամասն նկարագրեք ձեր իրավիճակը...',
            goalLabel: 'Նպատակային գումար (₽)',
            goalPlaceholder: '50000',
            categoryLabel: 'Կատեգորիա',
            coverImageLabel: '📸 Կազմի նկար',
            coverImageDesc: 'Արշավի հիմնական պատկեր։ Առավելագույնը 5MB։',
            galleryLabel: '🖼️ Լուսանկարների պատկերասրահ',
            galleryDesc: 'Լրացուցիչ պատկերներ (մինչև 10 հատ)։ Այցելուները կարող են դրանք դիտել։',
            optional: 'ոչ պարտադիր',
            photos: 'լուսանկար',
            remove: 'Հեռացնել',
            cancel: 'Չեղարկել',
            create: 'Ստեղծել արշավ',
            creating: 'Ստեղծում...',
            error: 'Արշավի ստեղծման սխալ',
            coverRequired: 'Կազմի լուսանկարը պարտադիր է',
            fileTooLarge: 'Ֆայլի չափը չպետք է գերազանցի 5MB',
            maxPhotos: 'Առավելագույնը 10 լուսանկար պատկերասրահում',
            documentLabel: '📄 Փաստաթուղթ',
            documentDesc: 'Վերբեռնեք փաստաթուղթ (PDF, DOC, DOCX)։ Առավելագույնը 10MB։',
            documentTooLarge: 'Փաստաթղթի չափը չպետք է գերազանցի 10MB'
        },

        // My Campaigns
        myCampaigns: {
            title: 'Իմ արշավները',
            create: 'Ստեղծել արշավ',
            empty: 'Դուք դեռ արշավներ չունեք',
            createFirst: 'Ստեղծել առաջին արշավը',
            view: 'Դիտել',
            delete: 'Ջնջել',
            confirmDelete: 'Ջնջե՞ք արշավը',
            deleted: 'Արշավը ջնջված է',
            deleteError: 'Ջնջման սխալ',
            edit: 'Խմբագրել'
        },

        // Profile
        profile: {
            balance: 'Մնացորդ',
            totalDonated: 'Ընդամենը նվիրաբերված',
            donationsCount: 'Նվիրատվություններ',
            history: 'Նվիրատվությունների պատմություն',
            noDonations: 'Դուք դեռ նվիրատվություններ չեք կատարել'
        },

        // Common
        common: {
            loading: 'Բեռնում...',
            error: 'Սխալ',
            required: 'Պարտադիր'
        },

        campaignDetails: {
            author: 'Հեղինակ',
            raised: '-ից',
            funded: 'հավաքված',
            description: 'Նկարագրություն',
            support: 'Աջակցել',
            amount: 'Գումար (₽)',
            balance: 'Մնացորդ',
            message: 'Հաղորդագրություն',
            messagePlaceholder: 'Գրեք աջակցության խոսքեր...',
            anonymous: 'Անանուն նվիրատվություն',
            donate: 'Նվիրաբերել',
            donations: 'Նվիրատվություններ',
            noDonations: 'Դեռ նվիրատվություններ չկան',
            anonymousDonor: 'Անանուն',
            notFound: 'Արշավը չի գտնվել',
            donationSuccess: 'Շնորհակալություն ձեր աջակցության համար',
            donationError: 'Նվիրատվության ստեղծման սխալ',
            gallery: 'Լուսանկարների պատկերասրահ',
            cover: 'Կազմ',
            downloadDocument: 'Ներբեռնել փաստաթուղթը'
        },

        editCampaign: {
            title: 'Խմբագրել արշավը',
            subtitle: 'Թարմացրեք ձեր արշավի տեղեկությունները',
            coverImageDesc: 'Վերբեռնեք նոր նկար կամ պահեք ընթացիկը',
            galleryDesc: 'Վերբեռնեք նոր նկարներ կամ պահեք ընթացիկները',
            existingDocument: 'Ընթացիկ փաստաթուղթ',
            loadError: 'Արշավը բեռնելու սխալ',
            error: 'Արշավը թարմացնելու սխալ',
            saving: 'Պահպանում...',
            save: 'Պահպանել փոփոխությունները'
        }
    }
};

export type Language = 'en' | 'ru' | 'hy';
export type TranslationKeys = typeof translations.ru;