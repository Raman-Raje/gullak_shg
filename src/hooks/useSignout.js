import useAuth from "./useAuth";
import supabase from "@client/client";

const useSignout = () => {

    const { setSession, setUser } = useAuth();

    const signOut = async () => {
        try {

            // sign out
            const { error } = supabase.auth.signOut();
            setUser({});
            setSession({});
            

        } catch (error) {
            console.log('error', error);
        }
    }

    return signOut;
}

export default useSignout