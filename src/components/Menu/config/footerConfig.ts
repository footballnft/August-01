import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://contact-form3.vercel.app/',
        isHighlighted: true,
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: '—',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: '',
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
]
