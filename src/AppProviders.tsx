import { ReactNode } from 'react';
import {LanguageProvider} from "./context/LanguageContext.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";


interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <LanguageProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </LanguageProvider>
    );
}