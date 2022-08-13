import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Section, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu, MdFace } from "react-icons/md";
import { FaRegGem, FaRegLifeRing, FaRegCalendarCheck, FaRegStar } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://s.rbk.ru/v1_companies_s3/resized/1200xH/media/trademarks/66bbdc0d-2dcd-492d-9d71-922517f0cb43.jpg"} />
			<link rel={"shortcut icon"} href={"https://s.rbk.ru/v1_companies_s3/resized/1200xH/media/trademarks/66bbdc0d-2dcd-492d-9d71-922517f0cb43.jpg"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Link position="relative" transition="opacity 200ms ease" quarkly-title="Link" href="/">
				<Image z-index="3" src="https://avatars.mds.yandex.net/i?id=5293176557a6b38babd4a271a7f95764-4903442-images-thumbs&n=13" width="120px" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="icon"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
				<Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px" />
				<Override
					slot="menu"
					md-height="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					md-width="100%"
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						hover-opacity="1"
						md-transition="opacity .15s ease 0s"
						md-font="16px/24px sans-serif"
						font="--base"
						color="--dark"
						opacity=".5"
						transition="opacity .15s ease 0s"
						text-transform="initial"
						md-color="--dark"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						text-decoration-line="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
					<Override
						slot="item"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
			</Components.BurgerMenu>
			<Button
				hover-transform="translateY(-4px)"
				font="--base"
				z-index="5"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				padding="8px 18px 8px 18px"
				letter-spacing="0.5px"
				background="--color-primary"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
			>
				Заказать доставку
			</Button>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
			>
				<Text
					font="--headline1"
					margin="0px 0px 0px 0px"
					quarkly-title="Title"
					sm-text-align="center"
					text-align="center"
					md-font="--headline2"
					display="flex"
					align-items="center"
					color="--light"
					justify-content="center"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="--headline2"
				>
					О нас
				</Text>
			</Box>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-style="solid"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			quarkly-title="About"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			md-padding="50px 0px 50px 0px"
			sm-padding="0px 0 0px 0"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
				margin="0px 32px 0px 32px"
			/>
			<Text
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-text-align="center"
				font="--base"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				text-align="center"
			>
				Еще больше информации
			</Text>
			<Text
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
			>
				Какая-то инф-я 1.
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			padding="100px 0px 100px 0px"
			quarkly-title="Our Services"
			xl-padding="100px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
			/>
			<Text
				letter-spacing="1px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				margin="0px 0px 10px 0px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				font="--base"
			>
				ОЧЕНЬ МНОГО ИНФЫ
			</Text>
			<Text
				lg-margin="0px 0px 48px 0px"
				md-font="--headline3"
				sm-margin="0px 0px 36px 0px"
				font="--headline2"
				margin="0px 0px 72px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
			>
				Наши сервисы
			</Text>
			<Box
				grid-template-columns="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="grid"
				grid-gap="32px"
			>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegGem}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text color="--darkL2" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						Высокое качество
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegLifeRing}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Best Support
					</Text>
					<Text
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box justify-content="center" display="flex" flex-direction="column" align-items="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="md"
						icon={MdFace}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Personal Approach
					</Text>
					<Text
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegCalendarCheck}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Flexible Schedule
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="fa"
						icon={FaRegStar}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text color="--darkL2" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						Extensive Experience
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
						font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						color="--primary"
						category="ai"
						icon={AiOutlineThunderbolt}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Better Efficiency
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-lightD1"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					color="--darkL2"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
				>
					Hi! I'm a paragraph.{" "}
				</Text>
				<Text
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
					margin="0px 0px 0px 0px"
				>
					Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer.
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
				>
					Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				</Text>
			</Box>
		</Section>
		<Section
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			quarkly-title="USP"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				min-height="480px"
				display="flex"
				justify-content="center"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				lg-min-height="420px"
				sm-min-height="280px"
				padding="36px 24px 36px 24px"
				align-items="center"
				flex-direction="column"
				md-min-height="360px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
				>
					Make It Work.
				</Text>
				<Text
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
				>
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					letter-spacing="0.5px"
					transition="opacity .15s ease 0s"
					z-index="5"
					margin="10px auto 0px auto"
					padding="8px 36px 8px 36px"
					position="relative"
					opacity="1"
					hover-opacity=".85"
					hover-box-shadow="none"
					active-box-shadow="none"
					width="fit-content"
					font="--lead"
					focus-box-shadow="none"
					md-font="--base"
					color="--darkL2"
					background="--color-light"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
			margin="0 0 0 0"
			padding="16px 0 16px 0"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
				display="grid"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" width="28px" height="28px" />
					<Link
						hover-text-decoration-line="underline"
						white-space="nowrap"
						color="--dark"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						href="https://quarkly.io/"
						font="--base"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end" facebook="https://www.facebook.com/quarklyapp/">
					<Override slot="link" background="none" border-radius="50%" />
					<Override slot="icon" color="--dark" />
				</SocialMedia>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://rosseti.ru/"}
			target={"_blank"}
		>
			Made by Rosseti
		</Link>
	</Theme>;
});