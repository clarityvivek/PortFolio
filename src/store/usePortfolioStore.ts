import { create } from 'zustand';

interface PortfolioState {
  activeFilter: "All" | "Full-Stack" | "ML-Systems" | "Hardware-IoT";
  setActiveFilter: (filter: "All" | "Full-Stack" | "ML-Systems" | "Hardware-IoT") => void;
}

export const usePortfolioStore = create<PortfolioState>()((set) => ({
  activeFilter: "All",
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}));