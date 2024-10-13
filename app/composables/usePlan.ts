import type { PlanCardProps } from "~~/types"

export function processPlanRequest(data: PlanosQuery | null): PlanCardProps[] | null {
    if (!data) return null

    const nuxtApp = useNuxtApp()
    const { locale, t } = nuxtApp.$i18n

    const res = data.plans.map((item) => {
        const translation = item.translations.at(0) ?? null

        if (!translation) return null

        return {
            title: translation.title,
            paragraph: translation.description,
            price: translation.price ? new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'BRL' }).format(translation.price) : null,
            features: translation.features,
            betterChoice: item.featured,

            variant: item.variant,
            
            priceDescription: t('plans.price-description-monthly'),
        }
    }).filter((data) => data !== null)

    return res
}