export const getLabels = async () => (
    [
        {id: 1, bin: "B-19", header: "L-10 - S-15", colour: "white", template: "tote-l", location: "standard"},
        {id: 2, bin: "B80", header: "L-15 S-9", colour: "blue", template: "range", location: "high"},
        {id: 3, bin: "B-12", header: "L-23 S-17", colour: "red", template: "tote-s", location: "high"},
    ]
);

export const getLabel = async (labelId) => {
    labelId = Number(labelId);
    let labels = await getLabels();
    return labels.find(o => o.id === labelId);
};
