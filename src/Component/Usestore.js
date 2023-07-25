import create from "zustand";
const Usestore = create((set) => ({
    name: '',
    email: '',
    image: '',
    logout: '',
    uid: '',
    setzName: (name) => set({ name }),
    setzEmail: (email) => set({ email }),
    setzImage: (image) => set({ image }),
    setzlogout: (logout) => set({ logout }),
    setzuid: (uid) => set({ uid }),
}))

export default Usestore