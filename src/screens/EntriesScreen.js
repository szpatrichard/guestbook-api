/* Imports */
import { entriesData } from "../guestbook-api";

export class EntriesScreen {
	static render = async () => {
		const entries = await entriesData();
		return `
            <div class="entries">
                ${entries
					.map(
						(entry) => `
                        <div class="entry">
                            <div class="entry-title">
                                <h3>
                                    <a href="${entry.slug}">
                                        ${entry.title}
                                    </a>
                                </h3>
                            </div>
                            <div class="entry-content">
                                ${entry.content}
                            </div>
                            <div class="entry-author-date">
                                <small>
                                Entry posted by
                                ${
									entry.author
								} on                                 
                                ${new Date(
									entry.publishedDate
								).toLocaleString()}${
							entry.editedDate
								? `, edited on ${new Date(
										entry.editedDate
								  ).toLocaleString()}`
								: `.`
						}
                                </small>    
                            </div>
                            <div class="entry-published-date">
                            </div>
                        </div>
                    `
					)
					.join("\n")}
            </div>
        `;
	};
}
