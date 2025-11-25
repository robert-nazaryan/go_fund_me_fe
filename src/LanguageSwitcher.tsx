import { useState, useRef, useEffect } from 'react';
import './LanguageSwitcher.css';
import {Language} from "./translations.ts";
import {useLanguage} from "./context/LanguageContext.tsx";

// SVG иконки флагов
const FlagIcons = {
    ru: () => (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <rect width="24" height="6" fill="#fff"/>
            <rect y="6" width="24" height="6" fill="#0039a6"/>
            <rect y="12" width="24" height="6" fill="#d52b1e"/>
        </svg>
    ),
    en: () => (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <rect width="24" height="18" fill="#012169"/>
            <path d="M0 0L24 18M24 0L0 18" stroke="#fff" strokeWidth="3"/>
            <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="2"/>
            <path d="M12 0V18M0 9H24" stroke="#fff" strokeWidth="5"/>
            <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="3"/>
        </svg>
    ),
    hy: () => (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <rect width="24" height="6" fill="#d90012"/>
            <rect y="6" width="24" height="6" fill="#0033a0"/>
            <rect y="12" width="24" height="6" fill="#f2a800"/>
        </svg>
    )
};

const languages: { code: Language; name: string }[] = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'hy', name: 'Հայերեն' }
];

function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
    const CurrentFlag = FlagIcons[currentLanguage.code];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="language-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
            >
        <span className="language-flag-svg">
          <CurrentFlag />
        </span>
                <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
                <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map(lang => {
                        const FlagComponent = FlagIcons[lang.code];
                        return (
                            <button
                                key={lang.code}
                                className={`language-option ${language === lang.code ? 'active' : ''}`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                <span className="language-flag-svg">
                  <FlagComponent />
                </span>
                                <span className="language-name">{lang.name}</span>
                                {language === lang.code && <span className="check-mark">✓</span>}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;