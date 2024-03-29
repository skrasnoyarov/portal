import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';

import type {Profile} from '../../../../features/EditableProfileCard/model/types';
import {Currency} from '../../../../shared/const/common';

import type {ServerStatus} from '@/shared/types/server';
import {Input} from '@/shared/ui';
import {Avatar} from '@/shared/ui/Avatar';
import {Select} from '@/shared/ui/Select';

import styles from './ProfileCard.module.scss';

export interface IProps {
	className?: string;
	profile?: Profile;
	readOnly?: boolean;
	status: ServerStatus;
	onChangeFirstName?: (value: string) => void;
	onChangeLastName?: (value: string) => void;
}

// Может стоит утащить в CurrencySelect
const options = [
	{
		value: Currency.EUR,
		content: Currency.EUR,
	},
];

const ProfileCard: FC<IProps> = (props): JSX.Element | null => {
	const {t} = useTranslation('profile');
	const {profile, readOnly, onChangeFirstName, onChangeLastName} = props;

	if (profile) {
		return (
			<div className={styles.card}>
				{profile.avatar ? (
					<Avatar alt="AVATAR" size={200} src={profile.avatar} />
				) : null}
				<div className={styles.fields}>
					<Input
						onChange={onChangeFirstName}
						readOnly={readOnly}
						value={profile?.first}
						placeholder={t('fields.name')}
						testId="ProfileCard__firstName"
					/>
					<Input
						onChange={onChangeLastName}
						readOnly={readOnly}
						value={profile?.lastname}
						placeholder={t('fields.surname')}
						testId="ProfileCard__lastName"
					/>
					<Select label="Укажите валюту" options={options} />
				</div>
			</div>
		);
	}

	return null;
};

export default memo(ProfileCard);
