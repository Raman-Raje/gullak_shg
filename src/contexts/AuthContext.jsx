import React, { createContext, useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';

// supabase
import supabase from "@client/client";

// ui
import { SyncLoaderSpinner } from "@ui/Spinners";

// page
import SignInPage from "@pages/Public/SignInPage";

// context
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "@store/slices/profileSlice";

// Capacitor
import { Capacitor } from '@capacitor/core';

const AuthContext = createContext({})

export const AuthProvider = () => {

    const [session, setSession] = useState({})
    const [user_id, setUser_id] = useState(null)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);

            if (session) {
                dispatch(fetchUserProfile(session.user.id));
                setUser_id(session.user.id);
            }

            setLoading(false);
        };

        fetchSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session) {
                dispatch(fetchUserProfile(session.user.id));
                setUser_id(session.user.id);
            } else {
                setUser_id(null);
            }
        });

        return () => subscription.unsubscribe();
    }, [dispatch]);

    useEffect(() => {
        const handleDeepLink = async (event) => {
            if (event.url && event.url.startsWith('myapp://auth')) {
                const { data, error } = await supabase.auth.signIn({
                    provider: 'google',
                    options: { redirectTo: 'myapp://auth' }
                });

                if (data) {
                    navigate('/');
                } else {
                    console.error('Error signing in:', error);
                }
            }
        };

        if (Capacitor.isNativePlatform()) {
            Capacitor.App.addListener('appUrlOpen', handleDeepLink);
        }

        return () => {
            if (Capacitor.isNativePlatform()) {
                Capacitor.App.removeListener('appUrlOpen', handleDeepLink);
            }
        };
    }, []);

    if (loading) {
        return (
            <SyncLoaderSpinner loading={loading} />
        )
    }

    if (!session) {
        return (
            <SignInPage />
        )
    }

    return (
        <AuthContext.Provider value={{ session, user_id, setSession }}>
            <Outlet />
        </AuthContext.Provider>
    )
}

export default AuthContext;