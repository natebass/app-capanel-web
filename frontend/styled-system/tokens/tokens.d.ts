/* eslint-disable */
export type Token = `aspectRatios.${AspectRatioToken}` | `animations.${AnimationToken}` | `blurs.${BlurToken}` | `borders.${BorderToken}` | `colors.${ColorToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `letterSpacings.${LetterSpacingToken}` | `lineHeights.${LineHeightToken}` | `radii.${RadiusToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `zIndex.${ZIndexToken}` | `cursor.${CursorToken}` | `breakpoints.${BreakpointToken}` | `shadows.${ShadowToken}`

export type ColorPalette = "transparent" | "current" | "black" | "white" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "bg" | "fg" | "border"

export type AspectRatioToken = "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce"

export type BlurToken = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export type BorderToken = "xs" | "sm" | "md" | "lg" | "xl"

export type ColorToken = "transparent" | "current" | "black" | "white" | "whiteAlpha.50" | "whiteAlpha.100" | "whiteAlpha.200" | "whiteAlpha.300" | "whiteAlpha.400" | "whiteAlpha.500" | "whiteAlpha.600" | "whiteAlpha.700" | "whiteAlpha.800" | "whiteAlpha.900" | "whiteAlpha.950" | "blackAlpha.50" | "blackAlpha.100" | "blackAlpha.200" | "blackAlpha.300" | "blackAlpha.400" | "blackAlpha.500" | "blackAlpha.600" | "blackAlpha.700" | "blackAlpha.800" | "blackAlpha.900" | "blackAlpha.950" | "gray.50" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "gray.950" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "red.950" | "orange.50" | "orange.100" | "orange.200" | "orange.300" | "orange.400" | "orange.500" | "orange.600" | "orange.700" | "orange.800" | "orange.900" | "orange.950" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "yellow.950" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "green.950" | "teal.50" | "teal.100" | "teal.200" | "teal.300" | "teal.400" | "teal.500" | "teal.600" | "teal.700" | "teal.800" | "teal.900" | "teal.950" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "blue.950" | "cyan.50" | "cyan.100" | "cyan.200" | "cyan.300" | "cyan.400" | "cyan.500" | "cyan.600" | "cyan.700" | "cyan.800" | "cyan.900" | "cyan.950" | "purple.50" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "purple.500" | "purple.600" | "purple.700" | "purple.800" | "purple.900" | "purple.950" | "pink.50" | "pink.100" | "pink.200" | "pink.300" | "pink.400" | "pink.500" | "pink.600" | "pink.700" | "pink.800" | "pink.900" | "pink.950" | "bg" | "bg.subtle" | "bg.muted" | "bg.emphasized" | "bg.inverted" | "bg.panel" | "bg.error" | "bg.warning" | "bg.success" | "bg.info" | "fg" | "fg.muted" | "fg.subtle" | "fg.inverted" | "fg.error" | "fg.warning" | "fg.success" | "fg.info" | "border" | "border.muted" | "border.subtle" | "border.emphasized" | "border.inverted" | "border.error" | "border.warning" | "border.success" | "border.info" | "gray.contrast" | "gray.fg" | "gray.subtle" | "gray.muted" | "gray.emphasized" | "gray.solid" | "gray.focusRing" | "red.contrast" | "red.fg" | "red.subtle" | "red.muted" | "red.emphasized" | "red.solid" | "red.focusRing" | "orange.contrast" | "orange.fg" | "orange.subtle" | "orange.muted" | "orange.emphasized" | "orange.solid" | "orange.focusRing" | "green.contrast" | "green.fg" | "green.subtle" | "green.muted" | "green.emphasized" | "green.solid" | "green.focusRing" | "blue.contrast" | "blue.fg" | "blue.subtle" | "blue.muted" | "blue.emphasized" | "blue.solid" | "blue.focusRing" | "yellow.contrast" | "yellow.fg" | "yellow.subtle" | "yellow.muted" | "yellow.emphasized" | "yellow.solid" | "yellow.focusRing" | "teal.contrast" | "teal.fg" | "teal.subtle" | "teal.muted" | "teal.emphasized" | "teal.solid" | "teal.focusRing" | "purple.contrast" | "purple.fg" | "purple.subtle" | "purple.muted" | "purple.emphasized" | "purple.solid" | "purple.focusRing" | "pink.contrast" | "pink.fg" | "pink.subtle" | "pink.muted" | "pink.emphasized" | "pink.solid" | "pink.focusRing" | "cyan.contrast" | "cyan.fg" | "cyan.subtle" | "cyan.muted" | "cyan.emphasized" | "cyan.solid" | "cyan.focusRing" | "colorPalette" | "colorPalette.50" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.950" | "colorPalette.subtle" | "colorPalette.muted" | "colorPalette.emphasized" | "colorPalette.inverted" | "colorPalette.panel" | "colorPalette.error" | "colorPalette.warning" | "colorPalette.success" | "colorPalette.info" | "colorPalette.contrast" | "colorPalette.fg" | "colorPalette.solid" | "colorPalette.focusRing"

export type DurationToken = "fastest" | "faster" | "fast" | "moderate" | "slow" | "slower" | "slowest"

export type EasingToken = "ease-in" | "ease-out" | "ease-in-out" | "ease-in-smooth"

export type FontToken = "heading" | "body" | "mono"

export type FontSizeToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LetterSpacingToken = "tighter" | "tight" | "wide" | "wider" | "widest"

export type LineHeightToken = "shorter" | "short" | "moderate" | "tall" | "taller"

export type RadiusToken = "none" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "l1" | "l2" | "l3"

export type SpacingToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5" | "-4.5"

export type SizeToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "max" | "min" | "fit" | "prose" | "full" | "dvh" | "svh" | "lvh" | "dvw" | "svw" | "lvw" | "vw" | "vh" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type ZIndexToken = "hide" | "base" | "docked" | "dropdown" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipNav" | "toast" | "tooltip" | "max"

export type CursorToken = "button" | "checkbox" | "disabled" | "menuitem" | "option" | "radio" | "slider" | "swittch"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type ShadowToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "inset"

export type Tokens = {
		aspectRatios: AspectRatioToken
		animations: AnimationToken
		blurs: BlurToken
		borders: BorderToken
		colors: ColorToken
		durations: DurationToken
		easings: EasingToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		letterSpacings: LetterSpacingToken
		lineHeights: LineHeightToken
		radii: RadiusToken
		spacing: SpacingToken
		sizes: SizeToken
		zIndex: ZIndexToken
		cursor: CursorToken
		breakpoints: BreakpointToken
		shadows: ShadowToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"