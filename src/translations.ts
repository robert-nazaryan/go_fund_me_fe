export const translations = {
    ru: {
        navbar: {
            home: 'Главная',
            createCampaign: 'Создать кампанию',
            myCampaigns: 'Мои кампании',
            profile: 'Профиль',
            login: 'Войти',
            register: 'Регистрация',
            logout: 'Выйти'
        },

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

        home: {
            title: 'Активные кампании',
            noCampaigns: 'Кампаний пока нет',
            search: 'Поиск кампаний...',
            filterByCategory: 'Категория',
            filterByStatus: 'Статус',
            allCategories: 'Все категории',
            allStatuses: 'Все статусы',
            statuses: {
                ACTIVE: 'Активные',
                COMPLETED: 'Завершенные',
                CANCELLED: 'Отмененные'
            },
            searchResults: 'Найдено кампаний',
            noResults: 'Ничего не найдено. Попробуйте изменить параметры поиска.',
            sortByNameAsc: 'По алфавиту А-Я',
            sortByNameDesc: 'По алфавиту Я-А',
            sortByNewest: 'Сначала новые',
            sortByOldest: 'Сначала старые',
            sortByGoalLow: 'Сначала дешевые',
            sortByGoalHigh: 'Сначала дорогие',
            sortByDefault: 'По умолчанию',
        },

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

        profile: {
            balance: 'Баланс',
            totalDonated: 'Всего пожертвовано',
            donationsCount: 'Донатов',
            history: 'История донатов',
            noDonations: 'Вы еще не делали донатов'
        },

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
            donationSuccess: 'Спасибо за вашу поддержку! Ваш донат успешно отправлен.',
            donationError: 'К сожалению, произошла ошибка при обработке доната. Попробуйте позже.',
            gallery: 'Галерея фото',
            cover: 'Обложка',
            downloadDocument: 'Скачать документ',
            quickAmount: 'Быстрый выбор суммы',
            customAmount: 'Или введите свою сумму',
            yourBalance: 'Ваш баланс',
            insufficientFunds: 'К сожалению, на вашем балансе недостаточно средств для совершения доната. Пожалуйста, выберите меньшую сумму.',
            invalidAmount: 'Пожалуйста, введите корректную сумму доната.',
            processing: 'Обработка...',
            successTitle: 'Успешно!',
            errorTitle: 'Внимание',
            modalClose: 'Понятно'
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
        navbar: {
            home: 'Home',
            createCampaign: 'Create Campaign',
            myCampaigns: 'My Campaigns',
            profile: 'Profile',
            login: 'Login',
            register: 'Sign Up',
            logout: 'Logout'
        },

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

        home: {
            title: 'Active Campaigns',
            noCampaigns: 'No campaigns yet',
            search: 'Search campaigns...',
            filterByCategory: 'Category',
            filterByStatus: 'Status',
            allCategories: 'All categories',
            allStatuses: 'All statuses',
            statuses: {
                ACTIVE: 'Active',
                COMPLETED: 'Completed',
                CANCELLED: 'Cancelled'
            },
            searchResults: 'Campaigns found',
            noResults: 'No results found. Try changing search parameters.',
            sortByNameAsc: 'A-Z',
            sortByNameDesc: 'Z-A',
            sortByNewest: 'Newest first',
            sortByOldest: 'Oldest first',
            sortByGoalLow: 'Lowest goal',
            sortByGoalHigh: 'Highest goal',
            sortByDefault: 'Default',
        },

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
            documentLabel: '📄 Document',
            documentDesc: 'Upload document. Maximum 10MB.',
            documentTooLarge: 'Document size must not exceed 10MB'
        },

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

        profile: {
            balance: 'Balance',
            totalDonated: 'Total Donated',
            donationsCount: 'Donations',
            history: 'Donation History',
            noDonations: "You haven't made any donations yet"
        },

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
            donationSuccess: 'Thank you for your support! Your donation was successful.',
            donationError: 'Unfortunately, an error occurred while processing your donation. Please try again later.',
            gallery: 'Photo Gallery',
            cover: 'Cover',
            downloadDocument: 'Download Document',
            documentLabel: '📄 Document',
            documentDesc: 'Upload document (PDF, DOC, DOCX). Maximum 10MB.',
            documentTooLarge: 'Document size must not exceed 10MB',
            quickAmount: 'Quick amount selection',
            customAmount: 'Or enter custom amount',
            yourBalance: 'Your balance',
            insufficientFunds: 'Unfortunately, you have insufficient funds in your balance. Please choose a smaller amount.',
            invalidAmount: 'Please enter a valid donation amount.',
            processing: 'Processing...',
            successTitle: 'Success!',
            errorTitle: 'Attention',
            modalClose: 'Got it'
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
        navbar: {
            home: 'Գլխավոր',
            createCampaign: 'Ստեղծել կազմակերպություն',
            myCampaigns: 'Իմ կազմակերպությունները',
            profile: 'Պրոֆիլ',
            login: 'Մուտք',
            register: 'Գրանցում',
            logout: 'Ելք'
        },

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

        home: {
            title: 'Ակտիվ կազմակերպությունեը',
            noCampaigns: 'Դեռ կազմակերպություններ չկան',
            search: 'Փնտրել կազմակերպություններ...',
            filterByCategory: 'Կատեգորիա',
            filterByStatus: 'Կարգավիճակ',
            allCategories: 'Բոլոր կատեգորիաները',
            allStatuses: 'Բոլոր կարգավիճակները',
            statuses: {
                ACTIVE: 'Ակտիվ',
                COMPLETED: 'Ավարտված',
                CANCELLED: 'Չեղարկված'
            },
            searchResults: 'Գտնված կազմակերպություններ',
            noResults: 'Ոչինչ չի գտնվել։ Փորձեք փոխել որոնման պարամետրերը։',
            sortByNameAsc: 'Այբբենական Ա-Ֆ',
            sortByNameDesc: 'Այբբենական Ֆ-Ա',
            sortByNewest: 'Սկզբում նորերը',
            sortByOldest: 'Սկզբում հիները',
            sortByGoalLow: 'Ամենացածր նպատակ',
            sortByGoalHigh: 'Ամենաբարձր նպատակ',
            sortByDefault: 'Default',
        },

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

        createCampaign: {
            title: 'Ստեղծել կազմակերպություն',
            subtitle: 'Պատմեք ձեր նպատակի մասին',
            nameLabel: 'Անվանում',
            namePlaceholder: 'Օգնություն բուժման համար',
            descriptionLabel: 'Նկարագրություն',
            descriptionPlaceholder: 'Մանրամասն նկարագրեք ձեր իրավիճակը...',
            goalLabel: 'Նպատակային գումար (₽)',
            goalPlaceholder: '50000',
            categoryLabel: 'Կատեգորիա',
            coverImageLabel: '📸 Կազմի նկար',
            coverImageDesc: 'Կազմակերպության հիմնական պատկեր։ Առավելագույնը 5MB։',
            galleryLabel: '🖼️ Լուսանկարների պատկերասրահ',
            galleryDesc: 'Լրացուցիչ պատկերներ (մինչև 10 հատ)։ Այցելուները կարող են դրանք դիտել։',
            optional: 'ոչ պարտադիր',
            photos: 'լուսանկար',
            remove: 'Հեռացնել',
            cancel: 'Չեղարկել',
            create: 'Ստեղծել կազմակերպություն',
            creating: 'Ստեղծում...',
            error: 'Կազմակերպության ստեղծման սխալ',
            coverRequired: 'Կազմի լուսանկարը պարտադիր է',
            fileTooLarge: 'Ֆայլի չափը չպետք է գերազանցի 5MB',
            maxPhotos: 'Առավելագույնը 10 լուսանկար պատկերասրահում',
            documentLabel: '📄 Փաստաթուղթ',
            documentDesc: 'Վերբեռնեք փաստաթուղթ (PDF, DOC, DOCX)։ Առավելագույնը 10MB։',
            documentTooLarge: 'Փաստաթղթի չափը չպետք է գերազանցի 10MB'
        },

        myCampaigns: {
            title: 'Իմ կազմակերպությունները',
            create: 'Ստեղծել կազմակերպություն',
            empty: 'Դուք դեռ կազմակերպություն չունեք',
            createFirst: 'Ստեղծել առաջին կազմակերպությունը',
            view: 'Դիտել',
            delete: 'Ջնջել',
            confirmDelete: 'Ջնջել կազմակերպությունը՞',
            deleted: 'Կազմակերպությունը ջնջված է',
            deleteError: 'Ջնջման սխալ',
            edit: 'Խմբագրել'
        },

        profile: {
            balance: 'Մնացորդ',
            totalDonated: 'Ընդամենը նվիրաբերված',
            donationsCount: 'Նվիրատվություններ',
            history: 'Նվիրատվությունների պատմություն',
            noDonations: 'Դուք դեռ նվիրատվություններ չեք կատարել'
        },

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
            notFound: 'Կազմակերպությունը չի գտնվել',
            donationSuccess: 'Շնորհակալություն ձեր աջակցության համար! Ձեր նվիրատվությունը հաջողությամբ ուղարկվել է։',
            donationError: 'Ցավոք սրտի, նվիրատվության ընթացքում առաջացավ սխալ։ Խնդրում ենք փորձել ավելի ուշ։',
            gallery: 'Լուսանկարների պատկերասրահ',
            cover: 'Կազմ',
            downloadDocument: 'Ներբեռնել փաստաթուղթը',
            quickAmount: 'Արագ ընտրություն',
            customAmount: 'Կամ մուտքագրեք գումարը',
            yourBalance: 'Ձեր մնացորդը',
            insufficientFunds: 'Ցավոք սրտի, ձեր հաշվի վրա բավարար միջոցներ չկան։ Խնդրում ենք ընտրել ավելի փոքր գումար։',
            invalidAmount: 'Խնդրում ենք մուտքագրել ճիշտ գումար։',
            processing: 'Մշակում...',
            successTitle: 'Հաջողություն!',
            errorTitle: 'Ուշադրություն',
            modalClose: 'Հասկանալի է'
        },

        editCampaign: {
            title: 'Խմբագրել կազմակերպությունը',
            subtitle: 'Թարմացրեք ձեր կազմակերպության տեղեկությունները',
            coverImageDesc: 'Վերբեռնեք նոր նկար կամ պահեք ընթացիկը',
            galleryDesc: 'Վերբեռնեք նոր նկարներ կամ պահեք ընթացիկները',
            existingDocument: 'Ընթացիկ փաստաթուղթ',
            loadError: 'Կազմակերպությունը բեռնելու սխալ',
            error: 'Կազմակերպությունը թարմացնելու սխալ',
            saving: 'Պահպանում...',
            save: 'Պահպանել փոփոխությունները'
        }
    }
};

export type Language = 'en' | 'ru' | 'hy';
export type TranslationKeys = typeof translations.ru;