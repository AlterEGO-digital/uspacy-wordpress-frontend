import React, { createContext, useContext, useEffect, useState } from 'react';

import { getToken, setToken } from '../../helpers/db';
import { useErrorNotification } from '../../hooks/useErrorNotification';

interface IProps {
	children: React.ReactNode;
}
interface IFetchContext {
	getSecretKey(): void;
	regenerateSecretKey(): void;
	key: string;
	loadingRegenerate: boolean;
	loading: boolean;
}

export interface ISecretKey {
	id: number;
	status: boolean;
	message: string;
	key: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Fetch: any = createContext({});
export const useFetchContext = () => useContext<IFetchContext>(Fetch);

const FetchProvider: React.FC<IProps> = ({ children }) => {
	const [key, setKey] = useState('');
	const [loading, setLoading] = useState(false);
	const [loadingRegenerate, setLoadingRegenerate] = useState(false);
	const WORDPRESS_API = 'https://wordpress-uspacy.alterego.biz.ua/wordpress/v1';
	const { errorNotification } = useErrorNotification();
	const getSecretKey = async () => {
		setLoading(true);
		try {
			const token = await getToken();
			const res = await fetch(`${WORDPRESS_API}/keys/getKey`, {
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			const data: ISecretKey = await res.json();
			setKey(data?.key || '');
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	const regenerateSecretKey = async () => {
		setLoadingRegenerate(true);
		try {
			const token = await getToken();
			const res = await fetch(`${WORDPRESS_API}/keys/regenerateKey`, {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			const data: ISecretKey = await res.json();
			setKey(data?.key || '');
		} catch (e) {
			errorNotification();
		} finally {
			setLoadingRegenerate(false);
		}
	};

	useEffect(() => {
		getSecretKey();
		setToken(
			// eslint-disable-next-line max-len
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aC1zZXJ2aWNlL2ludGVybmFsL2F1dGgvdjEvcmVmcmVzaF90b2tlbiIsImlhdCI6MTY5MjAxNzg2NywiZXhwIjoxNjkyOTY4MDQ2LCJuYmYiOjE2OTI5NjQ0NDYsImp0aSI6InFGTmZ6VWZ0blhnRldHamgiLCJpZCI6MTM1NiwiZW1haWwiOiJlYmlyeXVrb2ZmQGdtYWlsLmNvbSIsInN1YiI6IjEzNTYiLCJhdXRoVXNlcklkIjo3MjksImZpcnN0TmFtZSI6IkV2Z2VuaXkiLCJsYXN0TmFtZSI6IkJpcnl1a29mZiIsIndvcmtzcGFjZUlkIjoic3RhZ2UzIiwiZG9tYWluIjoic3RhZ2UzLnN0YWdpbmcudXNwYWN5LnRlY2giLCJyb2xlcyI6WyJBRE1JTiJdLCJkZXBhcnRtZW50cyI6WzFdLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY3JtLmxlYWRzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5jcmVhdGUuYWxsb3dlZCIsImNybS5kZWFscy5jcmVhdGUuYWxsb3dlZCIsImNybS5pbnZvaWNlLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLnByb2R1Y3QuY3JlYXRlLmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuY3JlYXRlLmFsbG93ZWQiLCJocm0uaGlyaW5nLmNyZWF0ZS5hbGxvd2VkIiwiaHJtLmNhbmRpZGF0ZS5jcmVhdGUuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmNyZWF0ZS5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLmNyZWF0ZS5hbGxvd2VkIiwidGFza3MudGFzay5jcmVhdGUuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmNyZWF0ZS5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUuY3JlYXRlLmFsbG93ZWQiXSwidmlldyI6WyJjcm0ubGVhZHMudmlldy5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLnZpZXcuYWxsb3dlZCIsImNybS5jb21wYW5pZXMudmlldy5hbGxvd2VkIiwiY3JtLmRlYWxzLnZpZXcuYWxsb3dlZCIsImNybS5pbnZvaWNlLnZpZXcuYWxsb3dlZCIsImNybS5wcm9kdWN0LnZpZXcuYWxsb3dlZCIsImNybS5hY3Rpdml0eS52aWV3LmFsbG93ZWQiLCJocm0uaGlyaW5nLnZpZXcuYWxsb3dlZCIsImhybS5jYW5kaWRhdGUudmlldy5hbGxvd2VkIiwiaHJtLmRlcGFydG1lbnQudmlldy5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLnZpZXcuYWxsb3dlZCIsInRhc2tzLnRhc2sudmlldy5hbGxvd2VkIiwidGFza3MuYm9hcmQudmlldy5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUudmlldy5hbGxvd2VkIl0sImVkaXQiOlsiY3JtLmxlYWRzLmVkaXQuYWxsb3dlZCIsImNybS5jb250YWN0cy5lZGl0LmFsbG93ZWQiLCJjcm0uY29tcGFuaWVzLmVkaXQuYWxsb3dlZCIsImNybS5kZWFscy5lZGl0LmFsbG93ZWQiLCJjcm0uaW52b2ljZS5lZGl0LmFsbG93ZWQiLCJjcm0ucHJvZHVjdC5lZGl0LmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuZWRpdC5hbGxvd2VkIiwiaHJtLmhpcmluZy5lZGl0LmFsbG93ZWQiLCJocm0uY2FuZGlkYXRlLmVkaXQuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmVkaXQuYWxsb3dlZCIsImhybS5lbXBsb3llZS5lZGl0LmFsbG93ZWQiLCJ0YXNrcy50YXNrLmVkaXQuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmVkaXQuYWxsb3dlZCIsInRhc2tzLnRlbXBsYXRlLmVkaXQuYWxsb3dlZCIsIm5ld3NfZmVlZC5uZXdzLmVkaXQuYWxsb3dlZCJdLCJkZWxldGUiOlsiY3JtLmxlYWRzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5kZWxldGUuYWxsb3dlZCIsImNybS5kZWFscy5kZWxldGUuYWxsb3dlZCIsImNybS5pbnZvaWNlLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLnByb2R1Y3QuZGVsZXRlLmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuZGVsZXRlLmFsbG93ZWQiLCJocm0uaGlyaW5nLmRlbGV0ZS5hbGxvd2VkIiwiaHJtLmNhbmRpZGF0ZS5kZWxldGUuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmRlbGV0ZS5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLmRlbGV0ZS5hbGxvd2VkIiwidGFza3MudGFzay5kZWxldGUuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmRlbGV0ZS5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUuZGVsZXRlLmFsbG93ZWQiLCJuZXdzX2ZlZWQubmV3cy5kZWxldGUuYWxsb3dlZCJdfSwidGFyaWZmSWQiOjN9.KI-hu-RTmUiHaI7Dd9i70T39XSBK45r_mksNbLZEtvs',
		);
	}, []);

	return (
		<Fetch.Provider
			value={{
				getSecretKey,
				regenerateSecretKey,
				key,
				loadingRegenerate,
				loading,
			}}
		>
			{children}
		</Fetch.Provider>
	);
};

export default FetchProvider;
