# Chinese typography and font licensing notes

Kunaris uses only font families with a clear commercial-use path or operating-system local fallbacks. No proprietary font file is bundled in this project.

## Open-source families referenced by the Chinese CSS

- **LXGW WenKai / 霞鹜文楷** — SIL Open Font License 1.1 (OFL-1.1). The upstream project states that the font may be used, embedded, modified and redistributed, including commercial use, subject to the OFL terms.
- **Noto Sans CJK / Noto Serif CJK** — SIL Open Font License 1.1 (OFL-1.1).
- **Source Han Sans / Source Han Serif** — SIL Open Font License 1.1 (OFL-1.1).

## Current implementation

This build does **not** redistribute any of those font binaries and does not call Google Fonts or another remote font CDN. CSS names the open-source families first and then uses local operating-system Chinese fonts as fallbacks. This keeps the website lightweight and avoids adding an unverified font file.

If Kunaris later self-hosts a font binary for identical rendering across devices, obtain it from the official upstream project and include the applicable OFL-1.1 license text alongside the redistributed font files.
