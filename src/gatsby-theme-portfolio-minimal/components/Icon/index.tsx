import React from 'react';
import { IconBehance } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconBehance';
import { IconExternal } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconExternal';
import { IconGithub } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconGithub';
import { IconHashnode } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconHashnode';
import { IconLinkedIn } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconLinkedIn';
import { IconMail } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconMail';
import { IconMedium } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconMedium';
import { IconTwitter } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconTwitter';
import { IconMastodon } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconMastodon';
import { IconBuyMeACoffee } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconBuyMeACoffee';
import { IconDevTo } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconDevTo';
import { IconDiscord } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconDiscord';
import { IconDribble } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconDribble';
import { IconGitlab } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconGitlab';
import { IconGoodreads } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconGoodreads';
import { IconInstagram } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconInstagram';
import { IconPatreon } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconPatreon';
import { IconReddit } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconReddit';
import { IconStackOverflow } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconStackOverflow';
import { IconTwitch } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconTwitch';
import { IconYouTube } from 'gatsby-theme-portfolio-minimal/src/components/Icon/IconYouTube';
import { IconWhatsApp } from './WhatsApp';
import { IconFacebook } from './Facebook';

interface IconProps {
    name: string;
    color?: string;
}

export function Icon(props: IconProps): React.ReactElement | null {
    switch (props.name.toLowerCase()) {
        case 'external':
            return <IconExternal color={props.color} />;
        case 'behance':
            return <IconBehance color={props.color} />;
        case 'github':
            return <IconGithub color={props.color} />;
        case 'linkedin':
            return <IconLinkedIn color={props.color} />;
        case 'mail':
            return <IconMail color={props.color} />;
        case 'medium':
            return <IconMedium color={props.color} />;
        case 'twitter':
            return <IconTwitter color={props.color} />;
        case 'mastodon':
            return <IconMastodon color={props.color} />;
        case 'hashnode':
            return <IconHashnode color={props.color} />;
        case 'buymeacoffee':
            return <IconBuyMeACoffee color={props.color} />;
        case 'devto':
            return <IconDevTo color={props.color} />;
        case 'discord':
            return <IconDiscord color={props.color} />;
        case 'dribble':
            return <IconDribble color={props.color} />;
        case 'gitlab':
            return <IconGitlab color={props.color} />;
        case 'goodreads':
            return <IconGoodreads color={props.color} />;
        case 'instagram':
            return <IconInstagram color={props.color} />;
        case 'patreon':
            return <IconPatreon color={props.color} />;
        case 'reddit':
            return <IconReddit color={props.color} />;
        case 'stackoverflow':
            return <IconStackOverflow color={props.color} />;
        case 'twitch':
            return <IconTwitch color={props.color} />;
        case 'youtube':
            return <IconYouTube color={props.color} />;
        case 'whatsapp':
            return <IconWhatsApp color={props.color} />;
        case 'facebook':
            return <IconFacebook color={props.color} />;
        default:
            return null;
    }
}