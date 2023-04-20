export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'tr'
      return availableLocales[foundLang] ? foundLang : 'tr'
    } catch (error) {
      return 'tr'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    const userLocale = getUserLocale();
    localeSetting.value = userLocale;
    locale.value = userLocale;
  }

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
