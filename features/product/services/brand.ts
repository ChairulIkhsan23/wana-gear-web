/* eslint-disable @typescript-eslint/no-explicit-any */
export const brandService = {
  getBrands: async (): Promise<{ data: any[] }> => {
    await new Promise((r) => setTimeout(r, 200))
    return {
      data: [
        { id: 1, name: "Eiger", slug: "eiger", logo: { url: "https://placehold.co/176x176?text=Eiger" } },
        { id: 2, name: "Consina", slug: "consina", logo: { url: "https://placehold.co/176x176?text=Consina" } },
        { id: 3, name: "Arei", slug: "arei", logo: { url: "https://placehold.co/176x176?text=Arei" } },
        { id: 4, name: "Rei", slug: "rei", logo: { url: "https://placehold.co/176x176?text=Rei" } },
        { id: 5, name: "The North Face", slug: "the-north-face", logo: { url: "https://placehold.co/176x176?text=TNF" } },
        { id: 6, name: "Columbia", slug: "columbia", logo: { url: "https://placehold.co/176x176?text=Columbia" } },
      ],
    }
  },
}

