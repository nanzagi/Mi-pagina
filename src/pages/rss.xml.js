import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	
	// FILTRADO CRUCIAL: Solo posts con fecha
	const validPosts = posts.filter((post) => post.data.pubDate);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: validPosts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`, // Es mejor usar slug que id
		})),
	});
}