import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Description = () => {
	const theme = useTheme();
	const { t } = useTranslation('settings');
	return (
		<Box
			sx={{
				marginTop: '15px',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				'& a': {
					textDecoration: 'none',
					color: theme.palette.primary.main,
				},
				'& p': {
					fontSize: '14px',
					color: theme.palette.text.secondary,
				},
			}}
		>
			<Typography
				sx={{
					fontSize: '16px !important',
					fontWeight: '800 !important',
					color: `${theme.palette.text.primary} !important`,
				}}
			>
				{t('forApplicationSettings')}:
			</Typography>
			<Typography>
				{t('downloadWordPressPlugin')}
				<a download href="https://wordpress-uspacy.alterego.biz.ua/alterego-uspacy-and-contact-forms-7-integrations.zip">
					alterego-uspacy-and-contact-forms-7-integrations
				</a>
			</Typography>
			<Typography>
				{t('installPluginOnSite')}
				<br />
				{t('instructionsForWordPress')}{' '}
				<a href="https://wordpress-uspacy.alterego.biz.ua/AlteregoWordpressUspacyInstruction.pdf" target="_blank" rel="noreferrer">
					{t('here')}
				</a>
			</Typography>
			<Typography>
				{t('pluginSettingsSpecifySecretKey')}
				<br />
				{t('configureContactForm')}
			</Typography>
			<Typography>
				{t('isThereNotEnoughFunctionalityForIntegration')}
				<br />
				{t('teamIsInTouch')} –<a href="tel:+380507007572"> +38 050 700 75 72</a> {t('or')}
				<a href="mailto:y.andrusyak@alterego.digital"> y.andrusyak@alterego.digital</a>
			</Typography>
		</Box>
	);
};

export default Description;
